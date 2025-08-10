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
    <SEO title="Haikou Shopping Complex - Immersive Experience, Hainan, China" />
    <ProjectContent>
      <ProjectContentTitle>
        Haikou Shopping Complex - Immersive Experience, Hainan, China
      </ProjectContentTitle>
      <ProjectSubtitle>Sound System Designer</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Weta/Ward_Aura_1.jpg" />
            <p className="legend">Aura</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Weta/Ward_Aura_2.jpg" />
            <p className="legend">Tree Deer</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Weta/Ward_Aura_3.jpg" />
            <p className="legend">Hummingbird</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Weta/Ward_Aura_4.jpg" />
            <p className="legend">Tree of Light</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Weta/Ward_Aura_5.jpg" />
            <p className="legend">Escalator</p>
          </div>
        </Carousel>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          As the Sound System Designer for Aura: The Forest at the Edge of the
          Sky, Apeiro Design’s Bradlee Ward worked closely with the producer,
          Weta Workshop to turn a five-story atrium into a multi-sensory,
          immersive experience for storytelling based on the ecology of Hainan,
          the Chinese island on which it resides. The project received numerous
          awards and has been well received by the public.{' '}
        </p>
        <p>
          Sustainability and naturality became important concepts as Bradlee met
          with the composer and creators to design a system to believably
          deliver a story of a magical orb taking two children on a fantastical
          journey. This originated at a 29M tall LED waterfall flanked by
          concealed L-Acoustics line-arrays and moved through the space to
          various elements where they encounter a mother tree deer and faun,
          hummingbirds, a moon bridge, magical trees, and the source of the
          land’s mystery, the Tree of Light.{' '}
        </p>
        <p>
          As visitors move through the space, they are followed by interactive
          lights and sounds, making them an active part of the evolving story.{' '}
        </p>
        <p>
          In addition to sound quality and interactivity, Bradlee notes that
          movement and localization/spatialization of each sound to its
          respective element within the space and time was a key to success. His
          design works in harmony with all other design elements, successfully
          allowing those entering the space to become an active part of the
          story being told and connecting them to the ecology of Hainan.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default DiamondJubilee
