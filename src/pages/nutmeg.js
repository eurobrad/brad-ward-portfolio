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
      .vp-center {
        width: 100%;
      }
    }
  }
`

const Nutmeg = () => (
  <Layout>
    <SEO title="A Splash of Nutmeg in Milk" />
    <ProjectContent>
      <ProjectContent__Title>A Splash of Nutmeg in Milk</ProjectContent__Title>
      <ProjectSubtitle>Yale School of Drama - 2004</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/335751880?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>
          Sound Design for the premiere of this play by Sarah Fornia at Yale
          University's New Theatre.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default Nutmeg
