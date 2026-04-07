import HeroImage from "../assets/images/1.webp";
import type { JSX } from "react";
import { Button } from "../components/ui/buttons";
import Progress from "../components/ui/progress";
import { Share2 } from "lucide-react";
import ShareModal from "../components/ui/modal";
import { useState } from "react";
import "./Hero.css";

function Hero(): JSX.Element {
    const [open, setOpen] = useState(false);

    return (
        <section 
            aria-label="Hero section showing Jason and general summary of the page"
            className="hero-bg" 
            id="home"
        >
            <div className="hero-content">
                <div className="content-container">
                    <div className="img-container">
                        <img 
                          src={HeroImage} 
                          alt="Jason smiling with his family" 
                          loading="lazy"
                          fetchPriority="high"
                          className="hero-image" 
                        />
                    </div>
                    <h1 className="hero-heading">Help Jason Use His Hands Again</h1>
                    <p className="hero-subtitle">
                        Jason was born with congenital deformities affecting both hands, making everyday tasks a struggle. He urgently needs corrective surgery to live a normal, independent life.
                    </p>
                    <p className="hero-sub">
                        Doctors recommend surgery before his bones grow stronger — early intervention is critical for success.
                    </p>
                    <div className="hero-btn-container">
                        <Button
                            href="#donate"
                            className="primary-btn hero-btn1"
                        >
                            Donate Now
                        </Button>
                        <button
                            className="secondary-btn hero-btn2"
                            onClick={() => setOpen(true)}
                        >
                            <Share2 />
                            Share Campaign
                        </button>
                    </div>
                    <div className="progress-container">
                        <Progress 
                          barHeader="bar-head"
                          percent="percent"
                          raise="raise"
                        />
                    </div>
                    <ShareModal isOpen={open} onClose={() => setOpen(false)} />
                </div>
            </div>
        </section>
    )
}

export default Hero;