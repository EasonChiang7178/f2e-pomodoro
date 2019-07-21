import React from "react"
import { navigate } from "gatsby"

import TaskConsumer from "../../contexts/TaskContext"

import TodoTaskListItem from "./TodoTaskListItem"
import EmptyMessage from "./EmptyMessage"

class TodoTaskList extends React.PureComponent {

  handleFocusTaskButtonClick = (taskId) => {
    const { setFocusTaskId } = this.props

    setFocusTaskId(taskId)
    navigate("/")
  }

  render = () => {
    const { tasks, removeTodoTask, finishTask } = this.props

    return (
      tasks.length <= 0
        ? (
          <EmptyMessage>
            目前沒有待辦事項，<br />新增代辦事項並開始專注
          </EmptyMessage>
        )
        : tasks.map((task, index) => (
          <TodoTaskListItem
            key={task.id}
            id={task.id}
            index={index}
            name={task.name}
            iteration={task.iteration}
            onFinishTaskClick={finishTask}
            onRemoveTaskClick={removeTodoTask}
            onFocusTaskClick={this.handleFocusTaskButtonClick}
          />
        ))
    )
  }
}

export default () => (
  <TaskConsumer>
    {({ tasks, removeTodoTask, setFocusTaskId, finishTask }) => (
      <TodoTaskList
        tasks={tasks}
        removeTodoTask={removeTodoTask}
        setFocusTaskId={setFocusTaskId}
        finishTask={finishTask}
      />
    )}
  </TaskConsumer>
)
