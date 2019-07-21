import React from "react"
import styled from "styled-components"
import Countdown, { zeroPad } from "react-countdown-now"

import TimerContextConsumer from "../../contexts/TimerContext"
import TaskContextConsumer from "../../contexts/TaskContext"

import PlayIcon from "../../components/icons/PlayIcon"
import ProgressBar from "./ProgressBar"
import FinishTaskButton from "./FinishTaskButton"
import COLORS from "../../constants/theme"

const Wrapper = styled.div`
  height: 100vh;
  min-height: 611px;
  padding-top: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TaskName = styled.h1`
  height: 25px;
  margin: 0;
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  color: ${props => props.isBreaking ? "white" : COLORS.ACCENT_COLOR};
`

const CountdownStyler = styled.div`
  width: 150px;
  margin-left: 13px;
  margin-bottom: 64px;
  font-size: 57px;
  color: ${props => props.isBreaking ? "white" : COLORS.ACCENT_COLOR};
  line-height: 69px;
`

const CountdownControls = styled.div`
  margin-bottom: 32px;
  text-align: center;
`

const Reset = styled.div.attrs({
  children: "reset"
})`
  margin-top: 16px;
  font-size: 22px;
  color: ${props => props.isBreaking ? "white" : COLORS.ACCENT_COLOR};
  cursor: pointer;

  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility 0s linear .3s;

  ${props => props.show && {
    opacity: 1,
    visibility: "visible",
    transition: "visibility 0s linear, opacity .3s ease"
  }}
`

const StyledProgressBar = styled(ProgressBar)`
  margin-bottom: 32px;
`

const IterationWrapper = styled.div`
  margin-bottom: 64px;
  height: 10px;
`

const Dot = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.isBreaking ? "white" : COLORS.ACCENT_COLOR};

  & + & {
    margin-left: 8px;
  }
`

class CountdownTimer extends React.PureComponent {
  constructor(props) {
    super(props)

    this.countdownApi = null

    this.state = {
      timerTimeStamp: this.getTimerFutureTimeStamp(),
      timerProgressPercentage: 100
    }
  }

  handleStartClick = () => {
    this.startTimer()
    this.props.setTimer({
      status: this.getNextTimerStatus()
    })
  }

  handleCountdownTick = (timer) => {
    const curProgress = timer.total
    const totalProgress = this.props.status === "focusing"
      ? this.props.focusMilliseconds : this.props.breakMilliseconds

    const percentage = curProgress / totalProgress * 100
    this.setState(() => ({
      timerProgressPercentage: percentage
    }))
  }

  handleCountdownComplete = () => {
    this.setState(() => ({
      timerProgressPercentage: 0,
    }))

    setTimeout(() => {
      this.props.setTimer({
        status: this.getNextTimerStatus()
      })

      this.setState(() => ({
        timerProgressPercentage: 100,
        timerTimeStamp: this.getTimerFutureTimeStamp()
      }))

      if (this.props.status !== "none") {
        this.startTimer()
      }
    }, 1100)
  }

  getNextTimerStatus = () => {
    const { status } = this.props
    switch (status) {
      case "none":
        return "focusing"
      case "focusing":
        return "breaking"
      case "breaking":
      default:
        return "none"
    }
  }

  getTimerFutureTimeStamp = () => this.props.status === "breaking"
    ? Date.now() + this.props.breakMilliseconds
    : Date.now() + this.props.focusMilliseconds

  countdownRenderer = ({ minutes, seconds }) => (
    <CountdownStyler isBreaking={this.props.status === "breaking"}>
      {zeroPad(minutes)} : {zeroPad(seconds)}
    </CountdownStyler>
  )

  setCountdownApi = (countdown) => {
    if (countdown) {
      this.countdownApi = countdown.getApi()
    }
  }

  startTimer = () => {
    this.countdownApi && this.countdownApi.start()
  }

  render = () => {
    const { curTask, status } = this.props
    
    const curTaskName = curTask && curTask.name
    const curTaskIteration = (curTask && curTask.iteration) || 0
    const isTimerCounting = status !== "none"
    const isTimerBreaking = status === "breaking"
    const progressInfo = status === "breaking"
      ? "Break ......" : "Focus ......"

    return (
      <Wrapper>
        <TaskName isBreaking={isTimerBreaking}>{curTaskName}</TaskName>
        
        <Countdown
          key={status !== "breaking" ? "f" : "b"}
          date={this.state.timerTimeStamp}
          autoStart={false}
          renderer={this.countdownRenderer}
          ref={this.setCountdownApi}
          intervalDelay={500}
          onTick={this.handleCountdownTick}
          onComplete={this.handleCountdownComplete}
        />

        <CountdownControls>
          <PlayIcon isBreaking={isTimerBreaking} onClick={this.handleStartClick} />
          <Reset isBreaking={isTimerBreaking} show={isTimerCounting} />
        </CountdownControls>

        <StyledProgressBar
          isBreaking={isTimerBreaking}
          show={isTimerCounting}
          percentage={100 - this.state.timerProgressPercentage}
          text={progressInfo}
        />

        <IterationWrapper>
          {Array.from(Array(curTaskIteration)).map((_, i) => <Dot key={i} isBreaking={isTimerBreaking} />)}
        </IterationWrapper>

        {curTask && <FinishTaskButton isBreaking={isTimerBreaking} />}
      </Wrapper>
    )
  }
}

const CountdownTimerContainer = () => (
  <TimerContextConsumer>
    {(timerProps) => (
      <TaskContextConsumer>
        {({ tasks, curFocusTaskId, finishTask }) => {
          const curTask = tasks.find(t => t.id === curFocusTaskId) || null
          const { showTimer, curRingtonePath, focusMilliseconds, breakMilliseconds, status, setTimer } = timerProps

          return (
            <CountdownTimer
              curTask={curTask}
              finishTask={finishTask}
              showTimer={showTimer}
              curRingtonePath={curRingtonePath}
              focusMilliseconds={focusMilliseconds}
              breakMilliseconds={breakMilliseconds}
              status={status}
              setTimer={setTimer}
            />
          )
        }}
      </TaskContextConsumer>
    )}
  </TimerContextConsumer>
)

export default CountdownTimerContainer
