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

const About = styled.div`
  padding: 0 8px;
`

const AboutPage = () => (
  <Layout>
    <SEO title="Articles" />
    <About>
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

      <p>Please visit Brad’s website at www.BradWard.net.</p>

      <p>
        <strong>Download Resume:</strong> —{' '}
        <a
          href="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/documents/Resume_BradWard_SoundDesign.pdf"
          rel="noopener"
          target="_blank"
        >
          Theatrical/Sound Design
        </a>{' '}
        —{' '}
        <a
          href="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/documents/Resume_BradWard_ConsultingAndEducation.pdf"
          rel="noopener"
          target="_blank"
        >
          Consulting/Education
        </a>
      </p>
    </About>
  </Layout>
)

export default ArticlesPage
