import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectContent__Title = styled.h1``

const ProjectSubtitle = styled.p`
  color: #777;
`

const ProjectMedia = styled.div`
  position: relative;
  float: left;
  clear: both;
  width: 60%;
  margin-right: 2%;
`

const ProjectDescription = styled.section`
  margin-top: 32px;
  text-align: left;
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  padding: 8px 16px;
  box-shadow: 2px 2px 2px 2px #bd92e8;
  border-radius: 5px;
  cursor: pointer;
`

const ProjectContent = styled.div`
  text-align: center;
  padding: 8px;
  @media (max-width: 480px) {
    ${ProjectContent__Title} {
      font-size: 24px;
    }
    ${ProjectMedia} {
      width: 100%;
    }
    ${ProjectDescription} {
      margin-top: 0;
    }
  }
`

const ChoirBoy = () => (
  <Layout>
    <SEO title="Choir Boy" />
    <ProjectContent>
      <ProjectContent__Title>Choir Boy</ProjectContent__Title>
      <ProjectSubtitle>
        Associate Sound Designer, Friedman Theatre, Broadway - 2019
      </ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/les-miserables.jpg" />
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Associate Sound designer for this Tony Nominated Play for Manhattan
          Theatre Club.{' '}
        </p>
      </ProjectDescription>
      {/* <a
        href="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/documents/ProductionDesignPortfolio.pdf"
        rel="noopener"
        target="_blank"
      >
        <ViewProjectButton>Download Project (pdf)</ViewProjectButton>
      </a> */}
    </ProjectContent>
  </Layout>
)

export default ChoirBoy
