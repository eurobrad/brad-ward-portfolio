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

const TheMethuselahTree = () => (
  <Layout>
    <SEO title="The Methuselah Tree" />
    <ProjectContent>
      <ProjectContent__Title>The Methuselah Tree</ProjectContent__Title>
      <ProjectSubtitle>Cockroach Theatre - Las Vegas, Nv, Minnesota Fringe Festival, & Goldwell Open Air Museum - Rhyolite, NV2007</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/98592789?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
      <p>
          Brad received the Sound Design Award at World Stage Design 2009 in Seoul
          Korea for this design.
        </p>
        <p>
          The world is transforming – beyond human understanding. In this
          absurdist dark comedy, we see Harris, a mad scientist attempting to
          save himself by creating a device to destroy the guilty souls of
          humans. In his quest, he deals with his wife who wants him to be a
          husband and father, a son who throws pots of pudding through windows
          and decapitates rodents, and a God/man figure living in the attic who
          dances behind a screen, watches the family from above, is strongly
          opposed to eating pudding, and occasionally pounds his gavel in
          judgment. By the end of the play, Harris has sacrificed son and wife
          to the cause, yet still hasn’t realized he cannot save himself.
        </p>
        <p>
        Transformation was most important in the sound design as I described
          the world within Harris’ laboratory and the ever-evolving world
          outside. Proportion and dynamics were key … I was just as interested
          in the decay of a sand cast bell as in the climax of an earthquake or
          a bowl of pudding being thrown through a window. Silence was also
          crucial.
        </p>

      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default TheMethuselahTree
