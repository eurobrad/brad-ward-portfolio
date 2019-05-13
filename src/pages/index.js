import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { BWEducation } from '../components/images/image-bradward-education'
import { BWAudioDesign } from '../components/images/image-bradward_audio-design'
import { CtsdCertified } from '../components/images/image-ctsd'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
        `audiovisual`,
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
            Brad is an award winning Sound Designer and Broadway Associate. He
            has also worked as a Project Manager for events worldwide. Brad also
            creates amazing custom Sound Effects and Soundscapes and is an
            expert in Show Control and Spatial Sound.
          </p>
        </ContentSection>
        <ContentSection>
          <CtsdCertified />
          <h3 style={{ marginTop: `1.45rem`, textAlign: `center` }}>
            AV and Theatrical Systems Designer
          </h3>
          <p>
            Brad is a NYC based CTS-D Certified design consultant working as
            Senior AV/Theatrical Systems Designer at DLR Group Brad can
            objectively design and engineer a system right for your application.
            Please contact Brad to discuss your next project.
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
        <Link to="/choir-boy">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/CHOIR_BOY_NOM.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>Choir Boy</PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Friedman Theatre, Broadway 2019
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>

        <PortfolioPiece>
          <PortfolioImage
            src={
              'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Bernhardt%20Tile.jpg'
            }
          />
          <PortfolioDescription>
            <PortfolioDescriptionTitle>
              Bernhardt Hamlet
            </PortfolioDescriptionTitle>
            <PortfolioDescriptionText>
              American Airlines Theatre, Broadway - 2019
            </PortfolioDescriptionText>
          </PortfolioDescription>
        </PortfolioPiece>

        <Link to="/the-brooklyn-gaze">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/brooklyn-gaze.jpg'
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

        <PortfolioPiece>
          <PortfolioImage
            src={
              'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/FAUST.jpg'
            }
          />
          <PortfolioDescription>
            <PortfolioDescriptionTitle>Faust 2.0</PortfolioDescriptionTitle>
            <PortfolioDescriptionText>
              Mabou Mines, NYC - 2019
            </PortfolioDescriptionText>
          </PortfolioDescription>
        </PortfolioPiece>

        <PortfolioPiece>
          <PortfolioImage
            src={
              'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Mother%20Tile.jpg'
            }
          />
          <PortfolioDescription>
            <PortfolioDescriptionTitle>The Mother</PortfolioDescriptionTitle>
            <PortfolioDescriptionText>
              Atlantic Theatre Company, NYC - 2019
            </PortfolioDescriptionText>
          </PortfolioDescription>
        </PortfolioPiece>

        <PortfolioPiece>
          <PortfolioImage
            src={
              'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Lewiston+Clarkston+FacebookCover.jpg'            }
          />
          <PortfolioDescription>
            <PortfolioDescriptionTitle>
              Lewiston/Clarkston
            </PortfolioDescriptionTitle>
            <PortfolioDescriptionText>
              Rattlestick Playwrights Theater, NYC 2018
            </PortfolioDescriptionText>
          </PortfolioDescription>
        </PortfolioPiece>

        <Link to="/the-beatles-love">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/the-beatles-love.jpg'
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

        <Link to="/olympics-london-2012">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/olympic-rings.jpg'
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

        <Link to="/diamond-jubilee">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/DiamondJubilee/jubilee-flag-queen.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                Queen Elizabeth's Diamond Jubilee Celebration
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Sound Designer/Project Manager
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>

        <Link to="/time-stands-still">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/time-stands-still.jpg'
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
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/an-enemy-of-the-people.jpg'
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
        <Link to="/number-the-stars">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/number-the-stars.jpg'
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

        <Link to="/transformation-and-revelation">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/transformation-and-revelation.jpg'
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
        <Link to="/intro-to-production-design">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/belmont-pj.jpg'
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
        <Link to="/les-miserables">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/les-miserables.jpg'
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

        <Link to="/jammer">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/JammerTile.jpg'
              }
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>The Jammer</PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Edinburgh Fringe Festival -2004
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>

        <Link to="/pride-and-prejudice">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/pride-prejudice-project-cover.jpg'
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
        <Link to="/barnes-foundation">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/barnes-building-matrix-cover.jpg'
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

        <Link to="/utmeg">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/Nutmeg%20tile.jpg'}
            />
            <PortfolioDescription>
              <PortfolioDescriptionTitle>
                A Splash of Nutmeg in Milk
              </PortfolioDescriptionTitle>
              <PortfolioDescriptionText>
                Yale School of Drama 2004
              </PortfolioDescriptionText>
            </PortfolioDescription>
          </PortfolioPiece>
        </Link>


        <Link to="/the-methuselah-tree">
          <PortfolioPiece>
            <PortfolioImage
              src={
                'https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/methuselah-tree.jpg'
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
