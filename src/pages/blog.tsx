import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from "../styles/blog.module.scss"

interface Edge {
  node: {
    frontmatter: {
      title: string,
      createdAt: string
    }
    fields: {
      slug: string
    }
  }
}

const Blog = () => {

  const data = useStaticQuery(graphql`
  query receiveInfo {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
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

      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge: Edge, index: number) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.createdAt}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog