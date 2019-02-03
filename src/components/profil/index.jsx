import React from 'react'
import './style.css'

const profil = props => (
  <div className='profil'>
    <h2 className='profil-status'>{props.status}</h2>
    <h2 className='profil-experience'>{props.experience} années d’expérience</h2>
  </div>
)
export default profil
