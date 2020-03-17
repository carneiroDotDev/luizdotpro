import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import Head from '../components/Head'

const IndexPage = (): ReactElement => (
    <Layout>
        <SEO title="Home" description="" lang="" meta={[{ name: '', content: '' }]}></SEO>
        <Head title="Sopinha" />
        <h1>Hi people</h1>
        <Button variant="contained" color="primary">
            HELLO WORLD
        </Button>
        {/* <div className={classes.root}>{"This div's text looks like that of a button."}</div> */}

        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/blog/">Go to Blog</Link>
    </Layout>
)

export default IndexPage
