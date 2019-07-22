import React from "react"
import styled from "styled-components"
import { globalHistory } from "@reach/router"

import NavItem from "./NavItem"

import TimerIcon from '../../components/icons/TimerIcon'
import TaskIcon from '../../components/icons/TaskIcon'
import SettingIcon from '../../components/icons/SettingsIcon'

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 32px;
  right: 60px;
`

const NavItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default () => {
  const timerPath = '/'
  const taskPath = '/task'
  const settingPath = '/settings'

  const curPath = globalHistory.location.pathname
  
  const getActiveClassIfMatchPath = (targetPath) => curPath === targetPath && { className: "active" }
  const timerIcon = <TimerIcon {...(getActiveClassIfMatchPath(timerPath))} />
  const todoIcon = <TaskIcon {...(getActiveClassIfMatchPath(taskPath))} />
  const settingsIcon = <SettingIcon {...(getActiveClassIfMatchPath(settingPath))} />

  return (
    <NavbarWrapper>
      <NavItemList>
        <NavItem to={timerPath} iconComponent={timerIcon}>
          Timer
        </NavItem>
        <NavItem to={taskPath} iconComponent={todoIcon}>
          Task
        </NavItem>
        {/* <NavItem to={settingPath} iconComponent={settingsIcon}>
          Settings
        </NavItem> */}
      </NavItemList>
    </NavbarWrapper>
  )
}
