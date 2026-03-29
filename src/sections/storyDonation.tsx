import { Heart } from "lucide-react";
import StoryImage from "../assets/images/6.webp";
import FormImage from "../assets/images/5.webp";
import React, { useState } from "react";
import type { JSX } from "react";
import { motion } from "framer-motion";
import "./storyDonation.css";

export default function StoryDonation(): JSX.Element {
    const [ amount, setAmount ] = useState<number>(0);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(Number(e.target.value));
    }

    return (
        <section 
            aria-label="Jason's story and donation payment section"
            className="story-donation-bg"
        >
            <div className="ds-container">
                <div className="story-container" id="story">
                    <motion.div
                        className="story-image-container"
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
                          src={StoryImage} 
                          alt="A picture of jason smiling" 
                          loading="lazy"
                          className="story-image" 
                        />
                    </motion.div>
                    <div>
                        <motion.h1 
                            className="story-header"
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
                        >Jason's Story</motion.h1>
                        <motion.p 
                            className="first-story"
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
                            Despite his condition, Jason is intelligent, confident, and full of life. His strength and determination inspire everyone around him.
                        </motion.p>

                        <motion.p 
                            className="second-story"
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
                            But without surgery, his condition may become permanent as he grows older. The window for effective treatment is narrowing, and Jason's family needs your help to give him the future he deserves.
                        </motion.p>
                        {/* <motion.a 
                            href="" className="full-story"
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
                        >Read Full Story →</motion.a> */}
                    </div>
                </div>

                <div className="form-container" id="donate">
                    <motion.div 
                        className="donation-container"
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
                        <div className="donation-header">
                            <Heart className="donation-icon"/>
                            <h2>Make a Donation</h2>
                            <p>
                                Every contribution brings Jason closer to independence
                            </p>
                        </div>
                        <div className="donation-btns">
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(5_000)}
                            >₦5,000</button>
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(10_000)}
                            >₦10,000</button>
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(20_000)}
                            >₦20,000</button>
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(50_000)}
                            >₦50,000</button>
                        </div>
                        <input 
                            type="number"
                            min="100"
                            max="10_000_000"
                            name="donationAmount"
                            value={amount || ""}
                            placeholder="Enter custom amount (₦)"
                            onChange={handleChange}
                        />
                        <button className="submit primary-btn">Donate ₦{amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}</button>
                        <p className="secure">Payments secured via Paystack. Your details are safe.</p>
                    </motion.div>
                    <motion.div 
                        className="form-image-container"
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
                          className="form-image" 
                          loading="lazy"
                          src={FormImage} alt="A picture of jason's hand" 
                        />
                    </motion.div>
                </div> 
                    
            </div>
        </section>
    )
}