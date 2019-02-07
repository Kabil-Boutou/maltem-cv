import React from 'react'
import Header from '../../components/header'
import FullName from '../../components/fullName'
import Profil from '../../components/profil'
import Skills from '../../components/skills'
import Education from '../../components/ed'
import Language from '../../components/language'
import Experience from '../../components/experiances'
import './style.css'

const CvMaltem = ({ data }) => {
  return (
    <div className='cv-wrapper' id='section-to-print'>
      <Header />
      {data && (
        <>
          {data.presInfo && (
            <>
              <FullName firstName={data.presInfo.presonalInfoNom} lastName={data.presInfo.presonalInfoPrenom} />
              <Profil status={data.presInfo.presonalInfoStatus} experience={data.presInfo.presonalInfoExperience} />
            </>
          )}
          {data.skills && <Skills skills={data.skills} />}
          {data.educations && <Education educations={data.educations} />}
          {data.languages && <Language languages={data.languages} />}
          {data.experiences && <Experience experiences={data.experiences} />}
        </>
      )}
    </div>
  )
}

export default CvMaltem
