import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import COLORS from "../../constants/theme"

const NavItem = styled.li`
  & + & {
    margin-left: 32px;
  }
`

const NavLink = styled(Link).attrs(() => ({
  activeStyle: { color: COLORS.PRIMARY_COLOR }
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  color: ${COLORS.LIGHT_COLOR};
  font-weight: 600;
  transition: color .15s ease;

  &:hover {
    color: ${COLORS.PRIMARY_COLOR}
  }

  svg {
    margin-bottom: 8px;
  }
`

export default ({ className, to, children, iconComponent }) => (
  <NavItem className={className}>
    <NavLink to={to}>
      {iconComponent}
      {children}
    </NavLink>
  </NavItem>
)
