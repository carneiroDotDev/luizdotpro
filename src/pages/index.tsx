import React, { ReactElement } from "react"
import { Link } from "gatsby"
import mainStyles from "../styles/main.module.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Head from "../components/Head"

const IndexPage = (): ReactElement => (
  // <Layout>
  //   <SEO title="Home" description="" lang="" meta={[{ name: "", content: ""}]}></SEO>
  //   <Head title="Sopinha"/>
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/blog/">Go to Blog</Link>
  // </Layout>
  <div className={mainStyles.bigContainer}> 
    <h1>Luiz.pro</h1>
    <p> Chill, its comming.</p>
  </div>
)

export default IndexPage
