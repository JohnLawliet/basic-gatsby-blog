import React from "react"
import { Link, graphql  } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom:20px;
  color: blue;
`


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Johnny's Blog</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map( ({node}) => 
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
            
          </div>
        )
      }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage;
