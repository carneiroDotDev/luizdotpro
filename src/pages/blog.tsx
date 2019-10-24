import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Page two" description="" lang="" meta={[{ name: "", content: ""}]} />
    <h1>Hi from the blog page</h1>
    <p>Welcome to blog</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog