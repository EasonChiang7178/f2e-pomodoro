import React from "react"
import styled from "styled-components"

import CheckBoxIcon from "../../images/icon_checkbox_normal.inline.svg"
import CheckBoxHoverIcon from "../../images/icon_checkbox_hover.inline.svg"

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: top;
  margin-right: 8px;
  cursor: pointer;
`

const StyledCheckBoxHoverIcon = styled(CheckBoxHoverIcon)`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;

  span:hover > & {
    visibility: visible;
  }
`

const WrappedCheckBoxIcon = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <CheckBoxIcon />
    <StyledCheckBoxHoverIcon />
  </Wrapper>
)

export default WrappedCheckBoxIcon
