import React from 'react'
import './style.css'

const skills = props => {
  return (
    <div>
      <h2 className='padding-top-skils'>Compétences techniques et fonctionnelles</h2>
      <ul className='skills-list'>
        <li>
          <span>Tools</span>
          <span className='spacing-text-details'> : </span>
          {props.skills.tools.join()}
        </li>
        <li>
          <span>Technologies</span>
          <span className='spacing-text-details'> : </span>
          {props.skills.technologies.join()}
        </li>
      </ul>
    </div>
  )
}

export default skills
