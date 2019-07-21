import React from 'react'
import styled from 'styled-components'

import TimerConsumer from '../contexts/TimerContext'

const NormalGradientBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgb(196, 218, 230);
  background: linear-gradient(241deg, rgba(225, 230, 230, 1) 0%, rgba(196, 218, 230, 1) 100%);
`

const AccentedGradientBg = styled(NormalGradientBg)`
  background: rgb(146,200,224);
  background: linear-gradient(241deg, rgba(146,200,224,1) 0%, rgba(195,176,214,1) 100%);
  transition: opacity .5s ease-in-out;
  opacity: ${props => props.isActive ? 100 : 0 };
`

const Background = ({ isActive }) => (
  <>
    <NormalGradientBg />
    <AccentedGradientBg isActive={isActive} />
  </>
)

const BackgroundContainer = () => (
  <TimerConsumer>
    {({ status }) => <Background isActive={status === "breaking"} />}
  </TimerConsumer>
)

export default BackgroundContainer
