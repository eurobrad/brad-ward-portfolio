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
  }
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  margin-top: 25px;
  margin-right: 25px;
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

const BernhardtHamlet = () => (
  <Layout>
    <SEO title="Bernhardt Hamlet" />
    <ProjectContent>
      <ProjectContentTitle>Bernhardt Hamlet</ProjectContentTitle>
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
        <p>
          Associate Sound Designer for this production at Roundabout Theatre's
          American Airlines Theatre.
          <br />
          <a
            href="https://www.roundabouttheatre.org/get-tickets/2018-2019-season/bernhardthamlet/"
            rel="noopener"
            target="_blank"
          >
            <ViewProjectButton>Show Website</ViewProjectButton>
          </a>
          <br /> <br />
          This was the first of many collaboratoins between Brad, Tony Award
          winning sound designer Fitz Patton, and system desinger Sun Hee Kil.
          Sunny and Brad like to call themselves "Fitz's Angels" as they design,
          implement, and fine-tune the instrument through Fitz delivers his
          heavenly sounds and music.
          <br />
          <a href="https://www.fitzpatton.com" rel="noopener" target="_blank">
            <ViewProjectButton>Fitz Patton</ViewProjectButton>
          </a>
          <a href="https://www.sunheekil.com" rel="noopener" target="_blank">
            <ViewProjectButton>Sun Hee Kil</ViewProjectButton>
          </a>
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default BernhardtHamlet
