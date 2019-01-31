import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 1260,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: `0 0 20px 0` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Brad Ward Design
        </Link>
      </h1>
      <h2 style={{ margin: 0, display: `inline`, border: `3px solid white`, borderRadius: `5px`,}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `10px`,
          }}
        >
          Home
        </Link>
      </h2>
      <h2 style={{ margin: 0, display: `inline`, marginLeft: 19.575, border: `3px solid white`, borderRadius: `5px`,}}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `10px`,
          }}
        >
          About
        </Link>
      </h2>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
