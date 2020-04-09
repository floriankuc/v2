import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import Button from '../components/common/Button'
import theme from '../styles/theme'
import sr from '../utils/sr'
import {
  srConfigButton,
  srConfigAboutText,
  srConfigAbout,
} from '../utils/config'
const { paddings, margins, media, fontSizes } = theme

const About = () => {
  const revealAboutText = useRef(null)
  const revealAbout = useRef(null)
  const revealButton = useRef(null)

  useEffect(() => {
    sr.reveal(revealAbout.current, srConfigAbout())
    sr.reveal(revealAboutText.current, srConfigAboutText())
    sr.reveal(revealButton.current, srConfigButton())
  }, [])

  return (
    <AboutContainer>
      <LeftWrapper>
        <Column>
          <HeadlineMain ref={revealAboutText}>
            Hi. Ich bin Florian. Web Developer aus Hamburg.
          </HeadlineMain>
          <StyledLink ref={revealButton} href="#contact">
            <Button text={'Schreib mir'} />
          </StyledLink>
        </Column>
      </LeftWrapper>
      <HeadlineWrapper>
        <HeadlineAbout ref={revealAbout}>about</HeadlineAbout>
      </HeadlineWrapper>
    </AboutContainer>
  )
}

const Column = styled.div`
  height: 100%;
  display: inline-block;
`

const StyledLink = styled.a`
  visibility: hidden;
  margin-left: ${margins.md};

  @media all and (max-width: ${media.xs}) {
    visibility: visible;

    margin-left: 50px;
  }

  @media all and (max-width: ${media.xxs}) {
    visibility: visible;
    margin-left: 0;
  }
`

const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: calc(100vh - 140px);
  padding-left: ${paddings.lg};

  @media all and (min-width: ${media.xxl}) {
    padding-left: 400px;
  }

  @media all and (max-width: ${media.xxl}) {
    padding-left: ${paddings.md};
  }

  @media all and (max-width: ${media.lg}) {
    grid-template-columns: 550px 100px;
    max-height: 600px;
  }

  @media all and (max-width: ${media.md}) {
    grid-template-columns: 100%;
    grid-template-rows: 100px 1fr;
  }

  @media all and (max-width: ${media.sm}) {
    padding-left: 50px;
  }
`

const LeftWrapper = styled.div`
  display: flex;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media all and (max-width: ${media.md}) {
    grid-row: 2 / 2;
  }
`

const HeadlineMain = styled.h1`
  visibility: hidden;
  width: 700px;
  margin-bottom: ${margins.lg};

  @media all and (min-width: ${media.xxl}) {
    visibility: visible;
    padding-top: ${paddings.md};
  }

  @media all and (max-width: ${media.xl}) {
    width: 500px;
    visibility: hidden;
  }

  @media all and (max-width: ${media.lg}) {
    visibility: visible;
    width: 400px;
  }

  @media all and (max-width: ${media.sm}) {
    visibility: visible;
    width: 90%;
    margin-bottom: ${margins.md};
  }
`

const HeadlineWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media all and (max-width: ${media.md}) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const HeadlineAbout = styled.h2`
  visibility: hidden;
  margin-top: ${margins.md};
  transform: rotateZ(90deg);

  @media all and (max-width: ${media.md}) {
    visibility: visible;
    transform: none;
    margin: 0;
    font-size: ${fontSizes.xl};
  }
`

export default About
