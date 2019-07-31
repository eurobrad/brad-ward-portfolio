import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectContentTitle = styled.h1`
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
  a {
    display: block;
  }
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
    p {
      margin-top: 24px;
    }
  }
`

const ViewProjectButton = styled.button`
  position: relative;
  z-index: 999;
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
    ${ProjectContentTitle} {
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
      <ProjectContentTitle>Pride and Prejudice</ProjectContentTitle>
      <ProjectSubtitle>Bristol Riverside Theatre - 2013</ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/pride-prejudice-project-cover.jpg" />
        <a href="https://www.brtstage.org/2013_2014/pride-and-prejudice-2/">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <p>Sound Designer for this production directed by Keith Baker.</p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default PrideAndPrejudice
