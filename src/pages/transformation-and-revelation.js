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

const TransformationAndRevelation = () => (
  <Layout>
    <SEO title="Transformation &amp; Revelation" />
    <ProjectContent>
      <ProjectContent__Title>
        Transformation &amp; Revelation
      </ProjectContent__Title>
      <ProjectSubtitle>UK Design for Performance - 2011</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/97871458?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>
          Brad’s sound design was created for PMQ, at Theatre 503 in London in
          2010 and was remounted at the High Tides Festival in Suffolk in
          2011.The play was written by Ella Hickson and Directed by James Dacre
        </p>
        <p>
          Brad’s portfolio from PMQ was included in the Society of British
          Theatre Designers Expo, Transformation &amp; Revelation: Gormley to
          Gaga – UK Design for Performance 2007­2011. This expo was exhibited at
          the national conference in Cardiff, where approximately 5,500 visitors
          saw the show and then moved to the Prague Quadrennial where the expo
          won both of the special awards for sound and was seen by approximately
          40,000 people.It then was chosen as one of eleven displays
          representing important collections in the V&amp;A and formed part of
          the museum’s larger Olympic year exhibition, A Celebration of British
          Design 1948­2012: Innovation in the Modern Age . From the V&amp;A, the
          expo toured the UK.
        </p>
      </ProjectDescription>
      <a href="http://www.theatredesign.org.uk/exhibitions/previous-exhibitions/transformation-revelation-at-the-va-london-2012/">
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
      <a href="http://videos.videopress.com/8fUdAM27/transformation-revelation1_fmt1.ogv">
        <ViewProjectButton>View Expo Trailer</ViewProjectButton>
      </a>
    </ProjectContent>
  </Layout>
)

export default TransformationAndRevelation
