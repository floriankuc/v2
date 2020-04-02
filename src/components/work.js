import React, { useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
import { FaExternalLinkAlt } from 'react-icons/fa'

import ScrollMagic from "scrollmagic";
// import { TweenMax, TimelineMax, Power3, TweenLite, TimelineLite } from "gsap";
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

const { paddings, colors, margins, fontSizes, media } = theme

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              link
            }
            html
          }
        }
      }
    }
  `)

  // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  const sideline = useRef()
  const trigger = useRef()
  const projectitems = useRef()


  // useEffect(() => {
  //   let controller = new ScrollMagic.Controller()
  //   const projects = projectitems.current.children
  //   const tl = new TimelineMax
  //   for (let i = 0; i < projects.length; i++) {
  //     new ScrollMagic.Scene({
  //       triggerElement: projects[i],
  //       triggerHook: .75,
  //       reverse: false
  //     })
  //       .setTween(TweenLite.from(projects[i], 1, { opacity: 0, x: 300, ease: Power3.easeOut }))
  //       .addTo(controller)
  //   }
  //   new ScrollMagic.Scene({
  //     triggerElement: '#work'
  //   })
  //     .setTween(TweenLite.from(sideline.current, 1, { opacity: 0, y: 500, ease: Power3.easeOut }))
  //     .addTo(controller)
  // }, [])

  if (typeof window !== 'undefined') {
    return (
      <>
        <WorkContainer id="work" ref={trigger}>
          <LeftWrapper >
            <HeadlineAbout ref={sideline}>work</HeadlineAbout>
          </LeftWrapper>
          <RightWrapper ref={projectitems}>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <ProjectContainer>
                  <a
                    href={edge.node.frontmatter.link}
                    target="_blank"
                    className="link-icon"
                  >
                    <FaExternalLinkAlt />
                  </a>

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
}

const StyledTitle = styled.p`
  font-weight: 400;
  margin-bottom: 50px;
  font-size: 20px;

  @media all and (max-width: ${media.lg}) {
    margin: 0;
  }
`

const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 100px);
  max-height: 300px;
  border: ${theme.borderWhite};
  border-radius: ${theme.borderRadius};
  padding: ${paddings.sm};
  transition: all 0.15s ${theme.easing};
  position: relative;
  font-size: ${fontSizes.sm};
  backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;


  @media all and (max-width: ${media.lg}) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
  }

  &:hover {
    transform: translateY(-10px);

    @media all and (max-width: ${media.lg}) {
      transform: translateX(10px);
    }

    .link-icon {
      opacity: 1;
      cursor: pointer;

      
    }
  }

  .link-icon {
    opacity: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: ${fontSizes.lg};
    transition: opacity 0.1s ${theme.easing};
    color: ${colors.white};

    @media all and (max-width: ${media.lg}) {
      opacity: 1;
      font-size: ${fontSizes.xl};
    }
  }
`

const WorkContainer = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100vh;
  padding-right: ${paddings.md};

  @media all and (max-width: ${media.md}) {
    grid-template-columns: 100%;
    grid-template-rows: 100px 1fr;
    padding-left: 100px;
  }

  @media all and (max-width: ${media.sm}) {
    font-size: 26px;
    padding-left: 50px;
    padding-right: 50px;
  }
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

  @media all and (max-width: ${media.lg}) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 200px);
    grid-gap: 20px;
  }

  @media all and (max-width: ${media.sm}) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, 250px);
    grid-gap: 20px;
    grid-column: 1 / 2;
    grid-row: 2 / 2;
  }
`

const HeadlineAbout = styled.h2`
  margin-top: 500px;
  transform: rotateZ(-90deg);

  @media all and (max-width: ${media.md}) {
    font-size: ${fontSizes.xl};
    transform: none;
    margin: 0;
  }
`

export default Work
