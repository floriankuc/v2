import React from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { paddings, fontSizes, margins } = theme

const Techstack = () => {
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
    <TechstackContainer>
      <ContentWrapper>
        <StyledTechstackText>
          Ich baue Webseiten und Apps, am liebsten mit:
        </StyledTechstackText>
        {stack.map(el => {
          return <TechItem>{el}</TechItem>
        })}
      </ContentWrapper>
    </TechstackContainer>
  )
}

const TechstackContainer = styled.section`
  margin: ${margins.lg2} 0;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-flow: auto;
  flex-wrap: wrap;
`

const StyledTechstackText = styled.p`
  width: 100%;
  padding-left: ${paddings.sm};
  margin-bottom: ${margins.md};
`

const TechItem = styled.p`
  font-size: ${fontSizes.xl};
  font-weight: 500;
  margin: ${margins.sm};
  text-align: justify;
`

export default Techstack
