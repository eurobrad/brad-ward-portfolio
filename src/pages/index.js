import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { BWAudioDesign } from '../components/images/image-bradward_audio-design'
import { CtsdCertified } from '../components/images/image-ctsd'
import { BWEducation } from '../components/images/image-bradward-education'

const ContentSection = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0;
  padding: 10px;
  vertical-align: top;
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `brad ward`,
        `sound design`,
        `sound composition`,
        `composition for theatre`,
        `av`,
        `audio visual`,
        `theatrical systems designer`,
        `audio engineering`,
      ]}
    />
    <h1 style={{ marginBottom: `1.45rem`, textAlign: 'center', padding: `8px` }}>Sound Design and Composition for Theatre</h1>
    <main>
      <section>
        <ContentSection>
          <BWAudioDesign/>
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>Sound Design and Composition</h3>
          <p>
            Brad is an award winning Sound Designer and Composer. Brad is also available for Projection/Media Design. He has also worked as a Project Manager for events worldwide. Brad also creates amazing custom Sound Effects and Soundscapes and is an expert in Show Control.
          </p>
        </ContentSection>
        <ContentSection>
          <CtsdCertified/>
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>AV and Theatrical Systems Designer</h3>
          <p>
            Brad is a NYC based CTS-D Certified design consultant working as Senior AV/Theatrical Systems Designer at DLR Group | Westlake Reed Leskosky. Brad can objectively design and engineer a system right for your application. Please contact Brad to discuss your next project.
          </p>
        </ContentSection>
        <ContentSection>
          <BWEducation/>
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>Education</h3>
          <p>
            Brad has provided successful workshops, classes, training, lectures, and demonstrations throughout the world. Brad is known for his clear communication at the level he is teaching which has ranged from primary and graduate students to industry professionals. Let Brad design a learning experience for you.
          </p>
        </ContentSection>
      </section>
      <section style={{ margin: `4.35rem 0` }}>
        <h2 style={{ textAlign: 'center' }}>Portfolio Matrix going here! :)</h2>
      </section>
    </main>
  </Layout>
)

export default IndexPage
