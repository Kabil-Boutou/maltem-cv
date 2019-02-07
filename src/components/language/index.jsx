import React from 'react'
import { LANGUAGE, LANGUAGE_LVL } from '../../utils/conts'

const languages = props => {
  let index = 0
  return (
    <>
      <h2>Langues</h2>
      <ul>
        {Object.keys(props.languages).map(language => {
          if (language.includes(LANGUAGE)) {
            index++
            return (
              <li key={language}>
                <span>{props.languages[LANGUAGE + index]}</span>
                <span className='spacing-text-details' />
                <span>{props.languages[LANGUAGE_LVL + index]}</span>
              </li>
            )
          } else return null
        })}
      </ul>
    </>
  )
}

export default languages
