import { Link } from 'gatsby'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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
      <a
        href="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/documents/ProductionDesignPortfolio.pdf"
        rel="noopener"
        target="_blank"
      >
        <ViewProjectButton>Download Project (pdf)</ViewProjectButton>
      </a>
    </ProjectContent>
  </Layout>
)

export default IntroToProductionDesign
