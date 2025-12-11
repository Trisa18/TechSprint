import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const benefits = [
    {
        icon: <img src="https://cdn1.iconfinder.com/data/icons/project-management-2-14/136/110-512.png" alt="Prizes" />,
        title: 'Win Big Prizes',
        description: 'Win Exciting Prizes and exclusive swag for winners.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/6171/6171865.png" alt="Networking" />,
        title: 'Networking',
        description: 'Connect with industry experts, mentors, and fellow developers.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/748/748529.png" alt="Learn" />,
        title: 'Learn & Grow',
        description: 'TechSprint brings together diverse teams of students who collaborate, brainstorm, and build impactful solutions.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/5807/5807416.png" alt="Solve" />,
        title: 'Solve Real Problems',
        description: 'Encourages participants to identify local challenges and create purposeful, social-impact solutions.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/256/5235/5235253.png" alt="Food" />,
        title: 'Free Food & Swag',
        description: 'Enjoy delicious meals and cool merchandise throughout the event.'
    },
    {
        icon: <img src="https://cdn0.iconfinder.com/data/icons/finance-icons-rounded/110/Certificate-1024.png" alt="Certificate" />,
        title: 'Certificate',
        description: 'Get a certificate of participation from GDG On Campus.'
    }
];

const About = () => {
    return (
        <div className="about-page">
            <div className="container section">
                <motion.div
                    className="about-header text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="page-title">About <span className="text-gradient">TechSprint</span></h1>
                    <p className="lead-text">
                        TechSprint is an annual hackathon organized by GDG On Campus to foster innovation and creativity among students.
                    </p>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="glass-card about-detail-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to inspire students to innovate, explore new technologies, and build solutions that create real impact.</p><br></br>

                        <p>    Through TechSprint, we aim to provide a platform where students can learn by doing, collaborate with peers, and use Google technologies to turn ideas into working solutions.</p>
                    </motion.div>

                    <motion.div
                        className="glass-card about-detail-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>The Experience</h2>
                        <p>
                            At TechSprint, participants get hands-on experience using Google technologies to build real solutions, collaborate with innovative teams, and solve meaningful community problems. <br></br><br></br>
                            You'll learn to ideate, prototype, develop an MVP, and pitch your project-all while boosting your technical skills, creativity, and confidence.
                        </p>
                    </motion.div>
                </div>

                <div className="container section">
                    <motion.h2
                        className="section-title text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Why <span className="text-gradient">Participate?</span>
                    </motion.h2>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="glass-card benefit-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;
