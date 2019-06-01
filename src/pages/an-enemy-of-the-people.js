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
  width: 47%;
  height: 465px;
  overflow: auto;
  vertical-align: top;
  text-align: left;
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
  @media (min-width: 481px) {
    margin-left: 16px;
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

const AnEnemyOfThePeople = () => (
  <Layout>
    <SEO title="An Enemy of the People" />
    <ProjectContent>
      <ProjectContentTitle>An Enemy of the People</ProjectContentTitle>
      <ProjectSubtitle>Bristol Riverside Theatre - 2015</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/183242938?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
        <a href="https://www.brtstage.org/">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>Design Statement by Bradlee Ward, Sound Designer:</p>
        <p>
          Is it truth, hype, or greed that leads a town on a journey questioning
          their health, happiness and economic stability? I was thrilled to be a
          part of the company at Bristol Riverside Theatre in Pennsylvania who
          told this extremely timely story in our production of An Enemy of the
          People. I worked in the studio with Ryan Huff to create original music
          which, along with ambient sounds, created the aural world of the play.
          The sounds and music are both pure and dirty, in time and out, natural
          and manufactured, pleasant and shocking, stark and beautiful ... truth
          and lies. Can you tell the difference?
        </p>
        <p>Come and listen...</p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default AnEnemyOfThePeople
