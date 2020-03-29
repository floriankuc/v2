import React from 'react'
import { FaXingSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import styled from 'styled-components/macro'
import theme from '../../styles/theme'

const Socials = () => {
  return (
    <StyledNav>
      <FaXingSquare className="icon" />
      <FaLinkedin className="icon" />
      <FaGithubSquare className="icon" />
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: absolute;
  bottom: 30px;
  left: 30px;

  .icon {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 10px;
    transition: all 0.1s ${theme.easing};

    &:hover,
    &:active {
      transform: scale(1.1) translateY(-6px);
    }
  }
`

export default Socials
