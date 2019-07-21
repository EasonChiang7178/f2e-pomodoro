import React from "react"
import PropTypes from "prop-types"

import { TodoContextProvider } from "../contexts/TodoContext"
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
        <TodoContextProvider>
          <Background />
          <Navbar />
          <PageContainer>
            {children}
          </PageContainer>
        </TodoContextProvider>
      </TimerContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
