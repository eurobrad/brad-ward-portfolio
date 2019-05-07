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

const PrideAndPrejudice = () => (
  <Layout>
    <SEO title="Pride and Prejudice" />
    <ProjectContent>
      <ProjectContent__Title>Pride and Prejudice</ProjectContent__Title>
      <ProjectSubtitle>
        Bristol Riverside Theatre - 2013
      </ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/pride-prejudice-project-cover.jpg" />
      </ProjectMedia>
      <ProjectDescription>
        <p>Sound Designer for this production directed by Keith Baker.</p>
      </ProjectDescription>
      <a
        href="https://www.brtstage.org/2013_2014/pride-and-prejudice-2/"
      >
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
    </ProjectContent>
  </Layout>
)

export default PrideAndPrejudice
