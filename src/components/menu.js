import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors, paddings, fontSizes } = theme

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

  &.toggled {
    right: 24px;
  }
`

export default Menu
