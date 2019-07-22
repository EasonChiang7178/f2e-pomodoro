import React from "react"
import styled from "styled-components"

import TaskInput from "../components/TaskInput"
import TaskTabs from "../components/TaskTabs"
import SEO from "../components/seo"

const TaskContainer = styled.div`
  padding-top: 104px;
  width: 536px;
  height: 100vh;
  min-height: 664px;
`

const StyledTaskInput = styled(TaskInput)`
  margin-bottom: 64px;
`

const TaskPage = () => (
  <>
    <SEO title="清淡蕃茄鐘 - 代辦事項" />
    <TaskContainer>
      <StyledTaskInput />
      <TaskTabs />
    </TaskContainer>
  </>
)

export default TaskPage
