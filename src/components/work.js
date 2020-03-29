import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
const { paddings, fontSizes } = theme

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
            }
            html
          }
        }
      }
    }
  `)

  return (
    <>
      <WorkContainer>
        <LeftWrapper>
          <HeadlineAbout>work</HeadlineAbout>
        </LeftWrapper>
        <RightWrapper>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <ProjectContainer>
                <StyledTitle>{edge.node.frontmatter.title}</StyledTitle>
                <p>{edge.node.frontmatter.description}</p>
                <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
              </ProjectContainer>
            )
          })}
        </RightWrapper>
      </WorkContainer>
    </>
  )
}

const StyledTitle = styled.p`
  font-weight: 500;
  margin-bottom: 50px;
`

const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 100px);
  max-height: 300px;
  border: ${theme.borderWhite};
  border-radius: ${theme.borderRadius};
  padding: ${paddings.sm};
  cursor: pointer;
  transition: all 0.15s ${theme.easing};
  position: relative;
  font-size: ${fontSizes.sm};

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`

const WorkContainer = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100vh;
  padding-right: ${paddings.md};
`

const LeftWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const RightWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 310px 310px;
  grid-template-rows: 310px 310px;
  grid-gap: 40px;
  margin: auto;
`

const HeadlineAbout = styled.h2`
  margin-top: 500px;
  transform: rotateZ(-90deg);
`

export default Work
