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

const DiamondJubilee = () => (
  <Layout>
    <SEO title="Queen Elizabeth's Diamond Jubilee Celebration" />
    <ProjectContent>
      <ProjectContentTitle>
        Queen Elizabeth's Diamond Jubilee Celebration, Manchester UK
      </ProjectContentTitle>
      <ProjectSubtitle>Sound Designer/Project Manager</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/Queen.jpg" />
            <p className="legend">Queen Elizabeth and Prince Philip</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/mwMch12que_0324.jpg" />
            <p className="legend">The Setup, Manchester Central Hall</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/Rig.JPG" />
            <p className="legend">The d&b Rig</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/Array%20Calc.jpg" />
            <p className="legend">The Array Calc</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          While living in the UK I had the honor of serving the Queen as Sound
          Designer and Project Manager for her Jubilee Celebration in
          Manchester. It was a very exciting day and it went off without a
          hitch.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default DiamondJubilee
