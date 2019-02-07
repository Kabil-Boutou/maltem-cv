import React, { useState } from 'react'
import { PersonalInfo, Skills, Etudcation, Languages, Experiences } from '../../components/Form'
import CvMaltem from '../CvMaltem'
import './style.css'

const Forms = props => {
  const [presInfo, setPersinfo] = useState(null)
  const [skills, setSkills] = useState(null)
  const [educations, setEducations] = useState(null)
  const [languages, setLanguages] = useState(null)
  const [experiences, setExperiences] = useState(null)
  return (
    <div className='Container'>
      <div className='half-page-left'>
        <h4>Formulaire : </h4>
        <PersonalInfo personalInfoState={newState => setPersinfo({ ...presInfo, ...newState })} />
        <Skills skillsState={newState => setSkills({ ...skills, ...newState })} />
        <Etudcation educationState={newState => setEducations({ ...educations, ...newState })} />
        <Languages languagesState={newState => setLanguages({ ...languages, ...newState })} />
        <Experiences experiencesState={newState => setExperiences({ ...experiences, ...newState })} />
      </div>
      <div className='half-page-right'>
        <button onClick={() => window.print()}>print</button>
        <CvMaltem data={{ presInfo, skills, educations, languages, experiences }} />
      </div>
    </div>
  )
}

export default Forms
