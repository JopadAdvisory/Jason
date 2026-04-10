import type { JSX } from "react";
import "../sections/reasons.css";
import { Clock, HeartHandshake, Shield } from "lucide-react";
import {  motion } from "framer-motion";

export default function Reasons(): JSX.Element {
    return (
        <section 
            aria-label="Reasons to help Jason"
            className="reasons-container"
            
        >
            <div>
                <motion.h1 
                    className="reasons-header"
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
                >Why Jason Needs Your Help</motion.h1>
                <motion.p 
                    className="reasons-subtitle"
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
                >
                   Jason is a determined young boy who deserves the chance to use his hands freely. Your support can make that possible.
                </motion.p>
            </div>
            <div className="card-container">
                <motion.div 
                    className="card"
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
                    <div className="icon-container">
                        <HeartHandshake className="reasons-icon"/>
                    </div>
                    <h4>A Brave Young Boy</h4>
                    <p>
                       Jason is a bright and resilient child whose life has been shaped by a congenital condition affecting both hands since birth.
                    </p>
                </motion.div>

                <motion.div 
                    className="card"
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
                    <div className="icon-container">
                        <Clock className="reasons-icon"/>
                    </div>
                    <h4>Daily Struggles</h4>
                    <p>
                        He faces daily challenges with writing, gripping objects, and performing basic tasks most children take for granted.
                    </p>
                </motion.div>

                <motion.div 
                    className="card"
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
                    
                    <div className="icon-container">
                        <Shield className="reasons-icon"/>
                    </div>
                    <h4>Hope Through Surgery</h4>
                    <p>
                        With timely corrective surgery, Jason has a strong chance at gaining functional use of his hands and living independently.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}