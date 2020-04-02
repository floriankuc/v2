import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'

const { colors, paddings, fontSizes, media } = theme

const Menu = ({ isToggled, setIsToggled }) => {
  return (
    <StyledNav className={isToggled ? 'toggled' : ''}>
      <StyledLink href="#about" onClick={() => setIsToggled(false)}>
        <p>About</p>
      </StyledLink>
      <StyledLink href="#work" onClick={() => setIsToggled(false)}>
        <p>Work</p>
      </StyledLink>
      <StyledLink href="#contact" onClick={() => setIsToggled(false)}>
        <p>Contact</p>
      </StyledLink>
    </StyledNav>
  )
}

const StyledLink = styled.a`
  color: ${colors.black};
  font-size: 26px;
  text-decoration: none;
  transition: all 0.1s ${theme.easing};
  font-weight: 300;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  font-weight: 900;
  font-family: Montserrat;
  font-size: 100px;
  position: relative;
  transition: all .2s cubic-bezier(.81,.12,.4,.7);

  &:before{
    content: '';
    position: absolute;
    width: 0px;
    height: 8px;
    background: ${colors.black};
    bottom: 0;
    left: 0;
    transition: width .2s cubic-bezier(.81,.12,.4,.7);
  }

  @media all and (max-width: ${media.sm}) {
    font-size: ${fontSizes.xl};
    font-family: Montserrat;
    font-weight: 900;
    letter-spacing: 2px;
  }

  &:hover {
    transform: translateX(20px);

    &:before{
      width: 100%;
    }
  }
`

const StyledNav = styled.nav`
  background: ${colors.white};
  z-index: 1;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  width: 100%;
  padding-right: ${paddings.md};
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  transition: right 0.4s cubic-bezier(.81,.12,.4,.7);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;



  @media all and (max-width: ${media.md}) {
    width: 100%;
    top: 0;
    right: -100%;
    height: 80px;
  }

  @media all and (max-width: ${media.sm}) {
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: ${paddings.md} 0;
  }

  &.toggled {
    right: 0;

    @media all and (max-width: ${media.md}) {
      right: 0;
    }

    @media all and (max-width: ${media.sm}) {
      right: 0;
      height: 100%;
    }
  }
`

export default Menu
