import React from 'react'

const languages = props => (
  <>
    <h2>Langues</h2>
    <ul>
      {props.languages.map(language => (
        <li>{language}</li>
      ))}
    </ul>
  </>
)

export default languages
