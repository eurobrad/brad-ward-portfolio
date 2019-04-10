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
  @media (min-width: 611px) {
    margin-left: 4em;
  }
  @media (min-width: 700px) {
    margin-left: 6em;
  }
  @media (min-width: 800px) {
    margin-left: 12em;
  }
  @media (min-width: 1000px) {
    margin-left: 22em;
  }
  @media (min-width: 1199px) {
    margin-left: 32em;
  }
`;

const NavButton = styled.h2`
  display: inline-block;
  margin: 0 10px;
  border-bottom: 3px solid rebeccapurple;
  :hover {
    border-bottom: 3px solid white;
  }
  @media (max-width: 610px) {
    margin-bottom: 20px;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <nav>
      <h1 style={{ display: `inline-block` }}>
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
      <NavButton>
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
