import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/devices'
interface IIconStylesProps {
  children: JSX.Element | JSX.Element[]
}

const IconStyles = (props: IIconStylesProps) => {
  const { children } = props
  return <IconStylesWrapper>{children}</IconStylesWrapper>
}

const IconStylesWrapper = styled.div`
  cursor: pointer;
  @media screen and ${device.laptop} {
    margin-bottom: 40px;
  }
`

export default IconStyles
