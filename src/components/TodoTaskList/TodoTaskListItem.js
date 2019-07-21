import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import CheckBoxIcon from "..//icons/CheckBoxIcon"
import PlayIcon from "../icons/ListPlayIcon"
import DeleteButton from "./DeleteButton"

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

const ToolWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility 0s linear .3s;

  ${Wrapper}:hover & {
    opacity: 1;
    visibility: visible;
    transition: visibility 0s linear, opacity .3s ease;
  }
`


class TodoTaskListItem extends React.PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iteration: PropTypes.number.isRequired,
    onFinishTaskClick: PropTypes.func.isRequired,
    onRemoveTaskClick: PropTypes.func.isRequired,
    onFocusTaskClick: PropTypes.func.isRequired,
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
          <CheckBoxIcon onClick={this.handleFinishTaskButtonClick} />
          <TaskName>{name}</TaskName>
          <PlayIcon onClick={this.handleFocusTaskButtonClick} />
        </TaskInfoWrapper>

        <IterationWrapper>
          {Array.from(Array(iteration)).map((_, i) => <Dot key={i} />)}
        </IterationWrapper>

        <ToolWrapper>
          <DeleteButton onClick={this.handleRemoveTaskButtonClick} />
        </ToolWrapper>

      </Wrapper>
    )
  }
}

export default TodoTaskListItem
