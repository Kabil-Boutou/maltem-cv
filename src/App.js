import React, { Component } from 'react'
import Header from './components/header'
import Print from './components/print'
import FullName from './components/fullName'
import Profil from './components/profil'
import Skills from './components/skills'
import Education from './components/ed'
import Language from './components/language'
import { skills, status, languages, experience, firstName, lastName, educations } from './utils/conts'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Print />
        <FullName firstName={firstName} lastName={lastName} />
        <Profil status={status} experience={experience} />
        <Skills skills={skills} />
        <Education educations={educations} />
        <Language languages={languages} />
      </div>
    )
  }
}

export default App
