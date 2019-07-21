import styled from "styled-components"

import SettingsIcon from '../../images/icon_settings.inline.svg'
import COLORS from '../../constants/theme'

export default styled(SettingsIcon)`
  path {
    transition: fill .15s ease;
  }

  a:hover > &, &.active {
    path {
      fill: ${COLORS.PRIMARY_COLOR};
    }
  }
`
