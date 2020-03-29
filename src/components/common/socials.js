import React from 'react'
import { FaXingSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import styled from 'styled-components/macro'
import theme from '../../styles/theme'
const { colors } = theme

const Socials = () => {
  return (
    <StyledNav>
      <a href="https://www.xing.com/profile/Florian_Kuc" target="_blank">
        <FaXingSquare className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/floriankuc/" target="_blank">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://github.com/floriankuc/" target="_blank">
        <FaGithubSquare className="icon" />
      </a>
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
    color: ${colors.white};

    &:hover,
    &:active {
      transform: scale(1.1) translateY(-6px);
    }
  }
`

export default Socials
