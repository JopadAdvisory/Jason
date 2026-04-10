import type { JSX } from "react"
import Accordion from "../components/ui/accordions";
import type { AccordionItemType } from "../components/ui/accordions";
import { motion } from "framer-motion";
import "./faq.css"

export default function FAQ(): JSX.Element {
    const data: AccordionItemType[] = [
        {
            id: 1,
            title: "Who is this campaign for?",
            content: "This campaign supports Jason, a young boy born with congenital deformities affecting both hands. His condition includes joint stiffness and restricted movement, making everyday tasks extremely difficult.",
        },
        {
            id: 2,
            title: "Why is the surgery urgent?",
            content: "Doctors recommend corrective surgery before his bones grow stronger. Early intervention is critical — as he gets older, bone development will progress and limit treatment effectiveness.",
        },
        {
            id: 3,
            title: "How will the donated funds be used?",
            content: "All funds raised will go directly towards corrective hand surgery, including skin grafts, pre-operative consultations, hospital fees, post-operative care, and rehabilitation therapy.",
        },
        {
            id: 4,
            title: "How can i donate?",
            content: "Click the 'Donate Now' button on this page. You'll be guided through a secure process to view verified bank transfer details. We protect payment information to prevent misuse.",
        },
        {
            id: 5,
            title: "Is my donation secure and trnsparent?",
            content: "We prioritize the safety and privacy of the child. Detailed personal information is shared only with verified donors and supporters to prevent misuse of a minor's identity.",
        },
        {
            id: 6,
            title: "Why is personal information limited on this page?",
            content: "We prioritize the safety and privacy of the child. Detailed personal information is shared only with verified donors and supporters to prevent misuse of a minor's identity.",
        },
        {
            id: 7,
            title: "Can i help in ways other than donating?",
            content: "Absolutely! Sharing this campaign on social media, WhatsApp, or with friends and family can make a huge difference. The more people who know, the closer we get to our goal.",
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
                    >Find answers to common questions about this campaign.</motion.p>
                </div>
                <div className="accordion-container">
                    <Accordion data={data} />
                </div>
            </div>
        </section>
    )
}