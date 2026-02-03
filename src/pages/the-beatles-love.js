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
    <SEO title="The Beatles LOVE" />
    <ProjectContent>
      <ProjectContentTitle>The Beatles LOVE</ProjectContentTitle>
      <ProjectSubtitle>
        by Cirque du Soleil at The Mirage - 2006-2024
      </ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/love-cast.jpg" />
            <p className="legend">LOVE Cast</p>
          </div>
          <div>
            <img src="src/images/Love-Crew2006ChristmasEdit.png" />
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
        <a
          href="https://www.dropbox.com/s/hfr0x5uabkt95qj/JohnHuntingtonL%26SA.pdf"
          rel="noopener"
          target="_blank"
        >
          <ViewProjectButton>L+SA Article</ViewProjectButton>
        </a>
        <a
          href="https://www.cirquedusoleil.com/beatles­-love"
          rel="noopener"
          target="_blank"
        >
          <ViewProjectButton>Show's Website</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <h4>Award: Two time Grammy award winner</h4>
        <p>
          The Beatles LOVE was heard by 11.8 million people during the 18 year
          run. From 2006-2008, Brad was the Lead Audio System Tech for this
          legendary production where he had the privilege of sitting by Sir
          George Martin, the musical director on what was his last project
          before retiring, his son Giles, and Sound Designer Jonathan Deans. The
          show used original Beatles recordings that Sir George owned.
          <br /> <br /> Brad and the 8-member audio team made sure the sound
          system performed as it should for every show, and during Brad's time
          as system tech, no performances were canceled or delayed due to audio
          problems. This meant a daily system check of all 6,432 loudspeakers,
          the playback and processing system, microphones, the intercom/paging
          system, and the audio and video monitor system to be sure they were
          functioning properly and being ready to quickly correct any problem
          that came up.
          <br /> <br /> Through this period, Cirque du Soleil was know for
          pushing the limits in everything they did, and this was no exception.
          System designed by Jonathan Deans, the consultant was Paul Garrity,
          and the installation was done by Solotech. It was
          Aligned/calibrated/tuned by Bob McCarthy. The bulk of the system was a
          Meyer/LCS system. For a full full equipment list and description,
          please read the excellent article by John Huntington linked below.{' '}
          <br /> <br /> "And in the end, the love you take is equal to the love
          you make" The Beatles 1969
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default TheBeatlesLOVE
