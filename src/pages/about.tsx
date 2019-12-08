import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = (): ReactElement => (
    <Layout>
        <SEO title="Page two" description="" lang="" meta={[{ name: '', content: '' }]} />
        <h1>Hi from the About page</h1>
        <p>Welcome to About</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default About
