import React from "react"

import TaskConsumer from '../contexts/TaskContext'
import SEO from "../components/seo"

const IndexPage = () => (
  <TaskConsumer>
    {() => (
      <React.Fragment>
        <SEO title="平靜蕃茄鐘" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </React.Fragment>
    )}
  </TaskConsumer>
)

export default IndexPage
