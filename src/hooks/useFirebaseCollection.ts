import React, { useState } from 'react'
import { db } from '../firebase'
import { collection, query, getDocs, where } from 'firebase/firestore'
import { MediaContent } from '../types'

const useFirebaseCollection = (contentField: string, contentValue: string) => {
  const [data, setData] = useState([] as MediaContent[])
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    let isMounted = true
    ;(async () => {
      const q = await query(
        collection(db, 'content'),
        where(contentField, '==', contentValue)
      )
      const querySnapshot = await getDocs(q)
      const filmData = [] as any
      querySnapshot.forEach((doc) => {
        const film = { id: doc.id, ...doc.data() }
        console.log('da film', film)
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
  }, [contentField, contentValue])

  return [isLoading, data]
}

export default useFirebaseCollection
