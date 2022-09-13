import * as React from 'react'
import styled from 'styled-components'
import bookmarkIconFull from '../assets/icon-bookmark-full.svg'
import bookmarkIconEmpty from '../assets/icon-bookmark-empty.svg'
import { useUserAuth } from '../context/UserAuthContext'

const bookmarkImage = [bookmarkIconFull, bookmarkIconEmpty]

interface IBookmarkBadgeProps {
  id: string
}

const BookmarkBadge = (props: IBookmarkBadgeProps) => {
  const { manageBookmark, userBookmarks } = useUserAuth()
  const { id } = props

  const [bookmarkIndex, setBookmarkIndex] = React.useState<0 | 1>(1)
  const [isSelected, setIsSelected] = React.useState(false)
  const [isAnimated, setIsAnimated] = React.useState(false)

  React.useEffect(() => {
    const selected = userBookmarks.indexOf(id) !== -1
    setIsSelected(selected)
  }, [userBookmarks, id])

  const mouseOver = () => {
    if (!isSelected) {
      setBookmarkIndex(0)
    }
  }

  const mouseOut = () => {
    if (!isSelected) {
      setBookmarkIndex(1)
    }
  }

  const clickHandler = () => {
    setIsAnimated(true)
    if (!isSelected) {
      manageBookmark('add', id)
      setIsSelected(true)
    }
    if (isSelected) {
      manageBookmark('remove', id)
      setIsSelected(false)
    }
    setTimeout(() => {
      setIsAnimated(false)
    }, 200)
  }
  return (
    <BookmarkBadgeWrapper
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={clickHandler}
      isAnimated={isAnimated}
    >
      <div className="badge-circle"></div>
      <img
        className="bookmark-icon"
        src={isSelected ? bookmarkImage[0] : bookmarkImage[bookmarkIndex]}
      />
    </BookmarkBadgeWrapper>
  )
}

const BookmarkBadgeWrapper = styled.div<{ isAnimated: boolean }>`
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 1000;
  top: 10px;
  right: 10px;

  animation: ${(props) => (props.isAnimated ? 'grow .2s linear' : 'none')};
  .badge-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.5;
    background: ${(props) => props.theme.black};
    &:hover + .bookmark-icon {
      opacity: 1;
    }
  }
  .bookmark-icon {
    position: absolute;
    width: 12px;
    color: ${(props) => props.theme.white};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.1s;
    &:hover {
      opacity: 1;
    }
  }
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }

    50% {
      transform: scale(1.3);
    }

    75% {
      transform: scale(1.1);
    }
  }
`

export default BookmarkBadge
