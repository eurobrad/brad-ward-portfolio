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

const ProjectVideo = styled.div`
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

const ViewProjectButton = styled.button`
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
    ${ProjectContent__Title} {
      font-size: 24px;
    }
    ${ProjectVideo} {
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
    <SEO title="The Beatles LOVE" />
    <ProjectContent>
      <ProjectContent__Title>The Beatles LOVE</ProjectContent__Title>
      <ProjectSubtitle>
        Cirque du Soleil, The Mirage, Apple Records - 2006-2008
      </ProjectSubtitle>
      <ProjectVideo>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-cast.jpg" />
            <p className="legend">LOVE Cast</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-drive-my-car.jpg" />
            <p className="legend">LOVE Drive My Car</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-sgt-pepper.jpg" />
            <p className="legend">LOVE SGT Pepper</p>
          </div>
        </Carousel>
      </ProjectVideo>
      <ProjectDescription>
        <h4>Award: Two time Grammy award winner</h4>
        <p>Design Statement by Bradlee Ward, Sound Designer:</p>
        <p>
          Primary function was maintaining one of the largest and most complex
          audio systems in the world. Front of house mixing, RF, in­ears,
          monitor mix, and rove show tracks. Maintained a 37 channel CCTV system
          for monitoring and life safety. Privileged to work with George Martin
          during the show’s creation period.
        </p>
      </ProjectDescription>
      <a
        href="https://www.dropbox.com/s/hfr0x5uabkt95qj/JohnHuntingtonL%26SA.pdf?dl=0"
        rel="noopener"
        target="_blank"
      >
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
      <a href="https://www.cirquedusoleil.com/beatles­-love">
        <ViewProjectButton>Show's Website</ViewProjectButton>
      </a>
    </ProjectContent>
  </Layout>
)

export default TheBeatlesLOVE
