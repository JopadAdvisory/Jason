import type { JSX } from "react"
import Accordion from "../components/ui/accordions";
import type { AccordionItemType } from "../components/ui/accordions";
import { motion } from "framer-motion";
import "./faq.css"

export default function FAQ(): JSX.Element {
    const data: AccordionItemType[] = [
        {
            id: 1,
            title: "Who is Jason and what is his condition?",
            content: "Jason Chukwuemeka Odunna is a young boy born on November 3, 2016, living with congenital deformities affecting both hands. His condition includes overlapping digits, joint stiffness, and restricted movement, making everyday tasks extremely difficult.",
        },
        {
            id: 2,
            title: "Why is the surgery urgent?",
            content: "Doctors recommend corrective surgery before Jason's bones grow stronger. Early intervention is critical — as he gets older, bone development will progress and limit treatment effectiveness, potentially making his condition permanent.",
        },
        {
            id: 3,
            title: "How will the donated funds be used?",
            content: "All funds raised will go directly towards Jason's corrective hand surgery, including skin graft plastic surgery, pre-operative consultations, hospital fees, post-operative care, and rehabilitation therapy.",
        },
        {
            id: 4,
            title: "How can i donate?",
            content: "You can donate via direct bank transfer to: GTBank — Account Name: Okechukwu Josiah Odunna, Account Number: 0423131865. Every contribution counts. Thank you for your support!",
        },
        {
            id: 5,
            title: "Is my donation secure and trnsparent?",
            content: "Yes. Funds go directly to the verified GTBank account. We provide regular updates on funds raised and how they are being used to ensure full transparency.",
        },
        {
            id: 6,
            title: "Can i help in ways other than donating?",
            content: "Absolutely! Sharing Jason's story on social media, WhatsApp, or with friends and family can make a huge difference. The more people who know about Jason's campaign, the closer we get to our goal.",
        },
    ]
    return (
        <section 
          className="faq-container-bg"
          aria-label="Frequently asked questions"
        >
            <div className="faq-container">
                <div className="faq-header">
                    <motion.h2 
                        className="faq-header"
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
                    >Frequently Asked Questions</motion.h2>
                    <motion.p 
                        className="faq-subtitle"
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
                    >Find answers to common questions about Jason's campaign.</motion.p>
                </div>
                <div className="accordion-container">
                    <Accordion data={data} />
                </div>
            </div>
        </section>
    )
}