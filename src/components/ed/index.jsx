import React from 'react'
import './style.css'

const eductation = props => (
  <>
    <h2> Études et formations</h2>
    <ul className='education-list'>
      {Object.keys(props.educations).map(ed => (
        <li>
          <span>{ed}</span>
          {props.educations[ed]}
        </li>
      ))}
    </ul>
  </>
)

export default eductation
