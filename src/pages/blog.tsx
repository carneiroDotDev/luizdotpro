import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import blogStyles from "../styles/blog.module.scss"

interface Edge {
  node: {
    title: string
    slug: string
    publishedDate: string
  }
}

const Blog = () => {

  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: {
      fields: publishedDate,
      order: DESC
    }) {
      edges {
        node {
          title
          slug
          publishedDate(fromNow: true, formatString: "MMMM Do, YYYY")
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
        {data.allContentfulBlogPost.edges.map((edge: Edge, index: number) => (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
            <h2>{edge.node.title}</h2>
            <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog