import React from 'react'
import styled from 'styled-components/macro'

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  border: none;
  margin-left: 200px;
`

export default Button
