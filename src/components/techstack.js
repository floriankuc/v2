import React, { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import theme from '../styles/theme'
import ScrollMagic from "scrollmagic"
import { TweenMax, TimelineMax, Power3, TweenLite, TimelineLite } from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";


const { paddings, fontSizes, margins, media } = theme
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Techstack = () => {

  const techs = useRef()
  const trigger = useRef()


  useEffect(() => {
    let controller = new ScrollMagic.Controller()
    const techitems = techs.current.children
    const tl = new TimelineMax
    for (let i = 0; i < techitems.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: techitems[i],
        triggerHook: .9,
        reverse: false
      })
        .setTween(TweenLite.from(techitems[i], 1, { opacity: 0, x: -300, ease: Power3.easeOut }))
        .addTo(controller)
    }
  }, [])

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
    <TechstackContainer ref={trigger} id="trigger">
      <ContentWrapper ref={techs}>
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
