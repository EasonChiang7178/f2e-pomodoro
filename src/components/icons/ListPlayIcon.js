import React from "react"
import styled from "styled-components"

import PlayIcon from "../../images/icon_play.inline.svg"
import PlayHoverIcon from "../../images/icon_play_hover.inline.svg"

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-left: 8px;
  cursor: pointer;
`

const StyledPlayIcon = styled(PlayIcon)`
  width: 20px;
  height: 20px;
`

const StyledPlayHoverIcon = styled(PlayHoverIcon)`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;

  span:hover > & {
    visibility: visible;
  }

  width: 20px;
  height: 20px;
`

const WrappedListPlayIcon = ({ className, onClick }) => (
  <Wrapper className={className} onClick={onClick}>
    <StyledPlayIcon />
    <StyledPlayHoverIcon />
  </Wrapper>
)

export default WrappedListPlayIcon
