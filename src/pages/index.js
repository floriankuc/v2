import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/about'
import Contact from '../components/contact'
import Work from '../components/work'
import Techstack from '../components/techstack'


if (typeof window !== 'undefined') {
  require('scrollmagic')
  require('gsap')
  require('scrollmagic-plugin-gsap')
}

const IndexPage = () => (

  <>
    {(typeof window !== 'undefined') ? (
      <Layout>
        <SEO title="Web Developer" />
        <About />
        <Techstack />
        <Work />
        <Contact />
      </Layout>
    ) : null}
  </>
)

export default IndexPage
