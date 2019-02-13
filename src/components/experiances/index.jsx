import React from 'react'
import {
  EXPERIANCE,
  ENTREPRISE,
  MISSION,
  MISSONS_COUNT,
  DESCRIPTION_MISSION,
  TACHE_MISSION,
  ENV_TECHNIQUE,
  FONCTION,
  TACHES_COUNT
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
        {Object.keys(props.experiences).map(exp => {
          if (exp.includes(EXPERIANCE)) {
            experianceID++
            let missions = props.experiences[MISSONS_COUNT + experianceID]
            return (
              <li key={exp}>
                <div className='experiences_date'>
                  <span>{props.experiences[EXPERIANCE + experianceID]}</span>
                </div>
                <div className='experiences_details'>
                  <span>{props.experiences[ENTREPRISE + experianceID]}</span>
                  <span>{props.experiences[FONCTION + experianceID]}</span>
                  {missions
                    ? [...new Array(missions++)].map(mission => {
                        missionID++
                        let taches = props.experiences[TACHES_COUNT + experianceID + missionID]
                        return (
                          <React.Fragment key={missionID}>
                            <span>{props.experiences[MISSION + experianceID + missionID]}</span>
                            <span>{props.experiences[DESCRIPTION_MISSION + experianceID + missionID]}</span>
                            {taches &&
                              [...new Array(taches++)].map(tache => {
                                tachID++
                                return (
                                  <span key={tachID}>
                                    {props.experiences[TACHE_MISSION + experianceID + missionID + tachID]}
                                  </span>
                                )
                              })}
                          </React.Fragment>
                        )
                      })
                    : null}

                  <span>{props.experiences[ENV_TECHNIQUE + experianceID]}</span>
                </div>
              </li>
            )
          } else return null
        })}
      </ul>
    </>
  )
}

export default experience
