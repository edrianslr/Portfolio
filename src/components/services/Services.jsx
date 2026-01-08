import React, { useState } from 'react'
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <section className="services section" id='services'>
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Skills</span>

      <div className="services_container container grid">
        <div className="services_content">
          <i className="uil uil-web-grid services_icon"></i>
          <h3 className="services_title">Technical <br /> Skills</h3>

          <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Technical Skills</h3>
              <p className="services_modal-description">Basic knowledge of computer hardware, software installation, troubleshooting, and system setup.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Operating system installation and support (Windows)</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Basic networking (LAN, Wi-Fi setup, IP configuration)</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Printer and peripheral setup and troubleshooting</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Software updates and patch management</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Email setup and troubleshooting</p>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <i className="uil uil-arrow services_icon"></i>
          <h3 className="services_title">Support & Operations <br/> Skills</h3>

          <span className="services_button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Support & Operations Skills</h3>
              <p className="services_modal-description"></p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Password resets and basic access control.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Ticket handling and issue documentation</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Remote support (basic use of remote tools)</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">System monitoring and basic maintenance</p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <i className="uil uil-arrow services_icon"></i>
          <h3 className="services_title">Customer Support <br/> Skills</h3>

          <span className="services_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Customer Support Skills</h3>
              <p className="services_modal-description">I create visually compelling designs that communicate effectively.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Clear communication with users</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Patience in handling non-technical users</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Time management and task prioritization.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Following senior IT procedures and instructions</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Willingness to learn new technologies</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <i className="uil uil-arrow services_icon"></i>
          <h3 className="services_title">Tools & Platforms <br/> Skills </h3>

          <span className="services_button" onClick={() => toggleTab(4)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 4 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Tools & Platforms</h3>
              <p className="services_modal-description">I create visually compelling designs that communicate effectively.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Basic knowledge of Microsoft Office applications</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Experience with helpdesk, email or ticketing systems</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Basic troubleshooting of mobile devices</p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services