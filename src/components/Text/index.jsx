import React from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  font-family: ${({ font }) => font && font};
  font-size: ${({ size }) => size && `${size}px`};
  color: ${({ color }) => color && color};
  float: ${({ float }) => float && float};
  padding: ${({ padding }) => padding && padding};
  font-weight: ${({ weight }) => weight && weight};
  display: ${({ display }) => display && display};
`
const TextEl = ({ size, children, font, color, float, padding, weight, display }) => (
  <Text font={font} size={size} color={color} float={float} padding={padding} weight={weight} display={display}>
    {children}
  </Text>
)

export default TextEl
