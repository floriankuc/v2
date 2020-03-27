import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import FontFaces from './fonts'

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
    font-family: Roboto;
    font-weight: 300;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  /* #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  } */

  h1 {
    font-size: 72px;
    font-weight: 500;
    font-family: Montserrat;    
  }

  h2 {
    color: ${colors.white};
    font-weight: 900;
    font-family: Montserrat;   
    font-size: 160px;
  }

  p, li {
    line-height: 1.6;
    letter-spacing: .5px;
  }

  ul {
    list-style: none;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
/* 
  .main {
    width: calc(100% - 96px);
    height: calc(100vh - 72px);
    padding: 120px;
  } */
`

export default GlobalStyles
