import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './BackgroundEffect.css';

const BackgroundEffect = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Parallax transforms - different speeds and directions
    const yPink = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yTeal = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const yPurple = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const yOrange = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div className="background-effect-container" ref={ref}>
            {/* Pink Planet */}
            <motion.div
                className="planet planet-pink"
                style={{ y: yPink }}
                animate={{
                    rotate: 360,
                    x: [0, 20, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                    x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
            />

            {/* Teal Planet */}
            <motion.div
                className="planet planet-teal"
                style={{ y: yTeal }}
                animate={{
                    rotate: -360,
                    x: [0, -30, 0],
                }}
                transition={{
                    rotate: { duration: 150, repeat: Infinity, ease: "linear" },
                    x: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                }}
            />

            {/* Purple Planet */}
            <motion.div
                className="planet planet-purple"
                style={{ y: yPurple }}
                animate={{
                    y: [0, -40, 0],
                    rotate: 180
                }}
                transition={{
                    y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 200, repeat: Infinity, ease: "linear" }
                }}
            />

            {/* Orange Planet */}
            <motion.div
                className="planet planet-orange"
                style={{ y: yOrange }}
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 40, 0]
                }}
                transition={{
                    scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 18, repeat: Infinity, ease: "easeInOut" }
                }}
            />

            <div className="stars"></div>
        </div>
    );
};

export default BackgroundEffect;
