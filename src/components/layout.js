import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import GlobalStyles from '../styles/GlobalStyles'

const Layout = ({ children }) => {

  // if (typeof window !== 'undefined') {
  //   // eslint-disable-next-line global-require
  //   require('scrollmagic')('a[href*="#"]');
  // }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* {(typeof window !== 'undefined') ? ( */}
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
