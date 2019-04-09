import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderMain = styled.header`
  background: rebeccapurple;
  margin: 0 0 1.45em 0;
  padding-top: 1em;
  text-align: center;
`;

const NavButtonWrapper = styled.div`
  display: inline-block;
`;

const NavButton = styled.h2`
  display: inline-block;
  margin: 10px;
  :hover {
    border-bottom: 3px solid white;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <nav>
      <h1 style={{ display: `inline-block`, marginRight: `1.45em` }}>
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
      <NavButtonWrapper>
      <NavButton>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            Home
          </Link>
      </NavButton>
      <NavButton style={{ }}>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            About
          </Link>
      </NavButton>
      </NavButtonWrapper>
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
