import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Heart, Shield, Truck, School, Users } from 'lucide-react';
import './ProblemStatement.css';

const problems = [
    {
        title: 'City Services Optimization',
        description: 'Optimize city services like garbage collection or traffic flow to improve urban living.',
        icon: <img src="https://www.creatoriq.com/hubfs/Measure-Dark-2.png" alt="City Services" />
    },
    {
        title: 'Healthcare & Education Access',
        description: 'Improve access to healthcare or education in underserved areas using technology.',
        icon: <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/health-education-6320568-5291129.png" alt="Healthcare" />
    },
    {
        title: 'Sustainability',
        description: 'Promote sustainability, such as reducing energy consumption or encouraging recycling.',
        icon: <img src="https://img.freepik.com/premium-vector/ecology-icons-icon-broken-line_1076610-11083.jpg?w=2000" alt="Sustainability" />
    },
    {
        title: 'Community Engagement',
        description: 'Enhance community engagement or safety through smart apps or platforms.',
        icon: <img src="https://cdn-icons-png.freepik.com/512/14931/14931655.png" alt="Community" />
    }
];

const ProblemStatement = () => {
    return (
        <div className="problems-page">
            <div className="container section">
                <motion.h1
                    className="page-title text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Problem <span className="text-gradient">Statement</span>
                </motion.h1>

                <motion.div
                    className="glass-card main-problem-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="main-problem-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/9594/9594704.png" alt="Brain" className="text-primary" />
                        <h2>Open Innovation</h2>
                    </div>
                    <p className="main-problem-desc">
                        Participants should identify a local problem—such as traffic management, waste disposal, or access to education—and build solutions using Google technologies to solve it or address pressing social issues around them.
                    </p>
                    <p className="main-problem-note">
                        Participants are free to explore other pressing social issues in their communities and build solutions for them using Google technologies.
                    </p>
                </motion.div>

                <h2 className="section-title text-center mt-5">Here are a few ideas...</h2>

                <div className="problems-grid">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            className="glass-card problem-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="problem-icon-wrapper">
                                {problem.icon}
                            </div>
                            <h3>{problem.title}</h3>
                            <p>{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemStatement;
