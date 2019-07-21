import React from "react"
import styled from "styled-components"

import EmptyTodoTaskIcon from "../../images/img_taskempty.inline.svg"
import COLORS from "../../constants/theme"

const Wrapper = styled.div`
  margin-top: 93px;
  text-align: center;
`

const Message = styled.p`
  margin: 0;
  margin-top: 16px;
  line-height: 22px;
  color: ${COLORS.ACCENT_COLOR};
`

const EmptyMessage = ({ children }) => (
  <Wrapper>
    <EmptyTodoTaskIcon />
    <Message>
      {children}
    </Message>
  </Wrapper>
)

export default EmptyMessage
