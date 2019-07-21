import React from "react"
import TaskConsumer from "../../contexts/TaskContext"

import FinishedTaskListItem from "./FinishedTaskListItem"
import EmptyMessage from "../TodoTaskList/EmptyMessage"

class FinishedTaskList extends React.PureComponent {
  render = () => {
    const { tasks } = this.props

    return (
      tasks.length <= 0
        ? (
          <EmptyMessage>
            目前沒有完成事項，<br />專注當下並完成代辦事項
          </EmptyMessage>
        )
        : tasks.map((task, index) => (
          <FinishedTaskListItem
            key={task.id}
            index={index}
            name={task.name}
            iteration={task.iteration}
          />
        ))
    )
  }
}

export default () => (
  <TaskConsumer>
    {({ finishedTasks }) => (
      <FinishedTaskList tasks={finishedTasks} />
    )}
  </TaskConsumer>
)
