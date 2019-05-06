import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { BWAudioDesign } from '../components/images/image-bradward_audio-design'
import { CtsdCertified } from '../components/images/image-ctsd'
import { BWEducation } from '../components/images/image-bradward-education'

const ContentSection = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0;
  padding: 10px;
  vertical-align: top;
  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const PortfolioImage = styled.img`
  display: inline-block;
  margin: 0 0 -7px 0;
  width: 100%;
  border-radius: 8px 8px 0 0;
`

const PortfolioDescriptionTitle = styled.h4`
  margin: 0;
  padding-top: 6px;
  color: white;
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
`

const PortfolioDescriptionText = styled.p`
  margin: 0;
  color: #777;
  font-size: 12px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
  @media (max-width: 375px) {
    font-size: 8px;
  }
`

const PortfolioDescription = styled.div`
  background-color: #282727;
  border-radius: 0 0 8px 8px;
  width: 100%;
`

const PortfolioPiece = styled.div`
  display: inline-block;
  margin: 3px;
  @media (min-width: 1000px) {
    width: 32%;
  }
  @media (max-width: 999px) {
    width: 48%;
  }
`

const Portfolio = styled.section`
  text-align: center;
  h2 {
    color: grey;
  }
`

const PortfolioCategories = styled.div`
  color: grey;

  /* Add this attribute to the element that needs a tooltip */
  [data-tooltip] {
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  /* Hide the tooltip content by default */
  [data-tooltip]:before,
  [data-tooltip]:after {
    visibility: hidden;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    pointer-events: none;
  }

  /* Position tooltip above the element */
  [data-tooltip]:before {
    position: absolute;
    bottom: 90%;
    left: 50%;
    margin-bottom: 5px;
    margin-left: -40px;
    padding: 7px;
    width: 80px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #000;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
  }

  /* Triangle hack to make tooltip look like a speech bubble */
  [data-tooltip]:after {
    position: absolute;
    bottom: 90%;
    left: 50%;
    margin-left: -5px;
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0, 0%, 20%, 0.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: ' ';
    font-size: 0;
    line-height: 0;
  }

  /* Show tooltip content on hover */
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    visibility: visible;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
  }

  p {
    display: inline-block;
    padding: 8px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `brad ward`,
        `sound design`,
        `sound composition`,
        `composition for theatre`,
        `av`,
        `audio visual`,
        `theatrical systems designer`,
        `audio engineering`,
      ]}
    />
    <h1
      style={{ marginBottom: `1.45rem`, textAlign: 'center', padding: `8px` }}
    >
      Sound Design and Composition for Theatre
    </h1>
    <main>
      <section>
        <ContentSection>
          <BWAudioDesign />
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>
            Sound Design and Composition
          </h3>
          <p>
            Brad is an award winning Sound Designer and Composer. Brad is also
            available for Projection/Media Design. He has also worked as a
            Project Manager for events worldwide. Brad also creates amazing
            custom Sound Effects and Soundscapes and is an expert in Show
            Control.
          </p>
        </ContentSection>
        <ContentSection>
          <CtsdCertified />
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>
            AV and Theatrical Systems Designer
          </h3>
          <p>
            Brad is a NYC based CTS-D Certified design consultant working as
            Senior AV/Theatrical Systems Designer at DLR Group | Westlake Reed
            Leskosky. Brad can objectively design and engineer a system right
            for your application. Please contact Brad to discuss your next
            project.
          </p>
        </ContentSection>
        <ContentSection>
          <BWEducation />
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>
            Education
          </h3>
          <p>
            Brad has provided successful workshops, classes, training, lectures,
            and demonstrations throughout the world. Brad is known for his clear
            communication at the level he is teaching which has ranged from
            primary and graduate students to industry professionals. Let Brad
            design a learning experience for you.
          </p>
        </ContentSection>
      </section>
      <Portfolio>
        <h2>Portfolio</h2>
        {/* <PortfolioCategories>
          <p data-tooltip="12">All</p>/<p data-tooltip="8">Theatre</p>/
          <p data-tooltip="2">Education</p>/
          <p data-tooltip="2">International</p>/<p data-tooltip="1">AV</p>/
          <p data-tooltip="4">System Design</p>/<p data-tooltip="2">Museum</p>/
          <p data-tooltip="4">Events</p>/<p data-tooltip="3">Award</p>/
          <p data-tooltip="0">Projection Mapping</p>
        </PortfolioCategories> */}
        <Link to="/the-brooklyn-gaze">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/04/BKLYN-Gaze-Grid.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                The Brooklyn Gaze
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Brooklyn Public Library - 2017
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/time-stands-still">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/04/Time-Stands-Still-4.jpg'
              }
              style={{
                borderTop: `5px solid black`,
                borderLeft: `3px solid black`,
                borderRight: `3px solid black`,
              }}
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Time Stands Still
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Bristol Riverside Theatre - 2018
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/an-enemy-of-the-people">
        <PortfolioPiece>
          <PortfolioImage
            src={
              'http://bradward.net/wordpress/wp-content/uploads/2018/02/EnemyTitle-copy.jpg'
            }
          />
          <PortfolioDescription>
            <PortfolioDescriptionTitle>
              An Enemy of the People
            </PortfolioDescriptionTitle>
            <PortfolioDescriptionText>
              Bristol Riverside Theatre
            </PortfolioDescriptionText>
          </PortfolioDescription>
        </PortfolioPiece>
        </Link>
        <Link to="/numberTheStars">
        <PortfolioPiece>
          <PortfolioImage
            src={
              'http://bradward.net/wordpress/wp-content/uploads/2018/02/Image-2-Start-50-Seconds380x.png'
            }
          />
          <PortfolioDescription>
            <PortfolioDescriptionTitle>
              Number the Stars
            </PortfolioDescriptionTitle>
            <PortfolioDescriptionText>
              Nashville Children's Theatre
            </PortfolioDescriptionText>
          </PortfolioDescription>
        </PortfolioPiece>
        </Link>
        <Link to="/theBeatlesLove">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/LoveLogo5.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                The Beatles LOVE
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Cirque du Soleil - 2006-2008
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/2012OlympicsLondon">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/olympic-rings.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                2012 OLYMPICS – LONDON
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Sound Project Manager
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/theBrooklynGaze">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/8big.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Transformation &amp; Revelation
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                UK Design for Performance - 2011
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/introToProductionDesign">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/Belmont-PJ_new.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Intro to Production Design
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Assistant Professor, Belmont University
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/lesMisérables">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/Les-Miserables.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Les Misérables
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Belmont University - 2013
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/prideAndPrejudice">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/Pride-Prejudice5.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Pride and Prejudice
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Bristol Riverside Theatre - 2013
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/barnesFoundation">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/Barnes2.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Barnes Foundation
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Audiovisual System Design
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
        <Link to="/theMethuselahTree">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'http://bradward.net/wordpress/wp-content/uploads/2018/02/Methusalah-Tree30Ed-copy.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                The Methuselah Tree
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Cockroach Theatre - 2007
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>
      </Portfolio>
    </main>
  </Layout>
)

export default IndexPage
