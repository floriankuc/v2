import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
import sr from '../utils/sr'
import { srConfigTechs } from '../utils/config'

const { paddings, fontSizes, margins, media } = theme

const Techstack = () => {

  const revealTechs = useRef();

  useEffect(() => {
    sr.reveal(revealTechs.current, srConfigTechs());
    const items = Array.from(revealTechs.current.children)
    items.forEach((el, i) => sr.reveal(el, srConfigTechs(i * 50)));
  }, []);

  const stack = [
    'Javascript ES6/2020',
    'React',
    'HTML5',
    '(S)CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'mongoose',
    'Firebase',
    'Git',
    'Storybook',
    'Cypress',
  ]

  return (
    <TechstackContainer id="trigger">
      <ContentWrapper ref={revealTechs} >
        <StyledTechstackText>
          Ich baue Webseiten und Apps, am liebsten mit:
        </StyledTechstackText>
        {stack.map(el => {
          return <TechItem >{el}</TechItem>
        })}
      </ContentWrapper>
    </TechstackContainer>
  )
}

const TechstackContainer = styled.section`
  margin: ${margins.lg2} 0;

  @media all and (max-width: ${media.lg}) {
    margin: ${margins.md} 0;
  }

  @media all and (max-width: ${media.md}) {
    margin: ${margins.lg2} 0;
  }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-flow: auto;
  flex-wrap: wrap;

  @media all and (max-width: ${media.xl}) {
    width: 900px;
  }

  @media all and (max-width: ${media.lg}) {
    width: 700px;
  }

  @media all and (max-width: ${media.md}) {
    width: 500px;
  }
  @media all and (max-width: ${media.sm}) {
    width: 450px;
  }

  @media all and (max-width: ${media.sm}) {
    width: 90%;
    display: block;
  }
`

const StyledTechstackText = styled.p`
  width: 100%;
  padding-left: ${paddings.sm};
  margin-bottom: ${margins.md};
  font-size: 26px;

  @media all and (max-width: ${media.md}) {
    margin-bottom: 50px;
  }

  @media all and (max-width: ${media.xxs}) {
    font-size: ${fontSizes.lg};
  }
`

const TechItem = styled.p`
  font-size: ${fontSizes.xl};
  font-weight: 500;
  margin: ${margins.sm};
  text-align: justify;

  @media all and (max-width: ${media.xl}) {
    font-size: 34px;
  }

  @media all and (max-width: ${media.lg}) {
    font-size: 38px;
  }

  @media all and (max-width: ${media.md}) {
    font-size: 30px;
  }
  @media all and (max-width: ${media.sm}) {
    font-size: 26px;
    margin: 0 ${margins.sm};
  }
`

export default Techstack
