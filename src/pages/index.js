import React from "react"
import { Link } from "gatsby"

import TodoConsumer from '../contexts/TodoContext'

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <TodoConsumer>
    {({ data }) => (
      <React.Fragment>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <h1>{String(data.menuOpen)}</h1>
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
