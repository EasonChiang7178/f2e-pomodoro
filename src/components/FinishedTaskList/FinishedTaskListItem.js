import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import PressedCheckBoxIcon from "../../images/icon_checkbox_pressed.inline.svg"

import COLORS from "../../constants/theme"

const Wrapper = styled.div`
  position: relative;
  padding: 11px 0 8px 8px;
`

const TaskInfoWrapper = styled.div`
`

const TaskName = styled.span`
  color: ${COLORS.ACCENT_COLOR};
  line-height: 22px;
`

const IterationWrapper = styled.div`
  margin-top: 8px;
  margin-left: 28px;
  height: 8px;
`

const Dot = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${COLORS.PRIMARY_COLOR};

  & + & {
    margin-left: 8px;
  }
`

const StyledPressedCheckBoxIcon = styled(PressedCheckBoxIcon)`
  display: inline-block;
  vertical-align: top;
  margin-right: 8px;
`

class FinishedTaskListItem extends React.PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    iteration: PropTypes.number.isRequired,
  }

  handleFinishTaskButtonClick = () => {
    const { index, id, onFinishTaskClick } = this.props
    onFinishTaskClick(id, index)
  }

  handleRemoveTaskButtonClick = () => {
    const { index, onRemoveTaskClick } = this.props
    onRemoveTaskClick(index)
  }

  handleFocusTaskButtonClick = () => {
    const { index, id, onFocusTaskClick } = this.props
    onFocusTaskClick(id, index)
  }

  render = () => {
    const { name, iteration } = this.props

    return (
      <Wrapper>

        <TaskInfoWrapper>
          <StyledPressedCheckBoxIcon />
          <TaskName>{name}</TaskName>
        </TaskInfoWrapper>

        <IterationWrapper>
          {Array.from(Array(iteration)).map((_, i) => <Dot key={i} />)}
        </IterationWrapper>

      </Wrapper>
    )
  }
}

export default FinishedTaskListItem
