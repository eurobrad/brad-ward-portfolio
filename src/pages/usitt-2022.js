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
    <SEO title="The History and Theory of Spatial Sound" />
    <ProjectContent>
      <ProjectContentTitle>USITT 2022 - Baltimore</ProjectContentTitle>
      <ProjectSubtitle>USITT 2022 - Baltimore</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/usitt2022/SpatialSoundGroup.JPG" />
            <p className="legend">Spatial Sound Presenters</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          USITT 2022 Conference featured a presentation on Spatial Sound led by
          longtime USITT member and Vice Commissioner for Sound, Brad Ward with
          participants Christopher Baine, Richard Bugg, Ianina Canalis, Duncan
          Crundwell, and Ralf Zuleeg.
          <br />
          The group quickly determined there was far too much to much
          information to present in the time alloted, so they decided to cover
          the history and theory of spatial sound in this session.
          <br />
          In this session, Brad gathered these heavy hitters in the field to
          cover this extremely pertinent topic which has been around since close
          to the beginning of time.
          <br />
          USITT 2023 in St. Louis, will have a special focus on spatial sound
          and will pick up this session left off with more informational
          sessions and live demos. In the meantime, reach out to Brad or any of
          these experts in spatial sound for help with your projects.
          <br />
          <a
            href="https://www.dropbox.com/s/cyudb461jjk2mj4/Immersive%20Sound%20History%20USSIT%202022.pdf?dl=0"
            target="_blank"
          >
            <ViewProjectButton>Session Slides and Notes</ViewProjectButton>
          </a>
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default USITT2022
