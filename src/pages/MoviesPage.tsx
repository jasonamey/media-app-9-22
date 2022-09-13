import ContentPageContainer from '../components/ui/ContentPageContainer'
import MediaContentDisplay from '../components/MediaContentDisplay'
import useFirebaseCollection from '../hooks/useFirebaseCollection'
import { MediaContent } from '../types/MediaContent'

type FirebaseData =
  | [isLoading: boolean, data: MediaContent[]]
  | [isLoading: boolean, data: []]

const MoviesPage = () => {
  const [isLoading = true, data = []] = useFirebaseCollection(
    'category',
    'Movie'
  ) as FirebaseData
  return (
    <ContentPageContainer>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <>
          <MediaContentDisplay
            content={data as MediaContent[]}
            headline={'Movies'}
          />
        </>
      )}
    </ContentPageContainer>
  )
}

export default MoviesPage
