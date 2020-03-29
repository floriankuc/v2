import React from 'react'
import styled from 'styled-components/macro'
import theme from '../../styles/theme'
const { borderWhite, colors } = theme

const Scroller = () => {
  return (
    <ScrollerContainer>
      <StyledScroller />
    </ScrollerContainer>
  )
}

const ScrollerContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

const StyledScroller = styled.div`
  position: relative;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 36px;
  border-radius: 10px;
  border: ${theme.borderWhite};
  margin: 0 auto;

  &:before {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: ${colors.white};
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollindicate 2s infinite;
  }

  @keyframes scrollindicate {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      top: 18px;
    }
  }
`

export default Scroller
