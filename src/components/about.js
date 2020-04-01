import React, { useRef, useEffect } from 'react'
import { TweenLite, Power3, TimelineLite } from 'gsap'

import styled from 'styled-components/macro'
import Button from '../components/common/Button'
import theme from '../styles/theme'
const { paddings, margins, media, fontSizes } = theme


const About = () => {

  const headline = useRef()
  const button = useRef()
  const sideline = useRef()

  const tl = new TimelineLite

  useEffect(() => {
    TweenLite.from(sideline.current, 1, { opacity: 0, y: 500, ease: Power3.easeOut })
    TweenLite.from(headline.current, 1, { opacity: 0, x: -200, ease: Power3.easeOut, delay: .5 })
    TweenLite.from(button.current, { opacity: 0, duration: 1, ease: Power3.easeOut, delay: 1.2 })
  }, [])

  return (
    <AboutContainer>
      <LeftWrapper>
        <Column>
          <HeadlineMain ref={headline} style={{ opacity: 1 }}>
            Hi. Ich bin Florian. Web Developer aus Hamburg.
          </HeadlineMain>
          <StyledLink href="#contact" ref={button} >
            <Button text={'Schreib mir'} />
          </StyledLink>
        </Column>
      </LeftWrapper>
      <HeadlineWrapper >
        <HeadlineAbout ref={sideline}>about</HeadlineAbout>
      </HeadlineWrapper>
    </AboutContainer>
  )
}

const Column = styled.div`
  height: 100%;
  display: inline-block;
`

const StyledLink = styled.a`
  margin-left: ${margins.md};

  @media all and (max-width: ${media.xs}) {
    margin-left: 50px;
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
  width: 700px;
  margin-bottom: ${margins.lg};

  @media all and (min-width: ${media.xxl}) {
    padding-top: ${paddings.md};
  }

  @media all and (max-width: ${media.xl}) {
    width: 500px;
  }

  @media all and (max-width: ${media.lg}) {
    width: 400px;
  }

  @media all and (max-width: ${media.sm}) {
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
  margin-top: ${margins.md};
  transform: rotateZ(90deg);

  @media all and (max-width: ${media.md}) {
    transform: none;
    margin: 0;
    font-size: ${fontSizes.xl};
  }
`

export default About
