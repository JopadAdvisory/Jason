import {  CalendarRange, Target, TrendingUp, Users } from "lucide-react";
import { useProgressStore } from "../progressStore";
import Progress from "../components/ui/progress";
import { motion } from "framer-motion";
import "./updates.css";


export default function Update() {
    const raised = useProgressStore((state) => state.raised);
    const goal = useProgressStore((state) => state.goal);
    const donors = useProgressStore((state) => state.donors);
    return (
        <section 
          className="progress-update-bg" 
          id="update"
          aria-label="Updates regarding jason's donation"
        >
            <div className="progress-header">
                <motion.h1 
                    className="update-heading"
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
                >Campaign Progress</motion.h1>
                <motion.p 
                    className="update-subtitle"
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
                >Stay informed on Jason's journey with full transparency on every naira raised</motion.p>
            </div>
            <div className="wr">
                <motion.div 
                    className="progress-update-container"
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
                    <div className="pro-bg">
                        <div className="pro-header">
                            <div className="goal">
                                <Target className="u-icon" />
                                <p className="number">
                                    ₦
                                    {
                                    goal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
                                    }
                                </p>
                                <p className="text">Goal</p>
                            </div>

                            <div className="rai">
                                <TrendingUp className="u-icon" />
                                <p className="number">
                                    ₦
                                    {
                                    raised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "
                                    }
                                </p>
                                <p className="text">Raised</p>
                            </div>

                            <div className="donors">
                                <Users className="u-icon" />
                                <p className="number">
                                    {
                                    donors
                                    }
                                </p>
                                <p className="text">Donors</p>
                            </div>
                        </div>
                        <Progress />
                    </div>
                </motion.div>

                <div className="updates container">
                    <div className="progress-header ol">
                        <motion.h1
                            className="update-heading"
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
                        >Recent Updates</motion.h1>
                        <motion.p 
                            className="update-subtitle"
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
                        >Stay informed on Jason's journey</motion.p>
                    </div>
                    <div className="diff-updates">
                        <motion.div 
                            className="update-card"
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
                            <p className="date">
                                <CalendarRange className="date-icon"/>
                                March 15, 2026
                            </p>
                            <p className="update-text">
                                Jason's initial consultation with the surgical team is complete. Doctors have outlined the corrective procedure plan.
                            </p>
                        </motion.div>
                        <motion.div 
                            className="update-card"
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
                            <p className="date">
                                <CalendarRange className="date-icon"/>
                                March 8, 2026
                            </p>
                            <p className="update-text">
                                We've reached 20% of our goal! Thank you to all 94 donors who have contributed so far.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}