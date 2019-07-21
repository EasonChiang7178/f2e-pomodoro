import React from "react"
import PropTypes from "prop-types"
import { Normalize } from 'styled-normalize'

import { TodoContextProvider } from "../contexts/TodoContext"
import { TimerContextProvider } from "../contexts/TimerContext"

import PageContainer from '../components/PageContainer'
import Background from '../components/Background'

const Layout = ({ children }) => {
  return (
    <>
      <Normalize />

      <TimerContextProvider>
        <TodoContextProvider>
          <Background />
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
