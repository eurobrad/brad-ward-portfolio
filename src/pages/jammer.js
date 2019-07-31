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
  margin-right: 16px;
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
  width: 47.5%;
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
  position: relative;
  z-index: 999;
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

const jammer = () => (
  <Layout>
    <SEO title="The Jammer" />
    <ProjectContent>
      <ProjectContentTitle>The Jammer</ProjectContentTitle>
      <ProjectSubtitle>Edinburgh Fringe Festival - 2004</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          title="The Jammer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wrPlmKw_PTo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        {/* <a href="http://www.theatredesign.org.uk/exhibitions/previous-exhibitions/transformation-revelation-at-the-va-london-2012/">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
        <a href="http://videos.videopress.com/8fUdAM27/transformation-revelation1_fmt1.ogv">
          <ViewProjectButton>View Expo Trailer</ViewProjectButton>
        </a> */}
      </ProjectMedia>
      <ProjectDescription>
        <p>
          The Jammer was originally performed at Yale School of Drama and then
          was produced for the Edinburgh Fringe Festival.
        </p>
        <p>
          Brad’s design for the play along with the show control system he
          designed for this play won the 2005 Clear-Com Award for Achievement in
          Sound at USITT in Toronto. The playback system, designed in Max MSP,
          was called Q Show Control which became his thesis at Yale.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default jammer
