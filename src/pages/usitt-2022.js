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

const USITT2022 = () => (
  <Layout>
    <SEO title="USITT 2022 - Baltimore" />
    <ProjectContent>
      <ProjectContentTitle>USITT 2022 - Baltimore</ProjectContentTitle>
      <ProjectSubtitle>The History and Theory of Spatial Sound</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/usitt2022/SpatialSoundGroup.JPG" />
            <p className="legend">Spatial Sound Presenters</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/brad-techtable.jpg" />
            <p className="legend">Brad at Tech Tech Table</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/frontshot.jpg" />
            <p className="legend">The Meyer Rig</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/speakers-sideshot.jpg" />
            <p className="legend">Side Shot</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/Racks.JPG" />
            <p className="legend">Rack Room</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/Mic4022.jpg" />
            <p className="legend">Floor Mic in the Sand</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/ff.jpg" />
            <p className="legend">Front Fills</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/flamingo.jpg" />
            <p className="legend">Upstage Speakers with the Flamingos!</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/TechBW3.jpg" />
            <p className="legend">Brad at the Tech Table</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          USITT 2022 Conference featured a presentation on Spatial Sound led by
          Brad Ward with participants Christopher Baine, Richard Bugg, Ianina
          Canalis, Duncan Crundwell, and Ralf Zuleeg. We quickly determined that
          we had much to much information to present in the time alloted, so we
          decided to cover the history and theory of spatial sound in this
          session. USITT 2023 in St. Louis, will have a special focus on spatial
          sound and will pick up where we left off with more informational
          sessions and live demos. In this session, Brad gathered these heavy
          hitters in the field to cover this extremely pertinent topic.
          <br />
          <a
            href="https://www.dropbox.com/s/cyudb461jjk2mj4/Immersive%20Sound%20History%20USSIT%202022.pdf?dl=0"
            target="_blank"
          >
            <ViewProjectButton>Session Slides and Notes</ViewProjectButton>
          </a>
          <a
            href="https://eurobrad.s3.us-east-2.amazonaws.com/articles/rosetattoo/RoseTattoo_TiMax_LSA.pdf"
            target="_blank"
          >
            <ViewProjectButton>Article</ViewProjectButton>
          </a>
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default USITT2022