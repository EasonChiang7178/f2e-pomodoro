import React from "react"

const defaultContextValue = {
  data: {
    menuOpen: false,
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class TodoContextProvider extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData = (newData) => {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render = () => (
    <Provider value={this.state}>
      {this.props.children}
    </Provider>
  )
}

export { Consumer as default, TodoContextProvider }
