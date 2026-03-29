import type { JSX } from "react";
import "./medicals.css";
import { motion } from "framer-motion";
import { Hand, Stethoscope, Syringe, TriangleAlert } from "lucide-react";

export default function Medicals(): JSX.Element {
    return (
        <section 
            className="med-bg" 
            id="medical"
            aria-label="Medical information on Jason verified by a medical staff"
        >
            <div className="med-container">
                <div className="med-header">
                    <motion.h1 
                        className="med-header"
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
                    >Medical Information</motion.h1>
                    <motion.p 
                        className="med-subtitle"
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
                    >Verified by the attending medical team</motion.p>
                </div>
                <div className="med-cards">
                    <motion.div 
                        className="med-card"
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
                        <Stethoscope className="med-icon"/>
                        <h4>Diagnosis</h4>
                        <p>
                            Congenital deformities affecting both hands, including overlapping digits, joint stiffness, and restricted movement.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="med-card"
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
                        <Hand className="med-icon"/>
                        <h4>Impact</h4>
                        <p>
                            Difficulty performing everyday tasks such as writing, gripping, and coordinated hand movement — limiting Jason's independence.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="med-card"
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
                        <Syringe className="med-icon"/>
                        <h4>Treatment</h4>
                        <p>
                            Corrective hand surgery, including skin graft plastic surgery, to improve alignment, mobility, and functionality.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="med-card"
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
                        <TriangleAlert className="med-icon" />
                        <h4>Urgency</h4>
                        <p>
                            The procedure must be performed early before bone development progresses and limits treatment effectiveness.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}