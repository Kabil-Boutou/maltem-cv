import React from 'react'
import Text from '../Text'
import { EDUCATION, ED_DETAILS } from '../../utils/conts'
import './style.css'

const eductation = props => {
  let index = 0
  return (
    <>
      <Text size='24' font='Corbel' color='#af312a' padding='15% 0% 0% 0%'>
        Études et formations
      </Text>
      <ul className='education-list'>
        {Object.keys(props.educations).map(ed => {
          if (ed.includes(EDUCATION)) {
            index++
            return (
              <li key={ed}>
                <Text weight='bold' font='Corbel' size='16' color='grey' display='contents'>
                  {props.educations[EDUCATION + index]}
                </Text>
                <span className='spacing-text-details'>:</span>
                <Text weight='100' font='Corbel' size='15' display='contents'>
                  {props.educations[ED_DETAILS + index]}
                </Text>
              </li>
            )
          } else return null
        })}
      </ul>
    </>
  )
}

export default eductation
