import React from 'react'
import logo from '../../img/logo.png'
import './style.css'
const header = props => (
  <header className='header'>
    <img src={logo} className='logo-header' alt='logo' />
    <hr />
  </header>
)

export default header
