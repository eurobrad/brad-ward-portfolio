import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderMain = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45em;
`;

const NavButton = styled.h2`
  margin: 0;
  display: inline;
  border: 3px solid white;
  border-radius: 5px;
`;

const Header = ({ siteTitle }) => (
  <HeaderMain>
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
      <NavButton>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `10px`,
          }}>
            Home
          </Link>
      </NavButton>
      <NavButton style={{ marginLeft: 19.575,}}>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `10px`
          }}>
            About
          </Link>
      </NavButton>
    </nav>
  </HeaderMain>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
