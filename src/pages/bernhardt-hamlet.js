import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectContent__Title = styled.h1`
  margin: 0 10px 10px 10px;
`

const ProjectSubtitle = styled.p`
  color: #777;
  margin: 10px;
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

const BernhardtHamlet = () => (
  <Layout>
    <SEO title="Bernhardt Hamlet" />
    <ProjectContent>
      <ProjectContent__Title>Bernhardt Hamlet</ProjectContent__Title>
      <ProjectSubtitle>
        Associate Sound Design, American Airlines Theatre, Broadway - 2018
      </ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Bernhardt%20Tile.jpg" />
        {/* <a href="https://choirboybroadway.com/" rel="noopener" target="_blank">
          <ViewProjectButton>Project's Website</ViewProjectButton>
        </a> */}
      </ProjectMedia>
      <ProjectDescription>
        <p>Sound designer for this production in Belmont's Troutt Theatre.</p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default BernhardtHamlet
