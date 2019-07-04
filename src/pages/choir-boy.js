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
    margin-top: 46px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  margin-top: 96px;
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
        Associate Sound Designer, Friedman Theatre, Broadway - 2019
      </ProjectSubtitle>
      <ProjectMedia>
        <iframe
          title="Video Title"
          src={'https://player.vimeo.com/video/345787425?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
        {/* <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/ChoirBoy%20Nominations.jpg" /> */}
        <a href="https://choirboybroadway.com/" rel="noopener" target="_blank">
          <ViewProjectButton>Show's Website</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Associate Sound Designer with Sun Hee Kil for the Broadway premire of
          CHOIR BOY by Tarell Alvin McCraney, Directed by Trip Cullman, Sound
          Design by Fitz Patton for Manhattan Theatre Club at the Friedman
          Theatre. Manhattan Theatre Club.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default ChoirBoy
