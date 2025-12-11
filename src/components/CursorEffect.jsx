import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CursorEffect.css';

const CursorEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add new particle
            const newParticle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };

            setParticles((prev) => [...prev.slice(-20), newParticle]); // Keep last 20 particles
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isDesktop]);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) => prev.filter((p) => Date.now() - p.id < 500)); // Remove old particles
        }, 100);
        return () => clearInterval(interval);
    }, []);

    if (!isDesktop) return null;

    return (
        <div className="cursor-effect-container">
            {/* Main Cursor */}
            <motion.div
                className="cursor-dot"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Trail Particles */}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="cursor-particle"
                        initial={{ x: particle.x, y: particle.y, opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorEffect;
