import React from 'react'
import styled from 'styled-components/macro'
import Button from '../components/common/Button'
import theme from '../styles/theme'
const { paddings, margins } = theme

const About = () => {
  return (
    <AboutContainer>
      <LeftWrapper>
        <Column>
          <HeadlineMain>
            Hi. Ich bin Florian. Web Developer aus Hamburg.
          </HeadlineMain>
          <a href="#contact" style={{ marginLeft: margins.md }}>
            <Button text={'Schreib mir'} />
          </a>
        </Column>
      </LeftWrapper>
      <HeadlineWrapper>
        <HeadlineAbout>about</HeadlineAbout>
      </HeadlineWrapper>
    </AboutContainer>
  )
}

const Column = styled.div`
  height: 100%;
  display: inline-block;
`

const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: calc(100vh - 140px);
  padding-left: ${paddings.lg};
`

const LeftWrapper = styled.div`
  display: flex;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const HeadlineMain = styled.h1`
  width: 700px;
  margin-bottom: ${margins.lg};
`

const HeadlineWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

const HeadlineAbout = styled.h2`
  margin-top: ${margins.md};
  transform: rotateZ(90deg);
`

export default About
