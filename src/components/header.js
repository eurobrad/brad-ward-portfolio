import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Logo192x192 } from '../components/images/image-logo-192x192';

const HeaderMain = styled.header`
  background: rebeccapurple;
  margin: 0 0 1.45em 0;
  text-align: center;
`;

const HeaderLogo = styled.div`
  display: inline-block;
  position: relative;
  top: 13px;
  width: 100px;
  margin: 0 2em 1em 2em;
`;

const HeaderTitle = styled.h1`
  display: inline-block;
  margin-left: 2em;
  margin-right: 2em;
  @media (max-width: 1075px) {
    display: block;
  }
`;

const NavWrapper = styled.div`
  display: inline-block;
  margin-left: 2em;
  margin-right: 2em;
  @media (max-width: 1075px) {
    display: block;
  }
`;

const NavButton = styled.h2`
  display: inline-block;
  margin: 0 10px;
  border-bottom: 3px solid rebeccapurple;
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    border-bottom: 3px solid white;
  }
  @media (max-width: 810px) {
    margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <nav>
      <HeaderLogo>
        <Logo192x192/>
      </HeaderLogo>
      <HeaderTitle>
      <StyledLink to="/">Brad Ward Design</StyledLink>
      </HeaderTitle>
      <NavWrapper>
        <NavButton>
          <StyledLink to="/">Home</StyledLink>
        </NavButton>
        <NavButton>
          <StyledLink to="/about">About</StyledLink>
        </NavButton>
        <NavButton>
          <a href="mailto:info@bradward.net" target="_blank" rel="noopener">Contact</a>
        </NavButton>
      </NavWrapper>
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
