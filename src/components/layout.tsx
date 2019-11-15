/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, ReactElement } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import './../styles/layout.css'
import './../styles/index.scss'
import layoutStyles from './../styles/layout.module.scss'
import footerStyles from './../styles/footer.module.scss'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props): ReactElement => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 auto`,
                    paddingTop: 0,
                }}
                className={layoutStyles.container}
            >
                <main>{children}</main>
            </div>
            <footer className={`${layoutStyles.content} ${footerStyles.footer}`}>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </>
    )
}

export default Layout
