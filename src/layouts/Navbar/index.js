import React from "react"
import styled from "styled-components"
import { globalHistory } from "@reach/router"

import TimerContextConsumer from "../../contexts/TimerContext"
import NavItem from "./NavItem"

import TimerIcon from '../../components/icons/TimerIcon'
import TaskIcon from '../../components/icons/TaskIcon'
// import SettingIcon from '../../components/icons/SettingsIcon'

const StyledNavItem = styled(NavItem)``

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 32px;
  right: 60px;

  ${StyledNavItem} {
    ${props => props.disabled && {
      opacity: .6,
      cursor: "not-allowed",
    }}

    a {
      ${props => props.disabled && {
        pointerEvents: "none"
      }}
    }
  }
`

const NavItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Navbar = ({ disabled }) => {
  const timerPath = '/'
  const taskPath = '/task'
  // const settingPath = '/settings'

  const curPath = globalHistory.location.pathname
  const curPathLastRoute = curPath.slice(curPath.lastIndexOf("/"))

  const getActiveClassIfMatchPath = targetPath => curPathLastRoute === targetPath && { className: "active" }
  const timerIcon = <TimerIcon {...(getActiveClassIfMatchPath(timerPath))} />
  const todoIcon = <TaskIcon {...(getActiveClassIfMatchPath(taskPath))} />
  // const settingsIcon = <SettingIcon {...(getActiveClassIfMatchPath(settingPath))} />

  return (
    <NavbarWrapper disabled={disabled}>
      <NavItemList>
        <StyledNavItem to={timerPath} iconComponent={timerIcon}>
          Timer
        </StyledNavItem>
        <StyledNavItem to={taskPath} iconComponent={todoIcon}>
          Task
        </StyledNavItem>
        {/* <StyledNavItem to={settingPath} iconComponent={settingsIcon}>
          Settings
        </StyledNavItem> */}
      </NavItemList>
    </NavbarWrapper>
  )
}

export default () => (
  <TimerContextConsumer>
    {({ status }) => (
      <Navbar disabled={status !== "none"} />
    )}
  </TimerContextConsumer>
)
