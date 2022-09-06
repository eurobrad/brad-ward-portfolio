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
        Brad is a Senior Associate at{' '}
        <a
          href="http://www.auerbachconsultants.com"
          rel="noopener"
          target="_blank"
        >
          Auerbach Pollock Friedlander
        </a>{' '}
        where he designs sound and video systems for theatres, themed
        entertainment, and productions around the world. Brad is also a New York
        City based Sound Designer and Broadway Associate.
      </p>
      <br />
      <p>
        Brad was recently the sound designer for PENELOPE, OR HOW THE ODYSSEY
        WAS REALLY WRITTEN at The York Theatre in NYC and assistant designer for
        Audible.com Theater at Minetta Lane's HEART. He was the associate sound
        designer THE ROSE TATTOO on Broadway which was nominated for the 2020
        Tony Award for Best Original Score for Theatre and for CHOIR BOY on
        Broadway which won the 2019 Tony Award for Best Sound Design for a Play.
        He was the curator for Sound Kitchen 2023 at OISTAT's World Stage Design
        expo in Calgary.
      </p>
      <br />
      <p>
        Previously, Brad taught Audio Engineering at Belmont University in
        Nashville, Digital Production at Mountview Academy for the Arts in
        London, Sound Design for UNLV in Las Vegas, Project Manager for Blitz
        Communications in London, and Lead System Tech for Cirque du Soleil’s
        The Beatles LOVE in Las Vegas.
      </p>
      <br />
      <p>
        He serves on the education committee for the Theatrical Sound Designers
        and Composers Association, is a vice commissioner for sound for United
        States Institute for Theatre Technology, and is a member of the
        Association of Sound Designers in the UK.
      </p>
      <br />
      <p>Brad holds an MFA degree in Sound Design from Yale School of Drama.</p>
      <br />
      <p>Please visit Brad’s website at www.BradWard.net.</p>
      <br />
      <p>
        <strong>Download Resume:</strong> —{' '}
        <a
          href="https://eurobrad.s3.us-east-2.amazonaws.com/resume/Resume-Brad%20Ward-Web.pdf"
          rel="noopener"
          target="_blank"
        >
          Resume
        </a>{' '}
      </p>
    </About>
  </Layout>
)

export default AboutPage
