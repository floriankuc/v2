import React, { useState } from 'react'
import Menu from './menu'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { colors } = theme

const Header = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleHandler = () => {
    setIsToggled(!isToggled)
  }

  return (
    <header id="about" style={{ height: 140, width: '100%' }}>
      <Menu isToggled={isToggled} setIsToggled={setIsToggled} />
      <MenuButton onClick={toggleHandler}>
        <div className={isToggled ? 'open' : 'closed'}></div>
      </MenuButton>
    </header>
  )
}

const MenuButton = styled.div`
  position: fixed;
  z-index: 1;
  top: 10px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  mix-blend-mode: difference;
  cursor: pointer;

  .open {
    width: 40px;
    height: 3px;
    background: ${colors.white};
    border-radius: ${theme.borderRadius};
    transition: all 0.5s ${theme.easing};

    transform: translateY(5px) rotateZ(-405deg);
    position: relative;

    &:before {
      width: 40px;
      height: 3px;
      background: ${colors.white};
      border-radius: ${theme.borderRadius};
      transition: all 0.5s ${theme.easing};

      content: '';
      position: absolute;
      transform: rotateZ(450deg);
    }
  }

  .closed {
    width: 40px;
    height: 3px;
    background: ${colors.white};
    border-radius: ${theme.borderRadius};
    transition: all 0.5s ${theme.easing};

    position: relative;

    &:before {
      width: 40px;
      height: 3px;
      background: ${colors.white};
      border-radius: ${theme.borderRadius};
      transition: all 0.5s ${theme.easing};

      content: '';
      position: absolute;
      transform: translateY(10px);
    }
  }
`

export default Header
