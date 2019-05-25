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
    <SEO title="About" />
    <About>
      <PageTitle>About Brad</PageTitle>
      <p>
        Brad Ward is a New York City-based Sound Designer. He works as a Senior
        AV and Theatrical Systems Designer at{' '}
        <a href="http://www.dlrgroup.com" rel="noopener" target="_blank">
          DLR Group | Westlake Reed Leskosky
        </a>
        .
      </p>
      <p>
        With his expertise in theatrical sound design and the academe, Brad is
        available for commissioned projects, teaching, and workshops on a
        freelance basis.
      </p>
      <p>
        Previously, Brad worked as Assistant Professor of Audio Engineering
        Technology at Belmont University in Nashville, Project Manager for Blitz
        Communications in London, and Lead Audio for Cirque du Soleil’s The
        Beatles LOVE in Las Vegas.
      </p>
      <p>
        Brad serves on the education committee for the Theatrical Sound
        Designers and Composers Association, is a vice commissioner for sound
        for United States Institute for Theatre Technology, and is a member of
        the Association of Sound Designers in the UK. He was the curator for
        Sound Kitchen at World Stage Design 2017 in Taipei. Brad enjoys sharing
        his knowledge through lectures and adjunct teaching assignments.
      </p>
      <p>Brad holds an MFA degree in Sound Design from Yale School of Drama.</p>
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

export default AboutPage
