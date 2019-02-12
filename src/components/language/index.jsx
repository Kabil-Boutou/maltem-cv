import React from 'react'
import Text from '../Text'
import { LANGUAGE, LANGUAGE_LVL } from '../../utils/conts'

const languages = props => {
  let index = 0
  return (
    <>
      <Text size='24' font='Calibri Light' color='#af312a' padding='15% 0% 0% 0%'>
        Langues
      </Text>
      <ul>
        {Object.keys(props.languages).map(language => {
          if (language.includes(LANGUAGE)) {
            index++
            return (
              <li key={language}>
                <Text weight='bold' font='Corbel' size='16' display='contents'>
                  {props.languages[LANGUAGE + index]}
                </Text>
                (<span>{props.languages[LANGUAGE_LVL + index]}</span>)
              </li>
            )
          } else return null
        })}
      </ul>
    </>
  )
}

export default languages
