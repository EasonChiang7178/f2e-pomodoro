import React from "react"
import PropTypes from "prop-types"

import { TaskContextProvider } from "../contexts/TaskContext"
import { TimerContextProvider } from "../contexts/TimerContext"

import GlobalStyles from './GlobalStyles'
import Background from './Background'
import Navbar from './Navbar'
import PageContainer from '../components/PageContainer'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />

      <TimerContextProvider>
        <TaskContextProvider>
          <Background />
          <Navbar />
          <PageContainer>
            {children}
          </PageContainer>
        </TaskContextProvider>
      </TimerContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
