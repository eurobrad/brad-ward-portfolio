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
  padding: 25% 0 0 0;
  margin-right: 2%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const ProjectDescription = styled.section`
  margin-top: 32px;
  text-align: left;
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  margin: 16px;
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
      height: 250px;
      margin-bottom: 32px;
      .vp-center {
        width: 100%;
      }
    }
  }
`

const jammer = () => (
  <Layout>
    <SEO title="The Jammer" />
    <ProjectContent>
      <ProjectContent__Title>The Jammer</ProjectContent__Title>
      <ProjectSubtitle>Edinburgh Fringe Festival - 2004</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          // src={'https://www.youtube.com/embed/wrPlmKw_PTo'}
          //     frameborder="0"
          //     allow="autoplay; fullscreen"
          //     allowfullscreen

          width="560"
          height="315"
          src="https://www.youtube.com/embed/wrPlmKw_PTo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
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
      {/* <a href="http://www.theatredesign.org.uk/exhibitions/previous-exhibitions/transformation-revelation-at-the-va-london-2012/">
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
      <a href="http://videos.videopress.com/8fUdAM27/transformation-revelation1_fmt1.ogv">
        <ViewProjectButton>View Expo Trailer</ViewProjectButton>
      </a> */}
    </ProjectContent>
  </Layout>
)

export default jammer
