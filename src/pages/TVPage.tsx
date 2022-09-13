import * as React from 'react'
import ContentPageContainer from '../components/ui/ContentPageContainer'
import MediaContentDisplay from '../components/MediaContentDisplay'
import useFirebaseCollection from '../hooks/useFirebaseCollection'
import { MediaContent } from '../types/MediaContent'

type FirebaseData =
  | [isLoading: boolean, data: MediaContent[]]
  | [isLoading: boolean, data: []]

const TVPage = () => {
  const [isLoading = true, data = []] = useFirebaseCollection(
    'category',
    'TV Series'
  ) as FirebaseData

  return (
    <ContentPageContainer>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <>
          <MediaContentDisplay
            content={data as MediaContent[]}
            headline={'TV Series'}
          />
        </>
      )}
    </ContentPageContainer>
  )
}

export default TVPage
