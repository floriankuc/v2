import React from 'react'
import styled from 'styled-components/macro'
import Socials from '../components/common/socials'
import theme from '../styles/theme'
const { margins, paddings, media, fontSizes } = theme

const Contact = () => {
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

  @media all and (max-width: ${media.md}) {
    font-size: ${fontSizes.lg};
  }

  @media all and (max-width: ${media.xs}) {
    width: 80%;
  }
`

const StyledEmail = styled.h3`
  margin-top: -${margins.md};

  @media all and (max-width: ${media.lg}) {
    font-size: 36px;
  }
  @media all and (max-width: ${media.xs}) {
    font-size: 28px;
  }
`

const ContactContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 100vh;
  padding-left: ${paddings.md};

  @media all and (max-width: ${media.lg}) {
    height: 700px;
    grid-template-rows: 100%;
  }

  @media all and (max-width: ${media.md}) {
    font-size: 30px;
    grid-template-columns: 100%;
    grid-template-rows: 100px 500px;
    margin-top: ${margins.lg};
    padding-left: 0;
  }

  @media all and (max-width: ${media.xs}) {
    height: 600px;
    grid-template-rows: 100px 400px;
  }
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  height: 100%;

  @media all and (max-width: ${media.md}) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    justify-content: space-around;
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

const HeadlineContact = styled.h2`
  margin-top: ${margins.md};
  transform: rotateZ(90deg);

  @media all and (max-width: ${media.lg}) {
    margin-top: 250px;
  }

  @media all and (max-width: ${media.md}) {
    font-size: ${fontSizes.xl};
    transform: none;
    margin-top: 0;
    margin-left: ${margins.md};
  }
`

export default Contact
