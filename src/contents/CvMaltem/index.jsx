import React from 'react'
import Header from '../../components/header'
import FullName from '../../components/fullName'
import Profil from '../../components/profil'
import Skills from '../../components/skills'
import Education from '../../components/ed'
import Language from '../../components/language'
import Experience from '../../components/experiances'
import { name, tools, technologies } from '../../utils/conts'
import './style.css'

const CvMaltem = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <div className='cv-wrapper' id='section-to-print1'>
            <Header />

            {data.presInfo && (
              <>
                <FullName name={name} />
                <Profil status={data.presInfo.presonalInfoStatus} experience={data.presInfo.presonalInfoExperience} />
              </>
            )}
            {data.skills && <Skills skills={{ tools, technologies }} />}
          </div>
          <div className='cv-wrapper' id='section-to-print2'>
            <Header />

            {data.educations && <Education educations={data.educations} />}
            {data.languages && <Language languages={data.languages} />}
            {data.experiences && <Experience experiences={data.experiences} />}
          </div>
        </>
      )}
    </>
  )
}

export default CvMaltem
