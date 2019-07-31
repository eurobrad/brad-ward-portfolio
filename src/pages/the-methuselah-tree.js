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

const TheMethuselahTree = () => (
  <Layout>
    <SEO title="The Methuselah Tree" />
    <ProjectContent>
      <ProjectContentTitle>The Methuselah Tree</ProjectContentTitle>
      <ProjectSubtitle>
        Cockroach Theatre - Las Vegas, NN, Minnesota Fringe Festival, & Goldwell
        Open Air Museum - Rhyolite, NV - 2007
      </ProjectSubtitle>
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
          Brad received the Sound Design Award at World Stage Design 2009 in
          Seoul Korea for this design.
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
