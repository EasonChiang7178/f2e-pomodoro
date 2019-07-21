import React from "react"
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,600&display=swap');
  body {
    font-family: 'Cormorant Garamond', serif;
  }
`

class GlobalStyles extends React.PureComponent {
  render = () => (
    <>
      <Normalize />
      <Global />
    </>
  )
}

export default GlobalStyles
