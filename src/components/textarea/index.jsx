import React from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
  width: 250px;
  height: 70px;
  border-radius: 5px;
  margin: 3% 3% 5% 0%;
`
const Wrapper = styled.div`
  display: inline-grid;
  margin-right: 2%;
`
const Label = styled.label`
  color: grey;
`
const textareaEl = ({ setData, label, placeholder, name }) => (
  <Wrapper>
    <Label>{label} </Label>
    <Textarea
      cols='50'
      placeholder={placeholder}
      name={name}
      onChange={e => setData({ [e.target.name]: e.target.value })}
    />
  </Wrapper>
)

export default textareaEl
