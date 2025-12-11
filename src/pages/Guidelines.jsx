import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Code, Video, Github, Layers, PenTool, Globe } from 'lucide-react';
import './Guidelines.css';

const Guidelines = () => {
    return (
        <div className="guidelines-page">
            <div className="container section">
                <motion.h1
                    className="page-title text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Rules & <span className="text-gradient">Guidelines</span>
                </motion.h1>

                <div className="guidelines-content">
                    <motion.div
                        className="glass-card rules-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2><CheckCircle size={24} /> General Rules</h2>
                        <ul className="rules-list">
                            <li>Projects created after <strong>1st December, 2025</strong> will be accepted for submission.</li>
                            <li><strong>Language Requirement:</strong> All submission materials (code, documentation, presentations) must be in <strong>English</strong>.</li>
                            <li>Teams can have 2-4 members.</li>
                            <li>Google Technology (Mandatory Requirement)
                                Participants must integrate at least one Google technology in their solution.This includes tools such as Google Gemini,Google Al Studio ,Firebase, Google Cloud Platform, Other relevant Google technologies.</li>
                            <li>Participants must clearly demonstrate how these technologies are incorporated into their solution.</li>

                        </ul>

                        <div className="template-link-wrapper">
                            <a href="https://vision.hack2skill.com/event/gdgoc-25-vvce-hacktechsprint" className="btn btn-outline template-btn">
                                Click Here to register
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass-card deliverables-section"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2><FileText size={24} /> Project Submission</h2>
                        <p className="mb-4 text-muted">Participants must submit the following as part of their project:</p>

                        <div className="deliverable-item">
                            <FileText size={20} className="text-primary" />
                            <div>
                                <h3>Project Deck/Presentation</h3>
                            </div>
                        </div>
                        <div className="deliverable-item">
                            <Globe size={20} className="text-primary" />
                            <div>
                                <h3>Minimum Viable Product Link</h3>
                            </div>
                        </div>
                        <div className="deliverable-item">
                            <Video size={20} className="text-primary" />
                            <div>
                                <h3>Three-Minute Demo Video</h3>
                            </div>
                        </div>
                        <div className="deliverable-item">
                            <Github size={20} className="text-primary" />
                            <div>
                                <h3>GitHub Repository Link</h3>
                            </div>
                        </div>
                        <div className="deliverable-item">
                            <Layers size={20} className="text-primary" />
                            <div>
                                <h3>List of Google Technologies Used</h3>
                                <p className="text-sm text-primary">Mandatory use of one Google Tech</p>
                            </div>
                        </div>
                        <div className="deliverable-item">
                            <Code size={20} className="text-primary" />
                            <div>
                                <h3>List of Google AI Tools Integrated</h3>
                            </div>
                        </div>
                        <div className="deliverable-item">
                            <PenTool size={20} className="text-primary" />
                            <div>
                                <h3>Solution Description (100 Words)</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Guidelines;
