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
        Brad is a Senior Associate at {' '}
        <a href="http://www.auerbachconsultants.com" rel="noopener" target="_blank">
          Auerbach Pollock Friedlander
        </a> where he designs sound and video systems for theatres, themed entertainment, and productions around the world.  Brad is also a New York City based Sound Designer and Broadway Associate.
        .
      </p>
      <p>
        Brad was the associate sound designer for CHOIR BOY on Broadway which won the 2019 Tony Award for 
Best Sound Design for a Play.  Brad is presently the associate designer sound designer and system designer for TAKE ME OUT on Broadway.

He is the curator for Sound Kitchen 2021 at the upcoming World Stage Design expo in Calgary.
<p>
  Previously, Brad taught Audio Engineering at Belmont University in Nashville, Project Manager for Blitz Communications in London, and Lead System Tech for Cirque du Soleil’s The Beatles LOVE in Las Vegas.  
</P>
  <p>
  He serves on the education committee for the Theatrical Sound Designers and Composers Association, is a vice commissioner for sound for United States Institute for Theatre Technology, and is a member of the Association of Sound Designers in the UK.  
</P>
  
  <p>Brad holds an MFA degree in Sound Design from Yale School of Drama. 
Please visit Brad’s website at www.BradWard.net.

      </p>
      
     
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
