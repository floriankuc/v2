import React from 'react'
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
  font-size: ${fontSizes.lg};
  text-decoration: none;
  transition: all 0.2s ${theme.easing};
  font-weight: 400;

  @media all and (max-width: ${media.sm}) {
    font-size: ${fontSizes.xl};
    font-family: Montserrat;
    font-weight: 900;
    letter-spacing: 2px;
  }

  &:hover {
    transform: translateY(-4px);
  }
`

const StyledNav = styled.nav`
  background: ${colors.white};
  z-index: 1;
  display: flex;
  width: 600px;
  padding-right: ${paddings.md};
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 10px;
  right: -600px;
  height: 60px;
  transition: right 0.3s ${theme.easing};

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
    right: 24px;

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
