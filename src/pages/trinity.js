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
            src="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/tlc_christmas2021/Away%20In%20A%20Manger.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <figure>
          <figcaption>Lo, How A Rose E'er Blooming:</figcaption>
          <audio
            controls
            src="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/tlc_christmas2021/Lo%20How%20A%20Rose%20Eer%20Blooming.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <figure>
          <figcaption>See Amid The Winter's Snow:</figcaption>
          <audio
            controls
            src="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/tlc_christmas2021/See%20Amid%20The%20Winters%20Snow.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <figure>
          <figcaption>While By My Sheep:</figcaption>
          <audio
            controls
            src="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/tlc_christmas2021/While%20By%20My%20Sheep.mp3"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <figure>
          <figcaption>Violin Piece:</figcaption>
          <audio
            controls
            src="https://eurobrad.s3.us-east-2.amazonaws.com/trinity_content/tlc_christmas2021/Violin%20Piece.mp3"
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

    </Articles>
  </Layout>
)

export default ArticlesPage
