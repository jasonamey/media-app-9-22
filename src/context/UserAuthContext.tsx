import * as React from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { User } from '../types'

interface IAuthContext {
  user: User
  userBookmarks: string[]
  logIn: (email: string, password: string) => void
  signUp: (email: string, password: string) => void
  logOut: () => void
  saveBookmarks: (bookmarks: string[]) => void
  manageBookmark: (bookmarkAction: 'add' | 'remove', bookmark: string) => void
}

export const UserAuthContext: React.Context<IAuthContext> = React.createContext(
  {} as IAuthContext
)

export function UserAuthContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = React.useState<User>({} as User)
  const [userBookmarks, setUserBookmarks] = React.useState<string[]>([])

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password).then(async (data) => {
      await setDoc(doc(db, 'users', data.user.uid), {
        email: data.user.email,
        bookmarks: [],
      })
    })
  }
  function logOut() {
    signOut(auth)
    location.reload()
  }

  async function saveBookmarks(bookmarks: string[]) {
    const userRef = doc(db, 'users', user.id)
    await updateDoc(userRef, {
      bookmarks,
    })
  }

  async function manageBookmark(
    bookmarkAction: 'add' | 'remove',
    bookmark: string
  ) {
    if (bookmarkAction === 'add') {
      const newBookmarks = [...userBookmarks, bookmark]
      setUserBookmarks(newBookmarks)
      if (user.id) {
        await saveBookmarks(newBookmarks)
      }
    }
    if (bookmarkAction === 'remove') {
      const newBookmarks = userBookmarks.filter((item) => item !== bookmark)
      setUserBookmarks(newBookmarks)
      if (user.id) {
        await saveBookmarks(newBookmarks)
      }
    }
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentuser) => {
      let docRef
      let docSnap
      if (!currentuser) {
        setUser({} as User)
        setUserBookmarks([])
      } else {
        docRef = doc(db, 'users', currentuser.uid)
        docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data() as User
          setUser({ ...data, id: docSnap.id })
          setUserBookmarks(data.bookmarks)
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <UserAuthContext.Provider
      value={{
        user,
        userBookmarks,
        logIn,
        signUp,
        logOut,
        manageBookmark,
        saveBookmarks,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  )
}

export function useUserAuth() {
  return React.useContext(UserAuthContext)
}
