import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  background-color: white;
  font-size: 1em;
  padding: 0.35em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }
  width: ${props => props.size};
`

const buttonEl = props => (
  <Button onClick={() => props.action()} size={props.size}>
    {props.value}
  </Button>
)

export default buttonEl
