import * as React from 'react'
import { useParams } from 'react-router-dom'
import ContentPageContainer from '../components/ui/ContentPageContainer'
import { db } from '../firebase'
import { collection, query, getDocs, where } from 'firebase/firestore'
import MediaContentDisplay from '../components/MediaContentDisplay'
import { MediaContent } from '../types/MediaContent'

const SearchPage = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState([])
  const { id } = useParams()
  React.useEffect(() => {
    let isMounted = true
    ;(async () => {
      const q = await query(
        collection(db, 'content'),
        where('titleCombinations', 'array-contains', id)
      )
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
  }, [id])

  return (
    <ContentPageContainer>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <>
          <MediaContentDisplay
            content={data as MediaContent[]}
            headline={`Found ${data.length} result${
              data.length === 1 ? '' : 's'
            } for '${id}'`}
          />
        </>
      )}
    </ContentPageContainer>
  )
}

export default SearchPage
