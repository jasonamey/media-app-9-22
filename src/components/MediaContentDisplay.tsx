import React from 'react'
import styled from 'styled-components'
import MediaContentItem from './MediaContentItem'
import { MediaContent } from '../types/MediaContent'
import { device } from '../styles/devices'

interface IMediaContentProps {
  content: MediaContent[]
  headline: string
}

const MediaContentDisplay = (props: IMediaContentProps) => {
  const { content, headline } = props

  return (
    <>
      <h2>{headline}</h2>
      <MediaContentDisplayWrapper>
        {Array.isArray(content) &&
          content.map((film: MediaContent) => {
            return <MediaContentItem key={film.id} {...film} />
          })}
      </MediaContentDisplayWrapper>
    </>
  )
}

const MediaContentDisplayWrapper = styled.div`
  width: 100%;
  display: inline-grid;
  justify-items: center;

  @media screen and ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    justify-items: space-between;
  }

  @media screen and (min-width: 580px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default MediaContentDisplay
