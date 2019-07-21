import React from "react"
import styled from "styled-components"

import DeleteIcon from "../../images/icon_delete.inline.svg"

import COLORS from "../../constants/theme"

const Button = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

const StyledDeleteIcon = styled(DeleteIcon)`
  &:hover {
    path {
      fill: ${COLORS.PRIMARY_COLOR};
    }
  }
`

const DeleteButton = ({ className, onClick }) => (
  <Button className={className} onClick={onClick}>
    <StyledDeleteIcon />
  </Button>
)

export default DeleteButton
