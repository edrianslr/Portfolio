import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Duties & Responsibilities</h2>
        <span className="section_subtitle">My technical skills</span>

        <div className="skills_container container grid">
            <Frontend/>
        </div>
    </section>
  )
}

export default Skills