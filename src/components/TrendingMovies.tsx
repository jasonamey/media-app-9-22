import React from 'react'
import styled from 'styled-components'
import TrendingMovie from './TrendingMovie'
import { MediaContent } from '../types/MediaContent'
import { device } from '../styles/devices'

interface ITrendingMoviewsProps {
  movies: MediaContent[]
}

const TrendingMovies = (props: ITrendingMoviewsProps) => {
  const { movies } = props
  return (
    <>
      <h2>Trending</h2>
      <TrendingMoviesWrapper>
        {Array.isArray(movies) &&
          movies.map((film: MediaContent) => (
            <TrendingMovie key={film.id} {...film} />
          ))}
      </TrendingMoviesWrapper>
    </>
  )
}

const TrendingMoviesWrapper = styled.div`
  display: flex;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 140px;
  border-radius: 10px;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and ${device.tablet} {
    margin-bottom: 50px;
    height: 230px;
  }
`

export default TrendingMovies
