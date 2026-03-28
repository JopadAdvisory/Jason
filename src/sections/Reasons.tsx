import type { JSX } from "react";
import "../sections/reasons.css";
import { Clock, HeartHandshake, Shield } from "lucide-react";

export default function Reasons(): JSX.Element {
    return (
        <section 
            aria-label="Reasons to help Jason"
            className="reasons-container"
        >
            <h1 className="reasons-header">Why Jason Needs Your Help</h1>
            <p className="reasons-subtitle">
                Born on November 3, 2016, Jason is a determined boy who deserves the chance to use his hands freely. Your support can make that possible.
            </p>
            <div className="card-container">
                <div className="card">
                    <div className="icon-container">
                        <HeartHandshake className="reasons-icon"/>
                    </div>
                    <h4>A Brave Young Boy</h4>
                    <p>
                        Jason Chukwuemeka Odunna is a bright and resilient young boy whose life has been shaped by a congenital condition affecting both hands.
                    </p>
                </div>

                <div className="card">
                    <div className="icon-container">
                        <Clock className="reasons-icon"/>
                    </div>
                    <h4>Daily Struggles</h4>
                    <p>
                        He faces daily challenges with writing, gripping objects, and performing basic tasks most children take for granted.
                    </p>
                </div>

                <div className="card">
                    <div className="icon-container">
                        <Shield className="reasons-icon"/>
                    </div>
                    <h4>Hope Through Surgery</h4>
                    <p>
                        With timely corrective surgery, Jason has a strong chance at gaining functional use of his hands and living independently.
                    </p>
                </div>
            </div>
        </section>
    )
}