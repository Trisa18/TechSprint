import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Users, Lightbulb, Rocket, Coffee, Award, Flag, Send, Mic } from 'lucide-react';
import './Timeline.css';

const timelineEvents = [
    {
        date: 'Dec 12, 2025',
        title: 'Launch of Campaign',
        description: 'Official announcement and kickoff of the TechSprint campaign.',
        icon: <img src="https://cdn-icons-png.flaticon.com/512/762/762658.png" alt="Launch" />
    },
    {
        date: 'Dec 12 - Dec 26, 2025',
        title: 'Registration & Team Formation',
        description: ' Gather your team and sign up.',
        icon: <img src="https://img.freepik.com/premium-vector/connections-vector-illustration_777877-8620.jpg" alt="Registration" />
    },
    {
        date: 'Dec 12 -Dec 28, 2025',
        title: 'Project Submission',
        description: 'Submit your initial project proposal and details.',
        icon: <img src="https://cdn4.iconfinder.com/data/icons/communication-616/53/67-512.png" alt="Submission" />
    },
    {
        date: 'Dec 28 - 1 Jan, 2026',
        title: 'Initial Evaluations',
        description: 'Projects are reviewed by judges.',
        icon: <img src="https://cdn-icons-png.flaticon.com/512/7650/7650845.png" alt="Evaluation" />
    },
    {
        date: 'Jan 01, 2026',
        title: 'Top 10 Announcement',
        description: 'The top 10 teams selected for the final round are announced.',
        icon: <img src="https://static.vecteezy.com/system/resources/previews/020/887/562/non_2x/announcement-icon-vector.jpg" alt="Top 10" />
    },
    {
        date: 'Yet to be Announced',
        title: 'Top 10 Teams Pitching',
        description: 'Finalists present their solutions.',
        icon: <img src="https://cdn-icons-png.flaticon.com/512/1999/1999349.png" alt="Pitching" />
    },
    {
        date: 'Yet to be Announced',
        title: 'Top 3 Announcement - Final',
        description: 'The winners of TechSprint are revealed.',
        icon: <img src="https://cdn-icons-png.flaticon.com/512/5003/5003523.png" alt="Winners" />
    },
    {
        date: 'Yet to be Announced',
        title: 'Organizer Submission',
        description: 'Submission of Top 3 Winning Teams by organizers.',
        icon: <img src="https://cdn4.iconfinder.com/data/icons/communication-616/53/67-512.png" alt="Submission" />
    }
];

const Timeline = () => {
    return (
        <div className="timeline-page">
            <div className="container section">
                <motion.h1
                    className="page-title text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Timeline <span className="text-gradient">at a Glance</span>
                </motion.h1>

                <div className="timeline-container">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-content glass-card">
                                <div className="timeline-date">
                                    <Calendar size={14} /> {event.date}
                                </div>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <div className="timeline-icon">
                                    {event.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
