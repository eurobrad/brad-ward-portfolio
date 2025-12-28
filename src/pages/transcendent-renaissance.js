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

const TR = () => (
  <Layout>
    <SEO title="Transcendent Renaissance" />
    <ProjectContent>
      <ProjectContentTitle>
        Transcendent Renaissance at OISTAT's World Stage Design, Sharjah, UAE
        2025
      </ProjectContentTitle>
      <ProjectSubtitle>Sound Designer</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/TR/TR ChamberTitle.png" />
            <p className="legend">Burial Chamber</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/TR/tR SoundVision.png" />
            <p className="legend">SoundVision Screen</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/TR/TR L-Isa.png" />
            <p className="legend">L-Isa Screen</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/TR/TR Control.png" />
            <p className="legend">External Control</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Once again working wtih designer Fitz Patton and Associate Sunny Kil,
          Brad was fortunate to be a part of the design team for this excellent
          performance at the American Airlines Theatre directed by Trip Cullman
          and staring Marisa Tomei. This was Brad's first experience with TiMax
          which proved to make the sound natural. Brad said "I don't know how we
          would have achieved this given the challenges of the cast's movement
          through the space."
          <br /> <br />
          The design was largely a Meyer PA with vocal reinforcement via
          Sennheiser and Lectrosonics wireless mics and DPA floor mics.
          <br /> <br />
          Ftiz Patton and Jason Michael Webb were nominated for the 2020 Tony
          Award for Best Original Score for Theatre for The Rose Tattoo.
          <br /> <br />
          Click below for a full equipment list an article discussing the
          process.
          <br />
          <a
            href="https://eurobrad.s3.us-east-2.amazonaws.com/articles/rosetattoo/Rose_Tattoo_on_Broadway_Audio_Equipment_List.pdf"
            target="_blank"
          >
            <ViewProjectButton>EQ List</ViewProjectButton>
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

export default TR
