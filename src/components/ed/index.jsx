import React from 'react'
import { EDUCATION, ED_DETAILS } from '../../utils/conts'
import './style.css'

const eductation = props => {
  let index = 0
  return (
    <>
      <h2> Études et formations</h2>
      <ul className='education-list'>
        {Object.keys(props.educations).map(ed => {
          if (ed.includes(EDUCATION)) {
            index++
            return (
              <li key={ed}>
                <span>{props.educations[EDUCATION + index]}</span>
                <span className='spacing-text-details'>:</span>
                <span>{props.educations[ED_DETAILS + index]}</span>
              </li>
            )
          } else return null
        })}
      </ul>
    </>
  )
}

export default eductation
