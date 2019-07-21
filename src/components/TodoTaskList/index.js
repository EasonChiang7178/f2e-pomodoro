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
    const { tasks, removeTodoTask } = this.props

    return (
      tasks.length <= 0
        ? <EmptyMessage />
        : tasks.map((task, index) => (
          <TodoTaskListItem
            key={task.id}
            id={task.id}
            index={index}
            name={task.name}
            iteration={task.iteration}
            onRemoveTaskClick={removeTodoTask}
            onFocusTaskClick={this.handleFocusTaskButtonClick}
          />
        ))
    )
  }
}

export default () => (
  <TaskConsumer>
    {({ tasks, removeTodoTask, setFocusTaskId }) => (
      <TodoTaskList
        tasks={tasks}
        removeTodoTask={removeTodoTask}
        setFocusTaskId={setFocusTaskId}
      />
    )}
  </TaskConsumer>
)
