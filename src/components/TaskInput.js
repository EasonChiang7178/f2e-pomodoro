import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import shortId from "shortid"

import TaskConsumer from "../contexts/TaskContext"

import COLORS from "../constants/theme"

const InputWrapper = styled.div`
  width: 100%;
  border-radius: 31px;
  border: solid 2px white;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  padding: 8px 20px;
  width: 100%;
  border: none;
  background: transparent;
  color: ${COLORS.ACCENT_COLOR};
  line-height: 22px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: rgba(255, 255, 255, .75);
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: rgba(255, 255, 255, .75);
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: rgba(255, 255, 255, .75);
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: rgba(255, 255, 255, .75);
  }
`

const Button = styled.button`
  margin-right: 6px;
  padding: 4px 20px;
  border: none;
  border-radius: 26px;
  background: ${props => props.disabled ? COLORS.SECONDARY_COLOR : COLORS.PRIMARY_COLOR };
  color: white;
  line-height: 22px;
  flex: 0 0 auto;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

  &:focus {
    outline: none;
  }
`

class TaskInput extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onCreateTaskButtonClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      inputTaskName: ""
    }
  }

  handleCreateTaskButtonClick = () => {
    const createdTaskName = this.state.inputTaskName
    this.props.onCreateTaskButtonClick({
      id: shortId.generate(),
      name: createdTaskName,
      iteration: 0
    })

    this.setState(() => ({ inputTaskName: "" }))
  }

  handleInputChange = (e) => {
    const updatedValue = e.currentTarget.value
    this.setState(() => ({ inputTaskName: updatedValue }))
  }

  render = () => {
    const { inputTaskName } = this.state

    const isCreatedButtonDisabled = inputTaskName.length === 0 ? true : false

    return (
      <InputWrapper className={this.props.className}>
        <Input placeholder="＋ 新增代辦事項" value={inputTaskName} onChange={this.handleInputChange} />
        <Button
          disabled={isCreatedButtonDisabled}
          onClick={this.handleCreateTaskButtonClick}
        >
          新增
        </Button>
      </InputWrapper>
    )
  }
}

const TaskInputContainer = (props) => (
  <TaskConsumer>
    {({ addTodoTask }) => (
      <TaskInput onCreateTaskButtonClick={addTodoTask} {...props} />
    )}
  </TaskConsumer>
)

export default TaskInputContainer
