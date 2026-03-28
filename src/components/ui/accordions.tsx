import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { JSX } from "react";
import "./accordion.css"
import { Minus, Plus } from "lucide-react";

export type AccordionItemType = {
    id: number,
    title: string,
    content: string
}
type AccordionProps = {
    data: AccordionItemType[];
}
export default function Accordion({ data}: AccordionProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggle = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    }
    return (
        <div className="accordion">
            {data.map((items, index) => (
                <div key={items.id} className="accordion-item">
                    <button 
                        onClick={() => toggle(index)}
                        className="accordion-title"
                        aria-expanded={activeIndex === index}
                    >
                        <span>{items.title}</span>
                        <span className="faq-icon">{activeIndex === index ? <Minus /> : <Plus /> }</span>
                    </button>

                    <AnimatePresence initial={false}>
                        {activeIndex === index && (
                            <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ overflow: "hidden" }}
                            >
                                <div className="inner-content">
                                    {items.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}