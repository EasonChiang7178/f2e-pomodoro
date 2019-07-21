import React from "react"
import styled from "styled-components"

import PlayIcon from "../../images/icon_play.inline.svg"
import PlayHoverIcon from "../../images/icon_play_hover.inline.svg"

const Wrapper = styled.div`
  position: relative;
  vertical-align: top;
  cursor: pointer;
`

const StyledPlayHoverIcon = styled(PlayHoverIcon)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${Wrapper}:hover > & {
    visibility: visible;
  }
`

const WrappedPlayIcon = ({ className, onClick }) => (
  <Wrapper className={className} onClick={onClick}>
    <PlayIcon />
    <StyledPlayHoverIcon />
  </Wrapper>
)

export default WrappedPlayIcon
