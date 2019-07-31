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

const OlympicsLondon2012 = () => (
  <Layout>
    <SEO title="2012 OLYMPICS – LONDON" />
    <ProjectContent>
      <ProjectContentTitle>2012 OLYMPICS – LONDON</ProjectContentTitle>
      <ProjectSubtitle>Sound Project Manager</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/olympic-rings.jpg" />
            <p className="legend">Olympic Rings</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/olympics-excel.jpg" />
            <p className="legend">Olympics Excel</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/olympics-house-of-switzerland.jpg" />
            <p className="legend">Olympics House of Switzerland</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Sound Project Manager and Sound Tech for various events surrounding
          the 2012 Olympic Games in London for Blitz Communications.
        </p>
        <ul>
          <h3 style={{ marginTop: `16px`, textAlign: `center` }}>
            Projects included:
          </h3>
          <li>
            Training events hosted by London Organising Committee of the Olympic
            and Paralympic Games at the Excel Center
          </li>
          <li>
            Kickoff event at the Gherkin for the Olympic Committee starting the
            500 day countdown timer in Trafalger Square and on the BT Tower
          </li>
          <li>House of Switzerland at the Olympics</li>
        </ul>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default OlympicsLondon2012
