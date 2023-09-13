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
          <p>2022</p>
 <p>USITT 2022 Spatial Sound for Theatre & Live Events - Part 1 - History, Theory, & Resources</p>
      <p>
        <a
          href="https://www.dropbox.com/s/cyudb461jjk2mj4/Immersive%20Sound%20History%20USSIT%202022.pdf?dl=0"
          rel="noopener"
          target="_blank"
        >
          Session PDF
        </a>
      </p>
      <p>2020</p>

      <p>USITT Forum at Four Webinar: What is a Sound Associate?</p>
      <p>
        <a
          href="https://www.youtube.com/watch?v=AYlZ9r2sVts"
          rel="noopener"
          target="_blank"
        >
          Session Video
        </a>
      </p>

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
      <p>
        RCF Press Release on Brad's Design for Bedlam Theatre's KING LEAR
        directed by Eric Tucker at Bristol Riverside Theatre 2020
      </p>
      <p>
        <a
          href="https://eurobrad.s3.us-east-2.amazonaws.com/articles/RCF%20King%20Lear%202020.pdf"
          rel="noopener"
          target="_blank"
        >
          Lear Press Release - 2020
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
        <a
          href="https://t.e2ma.net/webview/w0kakd/b7c28c8c2a184c9ad29ccf90f8da1f05"
          rel="noopener"
          target="_blank"
        >
          Brad Joins Auerbach Pollock Friedlander - 2019
        </a>
      </p>

      <p>2018</p>

      <p>
        Lighting & Sound America Article - Storming Elsinore - Design of
        Bernhardt Hamlet on Broadway 2018
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
 <p>USITT 2018 Health and Safety Panel: How Loud is Too Loud?</p>
      <p>
        <a
          href="https://www.dropbox.com/s/zbd2jhjf76mp6d4/USITT2018%20How%20Loud%20is%20Too%20Loud.pdf?dl=0"
          rel="noopener"
          target="_blank"
        >
          Session Notes
        </a>
      </p>
      <p>
        USITT 2018 Creative Teaching Panel: Brad Presented one his Belmont
        University Intro to Sound Reinforcement Lab Project, and this project is
        now part of USITT's archive of creative teaching examples.
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
      <p>2016</p>

      <p>
        Stage Directions Article - The Art of the Install - Brad featured in
        article by Bryan Reesman 2016
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
      <p>2013</p>
      <p>
        <a href="https://vimeo.com/62640663" rel="noopener" target="_blank">
          USITT Guerrilla Sound Challenge
        </a>
      </p>
    </Articles>
  </Layout>
)

export default ArticlesPage
