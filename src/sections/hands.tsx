import type { JSX } from "react";
import HandOne from "../assets/images/2.webp";
import HandTwo from "../assets/images/4.webp";
import HandThree from "../assets/images/9.webp";
import HandFour from "../assets/images/5.webp";
import { motion } from "framer-motion";
import "./hands.css";

export default function Hands(): JSX.Element {
    return (
        <section 
            aria-label="Jason's hands"
            className="hands-bg"
        >
            <div className="hands-container">
                <div className="hands-header">
                    <motion.h1 
                        className="hands-heading"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }}  
                    >Jason's hands</motion.h1>
                    <motion.p 
                        className="hands-subtitle"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }}  
                    >Help Jason regain the use of his hands — your support can give him a brighter future.</motion.p>
                </div>
                <div className="hands-img-container">
                    <motion.div 
                        className="hand-image-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }}  
                    >
                        {/* <img 
                          src={HandOne} 
                          alt="First picture of jason's hands" 
                          loading="lazy"
                          className="hand-image" 
                        /> */}
                    </motion.div>
                    <motion.div 
                        className="hand-image-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }}  
                    >
                        <img 
                          src={HandTwo} 
                          alt="Second picture of Jason's hands" 
                          loading="lazy"
                          className="hand-image" 
                        />
                    </motion.div>
                    <motion.div 
                        className="hand-image-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }}  
                    >
                        <img 
                          src={HandThree} 
                          alt="Third Picture of Jason's hands" 
                          loading="lazy"
                          className="hand-image" />
                    </motion.div>
                    <motion.div 
                        className="hand-image-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0}}
                        layout
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ layout: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        },
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        mass: 1.2
                        }}  
                    >
                        <img 
                          src={HandFour} 
                          alt="Fourth picture of Jason's hands" 
                          loading="lazy"
                          className="hand-image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}