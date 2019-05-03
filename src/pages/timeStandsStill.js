import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PortfolioSubtitle = styled.p`
  color: #777;
`

const PortfolioContent = styled.div`
  text-align: center;
`

const TimeStandsStill = () => (
  <Layout>
    <SEO title="Time Stands Still" />
    <PortfolioContent>
      <h1>Time Stands Still</h1>
      <PortfolioSubtitle>Bristol Riverside Theatre - 2018</PortfolioSubtitle>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={'https://player.vimeo.com/video/266027000'}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </PortfolioContent>
  </Layout>
)

export default TimeStandsStill
