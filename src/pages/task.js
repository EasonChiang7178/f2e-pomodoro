import React from "react"
import styled from "styled-components"

import TaskInput from "../components/TaskInput"
import SEO from "../components/seo"

const TaskContainer = styled.div`
  padding-top: 104px;
  width: 536px;
  height: 100vh;
  min-height: 664px;
`

const TaskPage = () => (
  <>
    <SEO title="平靜蕃茄鐘 - 代辦事項" />
    <TaskContainer>
      <TaskInput onCreateTaskButtonClick={(task) => console.warn(task)} />
    </TaskContainer>
  </>
)

export default TaskPage
