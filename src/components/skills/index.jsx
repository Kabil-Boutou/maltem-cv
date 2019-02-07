import React from 'react'
import { SKILLS, SKILL_DETAILS } from '../../utils/conts'
import './style.css'

const skills = props => {
  let index = 0
  return (
    <div>
      <h2 className='padding-top-skils'>Compétences techniques et fonctionnelles</h2>
      <ul className='skills-list'>
        {Object.keys(props.skills).map(skill => {
          if (skill.includes(SKILLS)) {
            index++
            return (
              <li key={skill}>
                <span>{props.skills[SKILLS + index]}</span>
                <span className='spacing-text-details'> : </span>
                {props.skills[SKILL_DETAILS + index]}
              </li>
            )
          } else return null
        })}
      </ul>
    </div>
  )
}

export default skills
