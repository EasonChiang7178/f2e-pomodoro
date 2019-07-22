import React from "react"
import styled from "styled-components"

import PauseIcon from "../../images/icon_pause.inline.svg"

const Wrapper = styled.div`
  position: relative;
  vertical-align: top;
  cursor: pointer;  
`

const StyledPauseIcon = styled(PauseIcon)`
  g g g {
    ${props => props.isbreaking === "true" && {
    stroke: "white"
  }}
  }
`

const WrappedPauseIcon = ({ className, isBreaking, onClick }) => (
  <Wrapper className={className} onClick={onClick}>
    <StyledPauseIcon isbreaking={isBreaking.toString()} />
  </Wrapper>
)

export default WrappedPauseIcon
