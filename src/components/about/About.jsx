import React from 'react'
import "./about.css"
import AboutImg from "../../assets/profiles.jpeg"
import CV from '../../assets/Salazar_Edrian.pdf'
import Info from './Info'

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className='section_subtitle'>My Introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} className='about_img' />

        <div className="about_data">
          <Info />

          <p className="about_description">IT Support professional with basic knowledge of computer systems, software installation, troubleshooting, and user assistance. Skilled in providing technical support, resolving common hardware and software issues, and assisting users with system access and applications.</p>

          <a download="" href={CV} className="button button--flex">Download CV
            <i class="fa-solid fa-file-arrow-down button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About