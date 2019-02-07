import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 250px;
  height: 25px;
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
const inputEl = ({ setData, label, placeholder, type, name }) => (
  <Wrapper>
    <Label>{label} </Label>
    <Input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={e => setData({ [e.target.name]: e.target.value })}
    />
  </Wrapper>
)

export default inputEl
