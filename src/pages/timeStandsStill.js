import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PortfolioContent = styled.div`
  padding: 8px;
  h1 {
    text-align: center;
  }
`

const TimeStandsStill = () => (
  <Layout>
    <SEO title="Time Stands Still" />
    <PortfolioContent>
      <h1>Time Stands Still</h1>
      <h2>[Image]</h2>
      <p>Description...</p>
    </PortfolioContent>
  </Layout>
)

export default TimeStandsStill
