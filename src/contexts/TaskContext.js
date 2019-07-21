import React from "react"

const defaultContextValue = {
  tasks: [],
  finishedTasks: [],
  curFocusTaskId: "",
  addTodoTask: () => {},
  removeTodoTask: () => {},
  editTodoTask: () => {},
  setFocusTaskId: () => {},
  finishTask: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class TaskContextProvider extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      ...defaultContextValue,
      addTodoTask: this.addTodoTask,
      removeTodoTask: this.removeTodoTask,
      editTodoTask: this.editTodoTask,
      setFocusTaskId: this.setFocusTaskId,
      finishTask: this.finishTask,
    }
  }

  addTodoTask = (newTask) => {
    this.setState(state => ({
      tasks: [
        ...state.tasks,
        newTask,
      ],
    }))
  }

  addFinishTask = (newFinishTask) => {
    this.setState(state => ({
      finishedTasks: [
        ...state.finishedTasks,
        { ...newFinishTask, timestamp: +new Date()},
      ],
    }))
  }

  removeTodoTask = (index) => {
    this.setState(state => ({
      tasks: [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index + 1)
      ]
    }))
  }

  editTodoTask = (index, updatedTask) => {
    this.setState(state => ({
      tasks: [
        ...state.tasks.slice(0, index),
        updatedTask,
        ...state.tasks.slice(index + 1)
      ]
    }))
  }

  setFocusTaskId = (taskId) => {
    this.setState(() => ({
      curFocusTaskId: taskId
    }))
  }

  finishTask = (_, toFinishTaskIndex) => {
    const { tasks } = this.state
    const finishedTask = tasks[toFinishTaskIndex]

    this.addFinishTask(finishedTask)
    this.removeTodoTask(toFinishTaskIndex)
  }

  render = () => (
    <Provider value={this.state}>
      {this.props.children}
    </Provider>
  )
}

export { Consumer as default, TaskContextProvider }
