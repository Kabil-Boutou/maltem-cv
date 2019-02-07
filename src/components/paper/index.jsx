import React from 'react'
import styled from 'styled-components'

const Paper = styled.div`
  width: 550px;
  border-radius: 10px;
  margin: auto auto 3% auto;
  padding: 2%;
  -webkit-box-shadow: -2px 3px 15px -1px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: -2px 3px 15px -1px rgba(0, 0, 0, 0.7);
  box-shadow: -2px 3px 15px -1px rgba(0, 0, 0, 0.7);
`

const divEl = props => <Paper>{props.children}</Paper>

export default divEl
