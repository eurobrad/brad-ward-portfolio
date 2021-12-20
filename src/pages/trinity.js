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
const ProjectAudio = styled.audio``

const ProjectMedia = styled.div`
  display: inline-block;
  width: 49%;
  margin-right: 2%;
  a {
    display: block;
  }
`
const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <Articles>
      <PageTitle>Trinity Lutheran Church of Manhattan Choir</PageTitle>

      <p>Christmas 2021</p>
      <ProjectMedia>
        <figure>
          <figcaption>Away In A Manger:</figcaption>
          <audio
            controls
            src="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/Agnes.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <figure>
          <figcaption>Listen to this Audio Sample:</figcaption>
          <audio
            controls
            src="https://raw.githubusercontent.com/eurobrad/brad-ward-portfolio/master/src/audio/02juliesdream.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        {/* <a href="https://choirboybroadway.com/" rel="noopener" target="_blank">
          <ViewProjectButton>Project's Website</ViewProjectButton>
        </a> */}
      </ProjectMedia>
      <p>
        <a
          href="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/Away%20In%20A%20Manger.aiff"
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
    </Articles>
  </Layout>
)

export default ArticlesPage
