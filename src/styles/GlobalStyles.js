import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import FontFaces from './fonts'
const { colors, fontSizes, media } = theme

const GlobalStyles = createGlobalStyle`
  ${FontFaces}

  *,
  *:before,
  *:after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  }

  h1, h3 {
    font-size: ${fontSizes.headline};
    font-weight: 400;

    @media all and (max-width: ${media.xl}) {
      font-size: 60px;
    }

    @media all and (max-width: ${media.lg}) {
    font-size: 50px;
  }

  @media all and (max-width: ${media.md}) {
    font-size: 40px;
  }
  @media all and (max-width: ${media.md}) {
    font-size: 34px;
  }
  }

  h2 {
    font-weight: 900;
    font-family: Montserrat;   
    font-size: 160px;

    @media all and (max-width: ${media.xl}) {
    font-size: 140px;
  }

  @media all and (max-width: ${media.lg}) {
    font-size: 110px;
  }
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
      bottom: 0;
      width: 100%;
      background: transparent;
      border-bottom: 1px dashed white;

      
  @media all and (max-width: ${media.xxs}) {
    border: none;
  }
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
