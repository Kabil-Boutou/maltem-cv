import React from 'react'
import Text from '../Text'
import './style.css'

const profil = props => (
  <div className='profil'>
    <Text size='24' font='Corbel' float='left' color='#af312a'>
      {props.status}
    </Text>
    <Text size='24' font='Corbel' float='right'>
      {props.experience} années d’expérience
    </Text>
  </div>
)
export default profil
