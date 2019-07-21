import React from "react"

const defaultContextValue = {
  tasks: [],
  curFocusTaskId: "",
  addTodoTask: () => {},
  removeTodoTask: () => {},
  editTodoTask: () => {},
  setFocusTaskId: () => {},
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

  render = () => (
    <Provider value={this.state}>
      {this.props.children}
    </Provider>
  )
}

export { Consumer as default, TaskContextProvider }
