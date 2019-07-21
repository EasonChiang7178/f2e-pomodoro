import styled from "styled-components"

import TimerIcon from '../../images/icon_timer.inline.svg'
import COLORS from '../../constants/theme'

export default styled(TimerIcon)`
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
