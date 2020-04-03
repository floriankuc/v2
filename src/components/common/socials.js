import React, { useEffect, useRef } from 'react'
import { FaXingSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import styled from 'styled-components/macro'
import theme from '../../styles/theme'
import sr from '../../utils/sr'
import { srConfigSocials } from '../../utils/config'
const { colors, media } = theme

const Socials = () => {

  const revealSocials = useRef(null)

  useEffect(() => {
    const items = Array.from(revealSocials.current.children)
    items.forEach((el, i) => sr.reveal(el, srConfigSocials(i * 300)));
  }, [])

  return (
    <StyledNav ref={revealSocials}>
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

  @media all and (max-width: ${media.xxl}) {
    bottom: 10px;
    left: 10px;
  }

  @media all and (max-width: ${media.sm}) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
  }

  .icon {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 0 10px;
    transition: all 0.1s ${theme.easing};
    color: ${colors.white};
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;


    &:hover,
    &:active {
      transform: scale(1.1) translateY(-6px);
    }
  }
`

export default Socials
