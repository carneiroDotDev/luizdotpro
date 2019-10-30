import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Edge {
  node: {
    frontmatter: {
      title: string,
      createdAt: string
    }
  }
}

const Blog = () => {

  const data = useStaticQuery(graphql`
  query receiveInfo {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            createdAt
          }
        }
      }
    }
  }
  `)

  // console.log(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <SEO title="Page two" description="" lang="" meta={[{ name: "", content: "" }]} />
      <h1>Hi from the blog page</h1>
      <p>Welcome to blog</p>
      <Link to="/">Go back to the homepage</Link>

      <ol>
        {data.allMarkdownRemark.edges.map((edge: Edge, index: number) => (
          <li key={index}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.createdAt}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog