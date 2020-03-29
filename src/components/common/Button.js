import React from 'react'
import styled from 'styled-components/macro'
import theme from '../../styles/theme'
const { colors, fontSizes } = theme

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  outline: none;
  font-size: ${fontSizes.lg};
  font-family: inherit;
  font-weight: 400;
  color: ${colors.white};
  text-transform: uppercase;
  padding: 20px 32px;
  background: ${colors.black};
  border: ${theme.borderWhite};
  border-radius: 1px;
  transform-style: preserve-3d;
  transition: all 0.1s ${theme.easing};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.black};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${colors.white}, 0 0 0 0 ${colors.white};
    transform: translate3d(0, 9px, -12px);
    transition: all 0.1s ${theme.easing};
  }

  &:hover {
    cursor: pointer;
    background: ${colors.black};
    transform: translate(0, 3px);

    &:before {
      box-shadow: 0 0 0 2px ${colors.white}, 0 0 0 0 ${colors.black};
      transform: translate3d(0, 6px, -12px);
    }
  }

  &:active,
  &:focus {
    background: ${colors.black};
    transform: translate(0em, 9px);

    &:before {
      box-shadow: 0 0 0 2px ${colors.white}, 0 0 ${colors.white};
      transform: translate3d(0, 0, -12px);
    }
  }
`

export default Button
