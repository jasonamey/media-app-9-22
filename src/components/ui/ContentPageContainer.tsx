import * as React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Searchbar from '../Searchbar'
import { device } from '../../styles/devices'

interface IContentPageContainerProps {
  children: JSX.Element | JSX.Element[]
}

const ContentPageContainer = ({ children }: IContentPageContainerProps) => {
  return (
    <ContentPageContainerWrapper>
      <Navbar path={location.pathname} />
      <div className="right-desktop">
        <Searchbar />
        {children}
      </div>
    </ContentPageContainerWrapper>
  )
}

const ContentPageContainerWrapper = styled.div`
  margin-right: 0;
  margin-inline-start: 0;
  padding: 24px;
  @media screen and ${device.laptop} {
    padding: 0;
    .right-desktop {
      margin-inline-start: ${(props) => props.theme.navbarWidth};
      display: flex;
      flex-direction: column;
    }
  }
`

export default ContentPageContainer
