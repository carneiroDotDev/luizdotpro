import { Link } from 'gatsby'
import React, { ReactElement } from 'react'
import headerStyles from './../styles/header.module.scss'

// interface Props {
//     siteTitle: string
// }

const Header = (): ReactElement => (
    <header
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
        }}
        className={headerStyles.header}
    >
        <div>
            <h1 style={{ margin: 0 }}>
                <Link to="/" className={headerStyles.title}>
                    LC
                </Link>
            </h1>
            <ul className={headerStyles.navList}>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/blog"
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </header>
)

export default Header
