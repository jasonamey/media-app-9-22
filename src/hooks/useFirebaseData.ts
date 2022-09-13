import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, query, getDocs } from 'firebase/firestore'
import { MediaContent } from '../types/MediaContent'

const useFirebaseData = () => {
  const [data, setData] = useState([] as MediaContent[])
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    let isMounted = true
    ;(async () => {
      const q = await query(collection(db, 'content'))
      const querySnapshot = await getDocs(q)
      const filmData = [] as any
      querySnapshot.forEach((doc) => {
        const film = { id: doc.id, ...doc.data() }
        filmData.push(film)
      })
      if (isMounted) {
        setData(() => filmData)
        setIsLoading(false)
      }
    })()
    return () => {
      isMounted = false
    }
  }, [])
  return [isLoading, data]
}

export default useFirebaseData
