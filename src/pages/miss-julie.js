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

const ProjectAudio = styled.audio``

const ProjectMedia = styled.div`
  display: inline-block;
  width: 49%;
  margin-right: 2%;
  a {
    display: block;
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
  background-color: rebeccapurple;
  color: white;
  margin-bottom: 1.45rem;
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
    ${ProjectContentTitle} {
      font-size: 24px;
    }
    ${ProjectMedia} {
      width: 100%;
    }
    ${ProjectDescription} {
      margin-top: 0;
    }
  }
`

const SingleImageTemplate = () => (
  <Layout>
    <SEO title="Page's Title" />
    <ProjectContent>
      <ProjectContentTitle>Project Title</ProjectContentTitle>
      <ProjectSubtitle>Project Description</ProjectSubtitle>
      <ProjectMedia>
        <figure>
          <figcaption>Listen to this Audio Sample:</figcaption>
          <audio controls src={"01Opening.mp3"}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <a href="https://choirboybroadway.com/" rel="noopener" target="_blank">
          <ViewProjectButton>Project's Website</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
          aliquet diam, eu tincidunt velit. Aliquam varius a arcu non bibendum.
          Vestibulum orci lectus, finibus sed pulvinar quis, hendrerit ut eros.
          In hac habitasse platea dictumst. Sed dolor nisi, eleifend et vehicula
          eu, efficitur a magna. Pellentesque vel imperdiet metus. Donec blandit
          tempus felis a porttitor. Phasellus turpis ex, faucibus vel venenatis
          sed, suscipit ut felis.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default SingleImageTemplate
