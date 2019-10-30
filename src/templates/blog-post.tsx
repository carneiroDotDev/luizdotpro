import React, { ReactElement } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Blog = (): ReactElement => (
  <Layout>
    <SEO title="Blog" description="" lang="" meta={[{ name: "", content: ""}]} />
    <h1>Blog</h1>
    <p>Welcome to About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog