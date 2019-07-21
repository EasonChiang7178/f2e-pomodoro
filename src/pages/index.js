import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import TodoConsumer from '../contexts/TodoContext'

import Image from "../components/image"
import SEO from "../components/seo"

const Hello = styled.div`
  margin: 3rem auto;
  background: black;
  color: white;
`

const IndexPage = () => (
  <TodoConsumer>
    {({ data }) => (
      <React.Fragment>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <Hello>{String(data.menuOpen)}</Hello>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </React.Fragment>
    )}
  </TodoConsumer>
)

export default IndexPage
