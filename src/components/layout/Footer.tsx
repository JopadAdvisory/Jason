import type { JSX } from "react";
import "./Footer.css";
import { Copyright, Heart, Mail, Phone } from "lucide-react";

export default function Footer(): JSX.Element {
    const today: Date = new Date();
    const year: number = today.getFullYear();
    return (
        <div className="footer-container-bg">
            <div className="footer-container">
                <div className="columns">
                    <div className="column-one">
                        <a href="#home" className="footer-logo">
                            <h4 className="column-header">
                                <Heart 
                                    strokeWidth={3}
                                    className="footer-icon first" 
                                />
                                Urgent Campaign
                            </h4>
                        </a>
                        <p>
                            A community-driven campaign to fund Jason's corrective hand surgery and give him a brighter future.
                        </p>
                    </div>
                    <nav className="column-two">
                        <h5 className="column-header">Quick Links</h5>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#story">Story</a></li>
                            <li><a href="#medical">Medical Info</a></li>
                            <li><a href="#update">Updates</a></li>
                            <li><a href="#donate">Donate Now</a></li>
                        </ul>
                    </nav>
                    <div className="column-three">
                        <h5 className="column-header">Contact</h5>
                        <a  
                            href="mailto:ojo370@gmail.com"
                            className="contact mail"
                        >
                            <Mail className="contact-icon" />
                            <span>jopadvirtual247@gmail.com</span>
                        </a>
                        <p className="contact">
                            <Phone className="contact-icon" />
                            <span>08092577770 | 08068910387</span>
                        </p>
                    </div>
                </div>
                <div className="copy-container">
                    <p className="copy">
                        <Copyright className="copy-icon" />
                        <span>
                            {year + " "}
                            Help Jason Campaign. All rights reserved.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}