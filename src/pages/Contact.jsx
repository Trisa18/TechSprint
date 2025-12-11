import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container section">
                <motion.h1
                    className="page-title text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Get in <span className="text-gradient">Touch</span>
                </motion.h1>

                <div className="contact-container">
                    <motion.div
                        className="glass-card contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Contact Information</h2>
                        <p className="contact-desc">Have questions? We're here to help!</p>

                        <div className="info-item">
                            <Mail className="text-primary" />
                            <span> Email: gdgvvce@gmail.com</span>
                        </div>

                        <div className="info-item">
                            <Mail className="text-primary" />
                            <span> Email 2: gdscvvce@vvce.ac.in</span>
                        </div>

                        <div className="info-item">
                            <MapPin className="text-primary" />
                            <span>Vidyavardhaka college of engineering, M Block</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass-card contact-visual-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
                    >
                        <img src="\contact-visual.png" alt="Contact Visual" style={{ width: '100%', borderRadius: '12px' }} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
