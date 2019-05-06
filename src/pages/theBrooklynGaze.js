import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectContent__Title = styled.h1`
  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const ProjectSubtitle = styled.p`
  color: #777;
`

const ProjectDescription = styled.section`
  margin-top: 32px;
  text-align: left;
`

const ViewProjectButton = styled.button`
  background-color: rebeccapurple;
  color: white;
  border: none;
  padding: 8px 16px;
  box-shadow: 2px 2px 2px 2px #bd92e8;
  border-radius: 5px;
  cursor: pointer;
`

const ProjectContent = styled.div`
  text-align: center;
  padding: 8px;
`

const TheBrooklynGaze = () => (
  <Layout>
    <SEO title="The Brooklyn Gaze – Erasure &amp; Revelation/Lightpost" />
    <ProjectContent>
      <ProjectContent__Title>The Brooklyn Gaze – Erasure &amp; Revelation/Lightpost</ProjectContent__Title>
      <ProjectSubtitle>
        Brooklyn Public Library Grand Army Plaza - 2017
      </ProjectSubtitle>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={'https://player.vimeo.com/video/325853481?title=0&portrait=0'}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
      <ProjectDescription>
        <p>
          "Sound designers Brad Ward and Sun Hee Kil’s design for The Brooklyn
          Gaze has been selected to be exhibited at the Prague Quadrennial* as
          one of 51 designs selected to represent the ‘best of theatre design
          from the U.S. over the past four years’."
        </p>
        <p>
          The Brooklyn Gaze was a series of projection mapped artworks
          commissioned by the Brooklyn Public Library. The first, Erasure and
          Revelation, transformed the facade of the library into an immersive,
          animated canvas and the library plaza into an inspiring environment
          sparking critical community dialogue on the most pressing issues of
          our time. The second, Lightpost, once again transformed the iconic
          facade of the Library, and added audience­generated projections to the
          design. Both editions of The Brooklyn Gaze featured massive animated
          texts by thinkers such as James Baldwin, Hannah Arendt, Martin Luther
          King Jr., Black Elk, W.E.B. Du Bois, and Sojourner Truth, texts that
          were partially erased, leaving provocative questions in their wake.
          The work amplified and electrified the thoughts of these diverse and
          essential thinkers. Immersive animations, accompanied by a sound
          design by Sun Hee and Brad, spurred a community dialogue on the themes
          of Justice, Truth, Humanity, and Love. By sharing the enduring
          eloquence of these great writers in public, and revealing the urgent
          questions hidden within their most famous writings, Erasure and
          Revelation activated this archive of wisdom, and Lightpost provided an
          opportunity for the community to publicly respond.
        </p>
        <p>
          *Prague Quadrennial of Performance Design and Space (PQ), the largest
          performance design event in the world. The 14 th PQ will take place
          June 6-16, 2019, in Prague. The PQ is often described as the Olympics
          or world’s fair for performance designers. It brings together
          designers, directors, students, and general public, the PQ provides an
          unprecedented exchange of ideas that goes beyond the narrow confines
          of theatrical design and style.
        </p>
      </ProjectDescription>
      <a href="https://www.facebook.com/events/1404488956284735">
        <ViewProjectButton>View Project</ViewProjectButton>
      </a>
    </ProjectContent>
  </Layout>
)

export default TheBrooklynGaze
