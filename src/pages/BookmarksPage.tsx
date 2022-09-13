import * as React from 'react'
import ContentPageContainer from '../components/ui/ContentPageContainer'
import MediaContentDisplay from '../components/MediaContentDisplay'
import useFirebaseData from '../hooks/useFirebaseData'
import { MediaContent } from '../types/MediaContent'
import { useUserAuth } from '../context/UserAuthContext'

type FirebaseData =
  | [isLoading: boolean, data: MediaContent[]]
  | [isLoading: boolean, data: []]

const BookmarksPage = () => {
  const [isLoading = true, data = []] = useFirebaseData() as FirebaseData
  const { userBookmarks } = useUserAuth()
  return (
    <ContentPageContainer>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <>
          <MediaContentDisplay
            content={
              data.filter(
                (item) => userBookmarks.indexOf(item.id) !== -1
              ) as MediaContent[]
            }
            headline={'Bookmarks'}
          />
        </>
      )}
    </ContentPageContainer>
  )
}

export default BookmarksPage
