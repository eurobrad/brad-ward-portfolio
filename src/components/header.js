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

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const ContactButton = styled.h2`
  display: inline-block;
  margin: 0 10px;
  padding: 4px 8px;
  background: white;
  color: rebeccapurple;
  border-radius: 8px;
  a {
    :active {
      color: rebeccapurple;
    }
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
          <StyledLink to="/">Home</StyledLink>
      </NavButton>
      <NavButton>
          <StyledLink to="/about">About</StyledLink>
      </NavButton>
        <ContactButton>
          <a href="mailto:info@bradward.net" target="_blank" rel="noopener">Say hi</a>
        </ContactButton>
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
