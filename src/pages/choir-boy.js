import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectContent__Title = styled.h1``

const ProjectSubtitle = styled.p`
  color: #777;
`

const ProjectMedia = styled.div`
  width: 49%;
  margin-right: 2%;
`

const ProjectDescription = styled.section`
  display: inline-block;
  width: 49%;
  vertical-align: top;
  text-align: left;
  @media (max-width: 480px) {
    width: 100%;
  }
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  margin-bottom: 1.45rem;
  border: none;
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
    ${ProjectMedia} {
      width: 100%;
    }
    ${ProjectDescription} {
      margin-top: 0;
    }
  }
`

const ChoirBoy = () => (
  <Layout>
    <SEO title="Choir Boy" />
    <ProjectContent>
      <ProjectContent__Title>Choir Boy</ProjectContent__Title>
      <ProjectSubtitle>
        Associate Sound Designer, Friedman Theatre, Broadway - 2019
      </ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/images/ChoirBoy%20Nominations.jpg" />
        <a href="https://choirboybroadway.com/" rel="noopener" target="_blank">
          <ViewProjectButton>Show's Website</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Associate Sound Designer with Sun Hee Kil for the Broadway premire of
          CHOIR BOY by Tarell Alvin McCraney, Directed by Trip Cullman, Sound
          Design by Fitz Patton for Manhattan Theatre Club at the Friedman
          Theatre. Manhattan Theatre Club.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default ChoirBoy
