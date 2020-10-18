import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import { Logo_White_295x148 as LogoWhite } from './images/logo-white-295x148'

const HeaderMain = styled.header`
  background: rebeccapurple;
  text-align: center;
  @media (max-width: 1075px) {
    padding-bottom: 8px;
  }
`

const HeaderLogo = styled.div`
  display: inline-block;
  position: relative;
  top: 13px;
  width: 100px;
  margin: 0 2em 2em 2em;
  text-align: center;
`

const HeaderTitle = styled.h1`
  display: inline-block;
  margin-left: 2em;
  margin-right: 2em;
  @media (max-width: 1075px) {
    display: block;
    margin-left: 16px;
    margin-right: 16px;
  }
`

const NavWrapper = styled.div`
  display: inline-block;
  margin: 0.33em 2em;
  padding-top: 8px;
  @media (max-width: 1075px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const hamburgerMenuStyles = {
  bmBurgerButton: {
    position: 'relative',
    top: '8px',
    width: '36px',
    height: '30px',
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '136px',
  },
  bmMenu: {
    background: '#9a6ac9',
    padding: '0em 1.5em 0em',
    fontSize: '1.5em',
  },
  bmMorphShape: {
    fill: '#9a6ac9',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    color: 'white',
    textDecoration: 'none',
    padding: '.1em 0em',
  },
  bmOverlay: {
    background: 'none',
  },
}

const Header = ({ siteTitle }) => (
  <HeaderMain>
    <nav>
      <HeaderLogo>
        <Link to="/">
          <LogoWhite />
        </Link>
      </HeaderLogo>
      <HeaderTitle>
        <StyledLink to="/">Brad Ward Design</StyledLink>
      </HeaderTitle>
      <NavWrapper>
        <Menu styles={hamburgerMenuStyles} right disableAutoFocus>
          <StyledLink to="/" id="home" className="menu-item">
            Home
          </StyledLink>
          <StyledLink to="/about" id="about" className="menu-item">
            About
          </StyledLink>
                    <StyledLink to="/articles" id="articles" className="menu-item">
            Resources
          </StyledLink>
          <a
            id="contact"
            className="menu-item"
            href="mailto:info@bradward.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </Menu>
      </NavWrapper>
    </nav>
  </HeaderMain>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Brad Ward Design`,
}

export default Header
