import React from 'react'
import Image from '../components/image'
import { Link } from 'gatsby'
import styled from 'styled-components/macro'
import Button from '../components/common/Button'

const About = () => {
  return (
    <AboutContainer>
      <LeftWrapper>
        <HeadlineMain>
          Hi. Ich bin Florian. Web Developer aus Hamburg.
        </HeadlineMain>
        {/* <div style={{ maxWidth: `400px` }}>
          <Image />
        </div> */}
        <Button text={'Schreib mir'} />
      </LeftWrapper>
      <HeadlineWrapper>
        <HeadlineAbout>about</HeadlineAbout>
      </HeadlineWrapper>
    </AboutContainer>
  )
}

const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: calc(100vh - 140px);
  padding-left: 100px;
`

const LeftWrapper = styled.div`
  background: pink;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const HeadlineMain = styled.h1`
  width: 700px;
  margin-bottom: 150px;
`

const HeadlineWrapper = styled.div`
  background: red;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

const HeadlineAbout = styled.h2`
  margin-top: 100px;
  transform: rotateZ(90deg);
`

export default About
