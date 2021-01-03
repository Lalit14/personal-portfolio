import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '65'
    },
   
    {
        icon: react,
        name: 'react',
        level: '75'
    },    {
        icon: react,
        name: 'PHP',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
   
    {
        icon: react,
        name: 'flask',
        level: '60'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'jupyter',
        level: '70'
    },
    {
        icon: react,
        name: 'Visual studio',
        level: '90'
    },
    {
        icon: react,
        name: 'Material-UI',
        level: '60'
    },
    {
        icon: react,
        name: 'Framer',
        level: '45'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                        Institute of Engineering and Science IPS Academy(2018-2022)
                        </p>
                        <p className="resume-card__details">I am currently persuing B.tech in Computer Science Engineering from IPS Academy </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            HemansAI (2020)
                        </p>
                        <p className="resume-card__details">Develop website where Machine Learning probelms are solved by the candidates build using MERN stack </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;