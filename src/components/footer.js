import React from 'react'
import styled from 'styled-components'

const FooterText = styled.h3`
  margin-bottom: 0;
  padding: 24px 8px;
  font-family: 'Arial Narrow Bold', sans-serif;
  a {
    color: white;
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }
  @media (max-width: 400px) {
    padding: 16px 8px;
  }
`

const FooterMain = styled.header`
  background: #341a4f;
  color: #bc92e5;
  text-align: center;
  margin-top: 1.45em;
`

const Footer = ({ siteTitle }) => (
  <FooterMain>
    <FooterText>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a
        href="https://www.linkedin.com/in/tysonwilliams/"
        target="_blank"
        rel="noopener"
      >
        Tyson Williams
      </a>
      {` `}|{` `}
      Contact
      {` `}
      <a href="mailto:info@bradward.design" target="_blank" rel="noopener">
        Brad &#9993;
      </a>
    </FooterText>
  </FooterMain>
)

export default Footer
