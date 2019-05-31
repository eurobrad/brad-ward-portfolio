import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectContent__Title = styled.h1`
  margin: 0 10px 10px 10px;
  @media (min-width: 450px) {
    margin-top: 26px;
  }
`

const ProjectSubtitle = styled.p`
  color: #777;
  margin: 10px;
  @media (min-width: 450px) {
    margin-bottom: 34px;
  }
`

const ProjectMedia = styled.div`
  display: inline-block;
  width: 49%;
  margin-right: 2%;
`

const ProjectDescription = styled.section`
  display: inline-block;
  width: 49%;
  height: 465px;
  overflow: auto;
  vertical-align: top;
  text-align: left;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
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

const IntroToProductionDesign = () => (
  <Layout>
    <SEO title="Intro to Production Design" />
    <ProjectContent>
      <ProjectContent__Title>Intro to Production Design</ProjectContent__Title>
      <ProjectSubtitle>
        Assistant Professor, Belmont University - 2012
      </ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/belmont-pj.jpg" />
        <a
          href="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/documents/ProductionDesignPortfolio.pdf"
          rel="noopener"
          target="_blank"
        >
          <ViewProjectButton>Download Project (pdf)</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Course AET 3250 is an introduction to concert and event production
          design. It is a practicum-based study of the conceptual development
          and execution of concert and live event production design including
          lighting, set, sound, and projection. It also provides an introduction
          to show control and safety. For a more detailed description of the
          class and a syllabus, click the link below.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default IntroToProductionDesign
