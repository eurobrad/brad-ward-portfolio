import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageTitle = styled.h1`
  padding: 10px;
  text-align: center;
  @media (min-width: 450px) {
    margin: 24px 0;
  }
`

const Articles = styled.div`
  padding: 0 8px;
`

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <Articles>
      <PageTitle>Articles & Resources</PageTitle>
      
      <p>
        2020</p>
        <p>
        TSDCA 2020 Panel: Exploring the Relationship Between Sound Designers,
        Acousticians, AV Consultants, and Installers
      </p>
      <p>
        <a
          href="https://tsdca.org/videos/2020-annual-meeting-exploring-the-relationship-between-sound-designers-acousticians-av-consultants-and-installers/"
          rel="noopener"
          target="_blank"
        >
          TSDCA Session Video
        </a>
      </p>
            <p>
        <a
          href="https://eurobrad.s3.us-east-2.amazonaws.com/articles/TSDCA%202020/TSDCA_Takeaway_24June2020.pdf"
          rel="noopener"
          target="_blank"
        >
          TSDCA Session Takeaway
        </a>
      </p>
      <p>2019</p>
      <p>
        <a
          href="https://uploads.codesandbox.io/uploads/user/e0111d8f-2afd-4ac0-8a49-bbfc20ba5eb3/cDJf-Rose+Tattoo+-+TiMax+-+L&S+America.pdf"
          rel="noopener"
          target="_blank"
        >
          Rose Tattoo TiMax Article - 2019
        </a>
      </p>

      <p>
        2018</p>

<p>
        Lighting & Sound America Article - Storming Elsinore - Design of Bernhardt Hamlet on Broadway 2018
      </p>
      <p>
        <a
          href="https://eurobrad.s3.us-east-2.amazonaws.com/bernhardthamlet%202018/BernhardtHamlet%20L%26SA%20Article.pdf"
          rel="noopener"
          target="_blank"
        >
          Storming Elsinore
        </a>
      </p>


        <p>
        USITT 2018 Creative Teaching Panel: Brad Presented one his Belmont University Intro to Sound Reinforcement Lab Project, and this project is now part of USITT's archive of creative teaching examples.
      </p>
      <p>
        <a
          href="http://teachingarchive.usitt.org/sound/2018/03/13/curb-cafe/"
          rel="noopener"
          target="_blank"
        >
          Curb Cafe Project
        </a>
      </p>
      <p>
        2016</p>

<p>
        Stage Directions Article - The Art of the Install - Brad featured in article by Bryan Reesman 2016
      </p>
      <p>
        <a
          href="https://eurobrad.s3.us-east-2.amazonaws.com/articles/Stage%20Directions%20Art%20of%20the%20Installation.pdf"
          rel="noopener"
          target="_blank"
        >
          Art of the Install
        </a>
      </p>

    </Articles>
  </Layout>
)

export default ArticlesPage
