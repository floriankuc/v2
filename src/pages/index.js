import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    {/* <Work/> */}
    {/* <Contact />  */}
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
