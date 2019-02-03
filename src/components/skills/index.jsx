import React from 'react'
import './style.css'

const skills = props => (
  <div>
    <h2>Compétences techniques et fonctionnelles</h2>
    <ul className='skills-list'>
      {Object.keys(props.skills).map(skill => (
        <li>
          <span>{skill}</span> {props.skills[skill]}
        </li>
      ))}
    </ul>
  </div>
)

export default skills
