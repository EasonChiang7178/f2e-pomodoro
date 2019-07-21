import React from "react"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import TodoTaskList from "../components/TodoTaskList"
import FinishedTaskList from "../components/FinishedTaskList"

const StyledTabList = styled(TabList)`
  list-style-type: none;
  margin: 0;
  margin-bottom: 43px;
  padding: 0;
  display: flex;
  align-items: center;
`

const StyledTab = styled(Tab)`
  padding: 4px 6px;
  border-bottom: solid 1px transparent;
  color: white;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;

  &.react-tabs__tab--selected {
    border-bottom: solid 1px white;
  }

  & + & {
    margin-left: 16px;
  }

  &:focus {
    outline: none;
  }
`

export default () => (
  <Tabs>
    <StyledTabList>
      <StyledTab>待辦事項</StyledTab>
      <StyledTab>已完成事項</StyledTab>
    </StyledTabList>

    <TabPanel>
      <TodoTaskList />
    </TabPanel>
    <TabPanel>
      <FinishedTaskList />
    </TabPanel>
  </Tabs>
)
