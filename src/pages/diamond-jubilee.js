import { Link } from 'gatsby'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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
  margin-right: 2%;
`

const ProjectDescription = styled.section`
  margin-top: 32px;
  text-align: left;
`

const ProjectContent = styled.div`
  text-align: center;
  padding: 8px;
  @media (max-width: 480px) {
    ${ProjectContent__Title} {
      font-size: 24px;
    }
    ${ProjectDescription} {
      margin-top: 352px;
    }
    ${ProjectMedia} {
      width: 100%;
      height: 250px;
      .thumbs-wrapper {
        display: none;
      }
    }
  }
  @media (max-width: 375px) {
    ${ProjectDescription} {
      margin-top: 64px;
    }
  }
`

const DiamondJubilee = () => (
  <Layout>
    <SEO title="Queen Elizabeth's Diamond Jubilee Celebration" />
    <ProjectContent>
      <ProjectContent__Title>Queen Elizabeth's Diamond Jubilee Celebration, Manchester UK</ProjectContent__Title>
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
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/Array Calc.pdf" />
            <p className="legend">The Array Calc</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          One of the highest honors I had while living in the UK was to serve the Queen as the Sound Designer and Project Manager for her Jubilee Celebration in Manchester.  It was a very exciting day and it went off without a hitch.
         </p>
       
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default DiamondJubilee
