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
  color: ${COLORS.ACCENT_COLOR};
`

const CountdownStyler = styled.div`
  margin-bottom: 64px;
  font-size: 57px;
  color: ${COLORS.ACCENT_COLOR};
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
  color: ${COLORS.ACCENT_COLOR};
  cursor: pointer;
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
  background: ${COLORS.ACCENT_COLOR};

  & + & {
    margin-left: 8px;
  }
`

class CountdownTimer extends React.PureComponent {
  countdownRenderer = ({ minutes, seconds }) => (
    <CountdownStyler>
      {zeroPad(minutes)} : {zeroPad(seconds)}
    </CountdownStyler>
  )

  render = () => {
    const { curTask, focusMilliseconds, breakMilliseconds, isBreaking } = this.props
    
    const curTaskName = curTask && curTask.name
    const curTaskIteration = (curTask && curTask.iteration) || 0

    const timeStampForFuture = isBreaking
      ? Date.now() + breakMilliseconds
      : Date.now() + focusMilliseconds

    return (
      <Wrapper>
        <TaskName>{curTaskName}</TaskName>
        
        <Countdown
          date={timeStampForFuture}
          autoStart={false}
          renderer={this.countdownRenderer}
        />

        <CountdownControls>
          <PlayIcon />
          <Reset />
        </CountdownControls>

        <StyledProgressBar
          show={false}
          percentage={0}
          text="Focus ......"
        />

        <IterationWrapper>
          {Array.from(Array(curTaskIteration)).map((_, i) => <Dot key={i} />)}
        </IterationWrapper>

        <FinishTaskButton />
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
          const { showTimer, curRingtonePath, focusMilliseconds, breakMilliseconds, isBreaking, setTimer } = timerProps

          return (
            <CountdownTimer
              curTask={curTask}
              finishTask={finishTask}
              showTimer={showTimer}
              curRingtonePath={curRingtonePath}
              focusMilliseconds={focusMilliseconds}
              breakMilliseconds={breakMilliseconds}
              isBreaking={isBreaking}
              setTimer={setTimer}
            />
          )
        }}
      </TaskContextConsumer>
    )}
  </TimerContextConsumer>
)

export default CountdownTimerContainer
