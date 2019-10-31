import React, { ReactElement } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
  
export const data = graphql`
query fetchPostData (
  $slug: String!
) {
  markdownRemark( 
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      createdAt
    }
    html
  }
}`

const Blog = (props): ReactElement => {

  return (
  <Layout>
    <SEO title="Blog" description="" lang="" meta={[{ name: "", content: ""}]} />
    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    <p>{props.data.markdownRemark.frontmatter.createdAt}</p>
    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default Blog