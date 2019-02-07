import React, { useState, useEffect } from 'react'
import Paper from '../paper'
import Button from '../button'
import Input from '../input'
import Textarea from '../textarea'
import Block from '../block'
import {
  LANGUAGE,
  LANGUAGE_LVL,
  ED_DETAILS,
  EDUCATION,
  SKILLS,
  SKILL_DETAILS,
  EXPERIANCE,
  ENTREPRISE,
  FONCTION,
  ENV_TECHNIQUE,
  MISSION,
  DESCRIPTION_MISSION,
  TACHE_MISSION
} from '../../utils/conts'
export const PersonalInfo = ({ personalInfoState }) => (
  <Paper>
    <Input placeholder='Nom...' name='presonalInfoNom' label='Nom :' setData={personalInfoState} />
    <Input placeholder='Prenom...' name='presonalInfoPrenom' label='Prenom :' setData={personalInfoState} />
    <Input placeholder='Status...' name='presonalInfoStatus' label='Status :' setData={personalInfoState} />
    <Input
      placeholder="Année d'experiance..."
      name='presonalInfoExperience'
      label='Année :'
      setData={personalInfoState}
    />
  </Paper>
)

export const Skills = ({ skillsState }) => {
  const [skills, setSkills] = useState(1)
  let index = 0
  return (
    <Paper>
      {[...new Array(skills)].map(skill => (
        <React.Fragment key={index++}>
          <Input name={`${SKILLS}${index}`} placeholder='ex:front...' label='' setData={skillsState} />
          <Textarea name={`${SKILL_DETAILS}${index}`} setData={skillsState} />
        </React.Fragment>
      ))}

      <Button action={() => setSkills(skills + 1)} value='Ajouter une nouvelle compétence' size='100%' />
    </Paper>
  )
}

export const Etudcation = ({ educationState }) => {
  const [educations, setEtudcation] = useState(1)
  let index = 0

  return (
    <Paper>
      {[...new Array(educations)].map(education => (
        <React.Fragment key={index++}>
          <Input name={`${EDUCATION}${index}`} setData={educationState} placeholder="Date d'étude" label='Année :' />
          <Textarea name={`${ED_DETAILS}${index}`} setData={educationState} />
        </React.Fragment>
      ))}

      <Button action={() => setEtudcation(educations + 1)} value="Ajouter une nouvelle case d'éducation" size='100%' />
    </Paper>
  )
}

export const Languages = ({ languagesState }) => {
  const [languages, setLanguage] = useState(1)
  let index = 0

  return (
    <Paper>
      {[...new Array(languages)].map(language => (
        <React.Fragment key={index++}>
          <Input
            name={`${LANGUAGE}${index}`}
            setData={languagesState}
            placeholder={`langue ${index}...`}
            label={`langue ${index} :`}
          />
          <Input
            name={`${LANGUAGE_LVL}${index}`}
            setData={languagesState}
            placeholder='niveau de langue...'
            label='Niveau :'
          />
        </React.Fragment>
      ))}

      <Button action={() => setLanguage(languages + 1)} value='Ajouter une nouvelle langue' size='100%' />
    </Paper>
  )
}
export const Experiences = ({ experiencesState }) => {
  const [experience, setExperience] = useState(1)
  const [tache, setTache] = useState(1)
  const [mission, setMission] = useState(1)
  useEffect(() => {
    experiencesState({
      ['tachesMissionExperiance' + experience + mission]: tache - 1,
      ['missionsExperiance' + experience]: mission - 1
    })
  }, [])
  let experianceID = 0,
    missionID = 0,
    tachID = 0
  return (
    <Paper>
      {[...new Array(experience)].map(exp => (
        <React.Fragment key={experianceID++}>
          <Block position='left'>
            <Input
              name={`${EXPERIANCE}${experianceID}`}
              setData={experiencesState}
              placeholder={`...`}
              label={`Année :`}
            />
          </Block>
          <Block position='right'>
            <Input
              name={`${ENTREPRISE}${experianceID}`}
              setData={experiencesState}
              placeholder="nom de l'entreprise..."
              label='Entreprise :'
            />
            <Input
              name={`${FONCTION}${experianceID}`}
              setData={experiencesState}
              placeholder='Fonctions ...'
              label='Fonction :'
            />
            {[...new Array(mission)].map(mission => (
              <React.Fragment key={missionID++}>
                <Input
                  name={`${MISSION}${experianceID}${missionID}`}
                  setData={experiencesState}
                  placeholder='Mission ...'
                  label='Mission :'
                />
                <Textarea
                  name={`${DESCRIPTION_MISSION}${experianceID}${missionID}`}
                  setData={experiencesState}
                  placeholder='Description...'
                  label='Description :'
                />
                {[...new Array(tache)].map(tache => (
                  <React.Fragment key={tachID++}>
                    <Input
                      name={`${TACHE_MISSION}${experianceID}${missionID}${tachID}`}
                      setData={experiencesState}
                      placeholder='Taches ...'
                      label='Tache :'
                    />
                  </React.Fragment>
                ))}
                <Button action={() => setTache(tache + 1)} value='Ajouter une nouvelle tache' size='50%' />
              </React.Fragment>
            ))}
            <Button action={() => setMission(mission + 1)} value='Ajouter une nouvelle mission' size='50%' />
            <Textarea
              name={`${ENV_TECHNIQUE}${experianceID}`}
              setData={experiencesState}
              placeholder='Environnement Technique...'
              label='Environnement Technique :'
            />
          </Block>
        </React.Fragment>
      ))}
      <Button action={() => setExperience(experience + 1)} value='Ajouter une nouvelle experience' size='100%' />
    </Paper>
  )
}
