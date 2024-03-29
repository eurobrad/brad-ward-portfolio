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
  position: relative;
  display: inline-block;
  width: 49%;
  margin-right: 26px;
  padding: 25% 0 0 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const ProjectDescription = styled.section`
  display: inline-block;
  width: 49%;
  height: 465px;
  overflow: auto;
  vertical-align: top;
  text-align: left;
  @media (min-width: 1331px) {
    margin-top: 0px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`

const ViewProjectButton = styled.button`
  position: relative;
  z-index: 999;
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
      height: 250px;
      .vp-center {
        width: 100%;
      }
    }
    ${ViewProjectButton} {
      margin-top: 168px;
    }
    ${ProjectDescription} {
      margin-top: 32px;
    }
  }
`

const ChoirBoy = () => (
  <Layout>
    <SEO title="Choir Boy" />
    <ProjectContent>
      <ProjectContentTitle>Choir Boy</ProjectContentTitle>
      <ProjectSubtitle>
        Associate Sound Designer, Friedman Theatre/Manhattan Theatre Club,
        Broadway - 2019
      </ProjectSubtitle>
      <ProjectMedia>
        <iframe
          title="Video Title"
          src={'https://player.vimeo.com/video/345787425?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </ProjectMedia>
      <ProjectDescription>
        <p>
          2019 Tony Award - Best Sound Design for a Play
          <br /> <br />
          Associate Sound Designer with Sun Hee Kil for the Broadway premire of
          CHOIR BOY by Tarell Alvin McCraney, Directed by Trip Cullman, Sound
          Design by Fitz Patton for Manhattan Theatre Club at the Friedman
          Theatre.
          <br />
          This another collaboratoin between Brad, Tony Award winning sound
          designer Fitz Patton, and system desinger Sun Hee Kil. Sunny and Brad
          like to call themselves "Fitz's Angels" as they design, implement, and
          fine-tune the instrument through Fitz delivers his heavenly sounds and
          music.
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

export default ChoirBoy
