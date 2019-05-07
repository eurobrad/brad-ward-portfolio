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

const NumberTheStars = () => (
  <Layout>
    <SEO title="Number the Stars" />
    <ProjectContent>
      <ProjectContent__Title>Number the Stars</ProjectContent__Title>
      <ProjectSubtitle>Nashville Children's Theatre - 2014</ProjectSubtitle>
      <ProjectMedia>
        <iframe
          src={'https://player.vimeo.com/video/181566448?title=0&portrait=0'}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </ProjectMedia>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>Design Statement by Bradlee Ward, Sound Designer:</p>
        <p>For me, Number the Stars is a great reminder that we each can make a difference by standing up for what’s right. When individuals group together for what’s right, an entire population can be rescued.</p>
        <p>In times like ours, we need reminders of what can come if we don’t take a stand as individuals to help.</p>
        <p>Number the Stars is about one family who helped when the entire nation of Denmark rescued their Jewish neighbors from being taken to concentration camps by by the Nazis during the German occupation of Denmark during WW2.</p>
        <p>The sound design was based on sounds and settings described by Jews who made the journey from Denmark to Sweden. I listened to stories of how the non-Jewish population came together to help, and sometimes at their own peril.</p>
        <p>I used clips from historic sound recordings from BBC Radio Denmark and period music and announcements that were used as codes to deliver messages to the Jews and those who were helping plan their escape.</p>
        <p>I helped create the characters of the dogs that searched out Jews and with the help of Gideon Boley, created original music underscoring transitions and speeches.</p>
        <p>Enjoy and remember!</p>
      </ProjectDescription>
      <a href="https://www.nashvillechildrenstheatre.org/">
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
    </ProjectContent>
  </Layout>
)

export default NumberTheStars
