import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  width:50%:
  float: ${props => props.positon};
`

const divEl = props => <Block positon={props.positon}>{props.children}</Block>

export default divEl
