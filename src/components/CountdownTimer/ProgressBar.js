import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 17px;
  overflow: hidden;
  position: relative;

  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility 0s linear .3s;

  ${props => props.show && {
    opacity: 1,
    visibility: "visible",
    transition: "visibility 0s linear, opacity .3s ease"
  }}
`

const ProgressWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${props => `-${props.percentage}%`};
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  transition: left 1.1s linear;
`

const Progress = styled.div`
  height: 1px;
  width: 100vw;
  background: white;
  flex: 0 0 auto;
`

const Info = styled.div`
  margin-left: 8px;
  font-size: 14px;
  color: white;
  line-height: 17px;
  flex: 0 0 auto;
`

export default ({ className, show, text, percentage = 0 }) => (
  <Container className={className} show={show}>
    <ProgressWrapper percentage={percentage}>
      <Progress />
      <Info>{text}</Info>
    </ProgressWrapper>
  </Container>
)
