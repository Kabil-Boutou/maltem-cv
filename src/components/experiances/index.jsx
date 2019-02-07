import React from 'react'
import {
  EXPERIANCE,
  ENTREPRISE,
  MISSION,
  DESCRIPTION_MISSION,
  TACHE_MISSION,
  ENV_TECHNIQUE,
  FONCTION
} from '../../utils/conts'
import './style.css'

const experience = props => {
  let experianceID = 0,
    missionID = 0,
    tachID = 0

  return (
    <>
      <h2> Expérience Professionnelle </h2>
      <ul className='experience-list'>
        {console.log('mission ', props.experiences)}
        {
          //console.log('taches ', props.experiences.tachesMissionExperiance)
        }
        {Object.keys(props.experiences).map(exp => {
          if (exp.includes(EXPERIANCE)) {
            experianceID++
            return (
              <li key={exp}>
                <span>{props.experiences[EXPERIANCE + experianceID]}</span>
                <span className='spacing-text-details'>:</span>
                <span>{props.experiences[ENTREPRISE + experianceID]}</span>
                <span>{props.experiences[FONCTION + experianceID]}</span>
                {Object.keys(MISSION + experianceID + missionID).map(mission => {
                  return (
                    <>
                      <span>{props.experiences[MISSION + experianceID]}</span>
                      <span>{props.experiences[DESCRIPTION_MISSION + experianceID]}</span>
                      {Object.keys(TACHE_MISSION + experianceID + missionID + tachID).map(tache => {
                        return <span>{props.experiences[TACHE_MISSION + experianceID]}</span>
                      })}
                    </>
                  )
                })}

                <span>{props.experiences[ENV_TECHNIQUE + experianceID]}</span>
              </li>
            )
          } else return null
        })}
      </ul>
    </>
  )
}

export default experience
