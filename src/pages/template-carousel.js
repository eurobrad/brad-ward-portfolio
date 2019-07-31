import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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
  display: inline-block;
  width: 49%;
  margin-right: 2%;
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
    ${ProjectContentTitle} {
      font-size: 24px;
    }
    ${ProjectDescription} {
      margin-top: 32px;
    }
    ${ProjectMedia} {
      width: 100%;
      height: 250px;
      .thumbs-wrapper {
        display: none;
      }
    }
  }
`

const TheBeatlesLOVE = () => (
  <Layout>
    <SEO title="Project Title" />
    <ProjectContent>
      <ProjectContentTitle>Project Title</ProjectContentTitle>
      <ProjectSubtitle>Project Subtitle</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-cast.jpg" />
            <p className="legend">Image 1 name</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-drive-my-car.jpg" />
            <p className="legend">Image 2 name</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-sgt-pepper.jpg" />
            <p className="legend">Image 3 name</p>
          </div>
        </Carousel>
        <a
          href="https://www.dropbox.com/s/hfr0x5uabkt95qj/JohnHuntingtonL%26SA.pdf?dl=0"
          rel="noopener"
          target="_blank"
        >
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
        <a href="https://www.cirquedusoleil.com/beatles­-love">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <h4>Award: Two time Grammy award winner</h4>
        <p>Design Statement by Bradlee Ward, Sound Designer:</p>
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

export default TheBeatlesLOVE
