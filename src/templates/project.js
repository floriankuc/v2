import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Project = () => {
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
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <>
              {edge.node.frontmatter.title}
              {edge.node.frontmatter.description}
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default Project
