import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
// import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:lalitchouhan267@gmail.com")
    }
    return (
        <div className="sidebar">
            {/* <img src={mightycoder} alt="avatar" className="sidebar__avatar" /> */}
            <div className="sidebar__name">Lalit <span>Chouhan</span> </div>
            <div className="sidebar__item sidebar__title">Full Stack Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.linkedin.com/in/lalit-chouhan-5ab1351b2/" target="_blank"><img src={linkedin} alt="facebook" className="sidebar__icon mr-2" /></a>
                <a href="https://www.instagram.com/lalit__14/" target="_blank"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/Lalit14" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    indore, India</div>
                <div className="sidebar__item">lalitchouhan267@gmail.com</div>
                <div className="sidebar__item">7089989178/7999907332</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </div>
    )
}

export default Sidebar;