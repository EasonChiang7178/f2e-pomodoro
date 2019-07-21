import React from "react"
import { navigate } from "gatsby"

import TaskConsumer from "../../contexts/TaskContext"
import TimerConsumer from "../../contexts/TimerContext"

import TodoTaskListItem from "./TodoTaskListItem"
import EmptyMessage from "./EmptyMessage"

class TodoTaskList extends React.PureComponent {

  handleFocusTaskButtonClick = (taskId) => {
    const { setFocusTaskId, setTimer } = this.props

    setFocusTaskId(taskId)
    setTimer({ startTimerNow: true })
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
  <TimerConsumer>
    {({ setTimer }) => (
      <TaskConsumer>
        {({ tasks, removeTodoTask, setFocusTaskId, finishTask }) => (
          <TodoTaskList
            tasks={tasks}
            removeTodoTask={removeTodoTask}
            setFocusTaskId={setFocusTaskId}
            finishTask={finishTask}
            setTimer={setTimer}
          />
        )}
      </TaskConsumer>
    )}
  </TimerConsumer>
)
