import React from 'react'
import { MediaContent } from '../types/MediaContent'
import styled from 'styled-components'
import BookmarkBadge from './BookmarkBadge'
import TitleBadge from './TitleBadge'
import { device } from '../styles/devices'

const TrendingMovie = (props: MediaContent) => {
  const { year, category, rating, title, id } = props
  const { trending } = props.thumbnail
  if (trending !== undefined) {
    const { small, large } = trending
    return (
      <TrendingMovieWrapper largeImage={large} smallImage={small}>
        <TitleBadge
          position={'trending'}
          {...{ year, category, rating, title }}
        />
        <BookmarkBadge id={id} />
        <div className="image-container"></div>
      </TrendingMovieWrapper>
    )
  } else {
    return <div>loading...</div>
  }
}

const TrendingMovieWrapper = styled.div<{
  largeImage: string
  smallImage: string
}>`
  position: relative;
  overflow: hidden;
  margin-right: 15px;
  min-width: 240px;
  border-radius: 10px;
  //safari border radius hack
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  .image-container {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('${(props) => props.smallImage}');
    transition: all 1.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and ${device.tablet} {
    min-width: 470px;
    margin-right: 40px;
    .image-container {
      background-image: url('${(props) => props.largeImage}');
    }
  }
`

export default TrendingMovie

//240pxw
