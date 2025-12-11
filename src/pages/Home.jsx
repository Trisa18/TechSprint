import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info, Calendar, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-glow"></div>
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                    

                        <h1 className="hero-title">
                            <span className="text-gradient">TechSprint</span>
                        </h1>

                        <p className="hero-tagline">
                            Leveraging the power of AI
                        </p>

                        <p className="hero-description">
                            Join us for the TechSprint hackathon to build the future of AI.
                            Innovate, collaborate, and create solutions that matter.
                        </p>

                        <div className="hero-buttons">
                            <a href="https://vision.hack2skill.com/event/gdgoc-25-vvce-hacktechsprint" className="btn btn-primary">
                                Register Now <ArrowRight size={18} />
                            </a>
                            <Link to="/about" className="btn btn-outline">
                                Learn More <Info size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="https://i.pinimg.com/736x/2f/5f/3a/2f5f3a4b9e869605169a52bb8e3d8864.jpg"
                            alt="TechSprint Hero"
                            className="hero-image"
                            style={{
                                width: '100%',
                                maxWidth: '350px',
                                height: 'auto',
                                borderRadius: '24px',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="section about-teaser">
                <div className="container">
                    <motion.div
                        className="glass-card about-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-content">
                            <h2 style={{ color: '#f4ecf0ff' }}>About The Event</h2>
                            <p>
                                TechSprint is the premier hackathon for student developers.
                                We bring together the brightest minds to solve real-world problems using Artificial Intelligence.
                            </p>
                            <Link to="/about" className="link-arrow">
                                Read full details <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
