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

const RoseTattoo = () => (
  <Layout>
    <SEO title="The Rose Tattoo on Broadway" />
    <ProjectContent>
      <ProjectContentTitle>The Rose Tattoo on Broadway</ProjectContentTitle>
      <ProjectSubtitle>Associate Sound Designer</ProjectSubtitle>
      <ProjectMedia>
        <Carousel autoPlay>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/Queen.jpg" />
            <p className="legend">Queen Elizabeth and Prince Philip</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/RedCarpet.jpg" />
            <p className="legend">
              Fitz Patton, Designer with Associates Sunny Kil & Brad Ward
            </p>
          </div>
          <div>
            <img src="https://uploads.codesandbox.io/uploads/user/e0111d8f-2afd-4ac0-8a49-bbfc20ba5eb3/Wjcb-+Brad+at+RT+Tech+Table.jpg" />
            <p className="legend">Brad at Tech Tech Table</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/frontshot.JPG" />
            <p className="legend">The Rig</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/speakers-sideshot.jpg" />
            <p className="legend">Side Shot</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/Racks.jpg" />
            <p className="legend">Rack Room</p>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/rosetattoo2019/Mic4022.jpg" />
            <p className="legend">Floor Mic</p>
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
          Once again working wtih designer Fitz Patton and Associate Sunny Kil,
          I was fortunate to be a part of the design team for this excellent
          performance at the American Airlines Theatre. Directed by Trip Cullman
          and staring Marisa Tomei. This wasn my first experience with TiMax
          which proved to make the sound natural. I don't know how we would have
          achieved this given the challenges of the cast's movement through the
          space.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default RoseTattoo
