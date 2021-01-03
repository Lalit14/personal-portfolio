import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and REACT.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "hands on Node js , Express JS , Flask ",
    },
    {
        icon: api,
        title: "Hosting Platforms",
        about: "I can deploy project on Digital Ocean , Heroku, AWS "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in GeeksforGeeks and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using Material-UI ,BootStrap ,figma and  framer"
    },
    {
        icon: computer,
        title: "Databases",
        about: "handle data using MongoDB atlas ,MYSQL ,firebase"
    },
]


const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner, comfortable with new tech and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard  skill={skill} />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;