import React from 'react'
import styled from 'styled-components'
import MoviesIcon from '../assets/icon-category-movie.svg'
import TVIcon from '../assets/icon-category-tv.svg'
import { device } from '../styles/devices'

interface ITitleBadgeProps {
  position: 'trending' | 'feature'
  category: string
  year: number
  rating: string
  title: string
}

const TitleBadge = (props: ITitleBadgeProps) => {
  const { year, category, position, rating, title } = props
  return (
    <TitleBadgeWrapper position={position}>
      <div className="film-info-container">
        <h4>
          <span>{`${year}`}</span>
          <span>&middot;</span>
          <span>
            {category === 'Movie' ? (
              <img
                src={MoviesIcon}
                alt="movies icon"
                style={{ height: 15, width: 15, marginBottom: '-2px' }}
              />
            ) : (
              <img
                src={TVIcon}
                alt="tv icon"
                style={{ height: 15, width: 15 }}
              />
            )}
          </span>
          <span>&middot;</span>
          <span>{`${category}`}</span>
          <span>&middot;</span>
          <span>{`${rating}`}</span>
        </h4>
      </div>
      <h3>{title}</h3>
    </TitleBadgeWrapper>
  )
}

const TitleBadgeWrapper = styled.div<{ position: string }>`
  position: ${(props) =>
    props.position === 'trending' ? 'absolute' : 'static'};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  bottom: ${(props) => (props.position === 'trending' ? '8px' : '0')};
  left: ${(props) => (props.position === 'trending' ? '12px' : '0')};
  .film-info-container {
    font-size: 11px;
    opacity: 0.6;
    font-weight: 200;
    margin-bottom: 2px;
    h4 {
      display: flex;
      align-items: center;
    }

    span {
      margin-inline-end: 8px;
    }
  }
  h3 {
    font-size: ${(props) => (props.position === 'trending' ? '15px' : '13px')};
    letter-spacing: 1px;
  }

  @media screen and ${device.tablet} {
    bottom: ${(props) => (props.position === 'trending' ? '24px' : '0')};
    left: ${(props) => (props.position === 'trending' ? '24px' : '0')};
    .film-info-container {
      font-size: 16px;
    }
    h3 {
      font-size: ${(props) =>
        props.position === 'trending' ? '24px' : '18px'};
    }
  }
`

export default TitleBadge
