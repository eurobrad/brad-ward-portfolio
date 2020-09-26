import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageTitle = styled.h1`
  padding: 10px;
  text-align: center;
  @media (min-width: 450px) {
    margin: 24px 0;
  }
`

const Articles = styled.div`
  padding: 0 8px;
`

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <Articles>
      <PageTitle>Articles & Resources</PageTitle>
      <p>Rose Tattoo - TiMax Article 2019</p>
      <p>
        <a
          href="https://uploads.codesandbox.io/uploads/user/e0111d8f-2afd-4ac0-8a49-bbfc20ba5eb3/cDJf-Rose+Tattoo+-+TiMax+-+L&S+America.pdf"
          rel="noopener"
          target="_blank"
        >
          Rose Tattoo TiMax Article
        </a>
      </p>
      <p>
        TSDCA 2020 Panel: Exploring the Relationship Between Sound Designers,
        Acousticians, AV Consultants, and Installers
      </p>
      <p>
        <a
          href="https://tsdca.org/videos/2020-annual-meeting-exploring-the-relationship-between-sound-designers-acousticians-av-consultants-and-installers/"
          rel="noopener"
          target="_blank"
        >
          TSDCA Session
        </a>
      </p>
    </Articles>
  </Layout>
)

export default ArticlesPage
