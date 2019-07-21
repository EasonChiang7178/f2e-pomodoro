import React from "react"
import PropTypes from "prop-types"

const defaultContextValue = {
  // focusMilliseconds: 1500000,
  // breakMilliseconds: 300000,
  focusMilliseconds: 5000,
  breakMilliseconds: 3000,
  showTimer: true,
  curRingtonePath: "",
  status: "none",
  startTimeNow: false,
  setTimer: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class TimerContextProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor() {
    super()

    this.state = {
      ...defaultContextValue,
      setTimer: this.setTimer,
    }
  }

  setTimer = (newTimer) => {
    this.setState(state => ({
      ...state,
      ...newTimer,
    }))
  }

  render = () => (
    <Provider value={this.state}>
      {this.props.children}
    </Provider>
  )
}

export { Consumer as default, TimerContextProvider }
