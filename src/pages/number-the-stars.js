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

const NumberTheStars = () => (
  <Layout>
    <SEO title="Number the Stars" />
    <ProjectContent>
      <ProjectContentTitle>Number the Stars</ProjectContentTitle>
      <ProjectSubtitle>Nashville Children's Theatre - 2014</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/181566448?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
        <a href="https://www.nashvillechildrenstheatre.org/">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>Design Statement by Bradlee Ward, Sound Designer:</p>
        <p>
          For me, Number the Stars is a great reminder that we each can make a
          difference by standing up for what’s right. When individuals group
          together for what’s right, an entire population can be rescued.
        </p>
        <p>
          In times like ours, we need reminders of what can come if we don’t
          take a stand as individuals to help.
        </p>
        <p>
          Number the Stars is about one family who helped when the entire nation
          of Denmark rescued their Jewish neighbors from being taken to
          concentration camps by by the Nazis during the German occupation of
          Denmark during WW2.
        </p>
        <p>
          The sound design was based on sounds and settings described by Jews
          who made the journey from Denmark to Sweden. I listened to stories of
          how the non-Jewish population came together to help, and sometimes at
          their own peril.
        </p>
        <p>
          I used clips from historic sound recordings from BBC Radio Denmark and
          period music and announcements that were used as codes to deliver
          messages to the Jews and those who were helping plan their escape.
        </p>
        <p>
          I helped create the characters of the dogs that searched out Jews and
          with the help of Gideon Boley, created original music underscoring
          transitions and speeches.
        </p>
        <p>Enjoy and remember!</p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default NumberTheStars
