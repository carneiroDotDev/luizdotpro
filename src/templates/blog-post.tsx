import React, { ReactElement } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
  
export const data = graphql`
query ($slug: String!){
  contentfulBlogPost(slug: {eq: $slug}){
    title
    publishedDate(fromNow: true, formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
}`

const Blog = (props: any): ReactElement => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
  <Layout>
    <SEO title="Blog" description="" lang="" meta={[{ name: "", content: ""}]} />
    <h1>{props.data.contentfulBlogPost.title}</h1>
    <p>{props.data.contentfulBlogPost.publishedDate}</p>
    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default Blog