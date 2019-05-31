import React from 'react'
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
  background-color: rebeccapurple;
  color: white;
  margin: 16px;
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
    ${ProjectContentTitle} {
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

const BarnesFoundation = () => (
  <Layout>
    <SEO title="Barnes Foundation" />
    <ProjectContent>
      <ProjectContentTitle>Barnes Foundation</ProjectContentTitle>
      <ProjectSubtitle>
        Architects Tod Williams &amp; Billie Tsien - 2012
      </ProjectSubtitle>
      <ProjectMedia>
        <img src="https://raw.githubusercontent.com/tysonwilliams/brad-ward-portfolio/master/src/images/barnes-building.jpg" />
        <a href="http://twbta.com/work/barnes-foundation">
          <ViewProjectButton>View Project</ViewProjectButton>
        </a>
        <a href="http://www.barnesfoundation.org/">
          <ViewProjectButton>Museum Website</ViewProjectButton>
        </a>
      </ProjectMedia>
      <ProjectDescription>
        <p>
          Sound and Audiovisual System Design for this new building for The
          Barnes Foundation, a non-profit arts education establishment/Museum.
          Originally located in Merion, PA, the museum moved into a new
          facility, designed by Tod Williams Billie Tsien Architects. In
          addition to the galleries, the new building includes classrooms,
          seminar rooms, an auditorium, and a 7,500-sf atrium to be used for
          various public and private events.
        </p>
        <p>
          While working at Acoustic Dimensions I was the AV Designer for this
          project which included distance learning, archival audio and video
          recording, broadcast integration, and sound reinforcement. I took this
          project through the Programming, Schematic Design, and Initial Design
          Development phases and included complete drawing sets and written
          specs. The project was completed in 2012 after I left AD.
        </p>
      </ProjectDescription>
    </ProjectContent>
  </Layout>
)

export default BarnesFoundation
