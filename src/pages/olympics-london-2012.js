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
      <ProjectContent__Title>2012 OLYMPICS – LONDON</ProjectContent__Title>
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
          <h4>Projects included:</h4>
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
