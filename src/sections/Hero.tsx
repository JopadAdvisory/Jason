import { LucideHeart } from "lucide-react";
import HeroImage from "../assets/images/1.webp";
import type { JSX } from "react";
import "./Hero.css";
import { Button } from "../components/ui/buttons";

function Hero(): JSX.Element {
    return (
        <div className="hero-bg">
            <div className="hero-content">
                <div className="bg-container" aria-hidden="true">
                    <span className="desktop-bg"></span>
                </div>
                <div className="content-container">
                    <div className="img-container">
                        <img src={HeroImage} alt="Jason smiling with his family" className="hero-image" />
                    </div>
                    <h4 className="hero-header">
                        <LucideHeart className="hero-icon" strokeWidth={2} />
                        Urgent Campaign
                    </h4>
                    <h1 className="hero-heading">Help Jason Use His Hands Again</h1>
                    <p className="hero-subtitle">
                        Jason was born with congenital deformities affecting both hands, making everyday tasks a struggle. He urgently needs corrective surgery to live a normal, independent life.
                    </p>
                    <p className="hero-sub">
                        Doctors recommend surgery before his bones grow stronger — early intervention is critical for success.
                    </p>
                    <div className="btn-container">
                        <Button
                            href="https://www.gofundme.com/f/help-jason-use-his-hands-again"
                            className="primary-btn"
                        >
                            Donate Now
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;