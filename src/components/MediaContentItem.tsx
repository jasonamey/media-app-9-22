import React from 'react'
import styled from 'styled-components'
import { MediaContent } from '../types/MediaContent'
import BookmarkBadge from './BookmarkBadge'
import TitleBadge from './TitleBadge'
import { device } from '../styles/devices'

type MediaContentItemProps = MediaContent & {
  id: string
}

const MediaContentItem = (props: MediaContentItemProps) => {
  const { year, category, rating, title, id } = props

  const { regular } = props.thumbnail
  if (regular !== undefined) {
    const { small, large } = regular
    return (
      <>
        <MediaContentItemWrapper largeImage={large} smallImage={small}>
          <div className="image-wrapper">
            <BookmarkBadge id={id} />
            <div className="image-container"></div>
          </div>

          <TitleBadge
            position="feature"
            {...{ year, category, rating, title }}
          />
        </MediaContentItemWrapper>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

const MediaContentItemWrapper = styled.div<{
  largeImage: string
  smallImage: string
}>`
  width: 168px;
  margin-bottom: 20px;

  .image-wrapper {
    position: relative;
    overflow: hidden;
    //safari border radius hack
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    width: 100%;
    height: 110px;
    border-radius: 10px;
    margin-bottom: 5px;
    .image-container {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('${(props) => props.smallImage}');
      transition: transform 1.4s;
      overflow: hidden;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and ${device.tablet} {
    width: 224px;
    margin-bottom: 24px;
    .image-wrapper {
      height: 140px;
    }
  }

  @media screen and ${device.laptop} {
    width: 279px;
    margin-bottom: 40px;
    .image-wrapper {
      height: 180px;
    }
  }
`

export default MediaContentItem
