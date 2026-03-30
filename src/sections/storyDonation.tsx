import { Check, Copy, Heart, ReceiptText } from "lucide-react";
import StoryImage from "../assets/images/6.webp";
import FormImage from "../assets/images/5.webp"
import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import "./storyDonation.css";



export default function StoryDonation(): JSX.Element {
   const [copied, setCopied] = useState<boolean>(false);

   const handleCopy = async (): Promise<void> => {
    const accountNumber = "0423131865";
    try {
        await navigator.clipboard.writeText(accountNumber);
        setCopied(true);

        setTimeout((): void => {
            setCopied(false);
        }, 2000);
    } catch (error) {
        console.error("copy failed:", error);
    }
   };

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
                        <div className="gtb-account">
                           <div className="bank-text">
                                <h4>
                                    <ReceiptText size={18}/>
                                    <span>Bank Transfer Details</span>
                                </h4>
                                <p className="bank">Bank: <span className="property">GTBank (Guaranty Trust)</span></p>
                                <p className="name">Account Name: <span className="property">Jason Chukwuemeka Odunna</span></p>
                                <p className="bank-number">
                                    <span>Account No: <span className="property">0423131865</span></span>
                                    <button 
                                        className="copy-btn"
                                        onClick={handleCopy} 
                                        type="button"
                                        >
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                        <span>{copied ? "Copied" : "Copy"}</span>
                                    </button>
                                </p>
                           </div>
                        </div>
                       
                        <p className="secure">Transfer directly to the verified GTBank account above. Every naira counts.</p>
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