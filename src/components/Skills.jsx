import React from 'react'
import {skills} from '../my assets/data'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';


const Skills = () => {
  return (
    <>
    {skills.map(({title, percentage}, index)=>{
        return(
            <div className="progress__box" key={index}>
                <div className="progress__circle">
                <CircularProgressbar 
                strokeWidth={6.5} 
                text={`${percentage}%`} 
                value={percentage}
                /> 
                </div>
                <h3 className="skills__title">{title}</h3>
            </div>

            

        )
    })}
    </>
  )
}

export default Skills