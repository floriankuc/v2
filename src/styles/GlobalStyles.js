import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import FontFaces from './fonts'
const { colors, margins, fontSizes } = theme

const GlobalStyles = createGlobalStyle`
  ${FontFaces}

  *,
  *:before,
  *:after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.black};
    color: ${colors.white};
    font-family: Rubik;
    font-weight: 300;
    font-size: ${fontSizes.lg};

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;
    }
  }

  h1, h3 {
    font-size: 70px;
    font-weight: 400;
  }

  h2 {
    font-weight: 900;
    font-family: Montserrat;   
    font-size: 160px;
  }

  p, li{
    line-height: 1.6;
  }

  li {
    display: inline-block;
    margin-right: 10px;
    position: relative;

    &:after{
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      width: 100%;
      height: 102%;
      background: transparent;
      border-bottom: 1px dashed white;

    }
  }

  ul {
    list-style: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  .nav-wrapper {
    position: absolute;
    width: 500px;
    height: 400px;
    top: 0;
    left: 100%;
    background-color: ${colors.black};
    z-index: -1;
    

    nav {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export default GlobalStyles
