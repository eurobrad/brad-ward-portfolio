import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { BWAudioDesign } from '../components/images/image-bradward_audio-design'
import { CtsdCertified } from '../components/images/image-ctsd'
import { BWEducation } from '../components/images/image-bradward-education'

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
    <h2 style={{ marginBottom: `1.45rem`, textAlign: 'center', color: `rebeccapurple` }}>Sound Design and Composition for Theatre</h2>
    <main>
      <section>
        <div style={{ width: `400px`, display: `inline-block`, padding: 10 }}>
          <BWAudioDesign/>
        </div>
        <div style={{ width: `400px`, display: `inline-block`, padding: 10 }}>
          <CtsdCertified/>
        </div>
        <div style={{ width: `400px`, display: `inline-block`, padding: 10 }}>
          <BWEducation/>
        </div>
      </section>
      <section style={{ margin: `4.35rem 0`, color: `rebeccapurple` }}>
        <h2 style={{ textAlign: 'center' }}>Portfolio Matrix going here! :)</h2>
      </section>
    </main>
  </Layout>
)

export default IndexPage
