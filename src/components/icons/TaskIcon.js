import styled from "styled-components"

import TaskIcon from '../../images/icon_task.inline.svg'
import COLORS from '../../constants/theme'

export default styled(TaskIcon)`
  path {
    transition: fill .15s ease, stroke .15s ease;
  }

  a:hover > &, &.active {
    path:first-of-type {
      fill: ${COLORS.PRIMARY_COLOR};
    }
    path:last-of-type {
      stroke: ${COLORS.PRIMARY_COLOR};
    }
  }
`
