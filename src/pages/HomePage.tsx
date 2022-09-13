import React from 'react'
import ContentPageContainer from '../components/ui/ContentPageContainer'
import TrendingMovies from '../components/TrendingMovies'
import MediaContentDisplay from '../components/MediaContentDisplay'
import useFirebaseData from '../hooks/useFirebaseData'
import { MediaContent } from '../types/MediaContent'

type FirebaseData =
  | [isLoading: boolean, data: MediaContent[]]
  | [isLoading: boolean, data: []]

const Home = () => {
  const [isLoading = true, data = []] = useFirebaseData() as FirebaseData
  let trendingData
  let allContent
  if (!isLoading) {
    if (Array.isArray(data)) {
      trendingData = data.filter((item) => item.isTrending === true)
    }
    allContent = data
  }
  return (
    <ContentPageContainer>
      {isLoading ? (
        <div>Loading... </div>
      ) : (
        <>
          <TrendingMovies movies={trendingData as MediaContent[]} />
          <MediaContentDisplay
            content={allContent as MediaContent[]}
            headline={'Recommended for you'}
          />
        </>
      )}
    </ContentPageContainer>
  )
}

export default Home as React.FC
