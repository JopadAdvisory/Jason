import type { JSX } from "react";
import "./medicals.css";
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
                    <h1 className="med-header">Medical Information</h1>
                    <p className="med-subtitle">Verified by the attending medical team</p>
                </div>
                <div className="med-cards">
                    <div className="med-card">
                        <Stethoscope className="med-icon"/>
                        <h4>Diagnosis</h4>
                        <p>
                            Congenital deformities affecting both hands, including overlapping digits, joint stiffness, and restricted movement.
                        </p>
                    </div>
                    <div className="med-card">
                        <Hand className="med-icon"/>
                        <h4>Impact</h4>
                        <p>
                            Difficulty performing everyday tasks such as writing, gripping, and coordinated hand movement — limiting Jason's independence.
                        </p>
                    </div>
                    <div className="med-card">
                        <Syringe className="med-icon"/>
                        <h4>Treatment</h4>
                        <p>
                            Corrective hand surgery, including skin graft plastic surgery, to improve alignment, mobility, and functionality.
                        </p>
                    </div>
                    <div className="med-card">
                        <TriangleAlert className="med-icon" />
                        <h4>Urgency</h4>
                        <p>
                            The procedure must be performed early before bone development progresses and limits treatment effectiveness.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}