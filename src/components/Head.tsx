import React, { ReactElement } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }: { title: string }): ReactElement => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
}

export default Head
