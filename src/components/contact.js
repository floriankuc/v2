import React from 'react'
import styled from 'styled-components/macro'
import Socials from '../components/common/socials'
import theme from '../styles/theme'
const { margins, paddings } = theme

const About = () => {
  return (
    <ContactContainer>
      <LeftWrapper>
        <StyledContactText>
          Ich freue mich über deine Nachricht zu einem potenziellen, zukünftigen
          Projekt oder ein freundliches hallo. :-)
        </StyledContactText>
        <StyledEmail id="contact">florian.kuc at gmail.com</StyledEmail>
      </LeftWrapper>
      <Socials />
      <HeadlineWrapper>
        <HeadlineContact>contact</HeadlineContact>
      </HeadlineWrapper>
    </ContactContainer>
  )
}

const StyledContactText = styled.p`
  text-align: center;
  width: 400px;
`

const StyledEmail = styled.h3`
  margin-top: -${margins.md};
`

const ContactContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 100vh;
  padding-left: ${paddings.md};
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const HeadlineWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

const HeadlineContact = styled.h2`
  margin-top: ${margins.md};
  transform: rotateZ(90deg);
`

export default About
