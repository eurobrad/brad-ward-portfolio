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

const TimeStandsStill = () => (
  <Layout>
    <SEO title="Time Stands Still" />
    <ProjectContent>
      <ProjectContentTitle>Time Stands Still</ProjectContentTitle>
      <ProjectSubtitle>Bristol Riverside Theatre - 2018</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/266027000?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
        <a href="https://www.brtstage.org/2017-2018/time-stands-still/">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>
          In TIME STANDS STILL, we explore how the impact of war and terrorism
          can change lives forever. In this case, a car bomb has severely
          injured Sarah, and she returns home to recuperate in the Brooklyn loft
          she shares with her boyfriend, James who has also had a similar
          experience. Both characters struggle with physical and mental recovery
          from their trauma, and how their experiences have changed their
          relationship and each other. Can you really get back to "normal" or
          does normal change?
        </p>
        <p>
          Through music and sounds, we were able to help tell this story and
          relate it to the bombs that sadly go off in our lives and the lives of
          those we love. As you listen to this sampling of music and sound,
          consider these questions: What do we value in our lives? Are we
          addicted to chaos and war? How can our places in the world change? How
          do we react to the terror? What does it mean to pick up and move
          forward? Should we reject the comfortable life and to try to make a
          difference for others? What’s the point?
        </p>
        <p>Listen…</p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default TimeStandsStill
