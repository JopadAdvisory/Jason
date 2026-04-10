import { useState, type JSX } from "react";
import "./Footer.css";
import { Copyright, Heart, Mail, Phone } from "lucide-react";
import { DetailsModal } from "../ui/modal";

export default function Footer(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const [confirm, setConfirm] = useState<boolean>(true);

    const today: Date = new Date();
    const year: number = today.getFullYear();

    const parts: string[] = ["jopad", "gmail", "virtual", "247", "com"];

    const email: string = `${parts[0] + parts[2] + parts[3]}@${parts[1]}.${parts[4]}`;

    const ConfirmBody = () => {
        return (
            <div className="confirm">
                <p className="confirm-text">
                    To protect the privacy of the beneficiary, 
                    contact details are only revealed to genuine supporters. 
                    By proceeding, you confirm your intent to make a donation.
                </p>
            </div>
        )
    }

    const Body = () => {
        return (
            <div className="confirm-con">
                <div className="gtb-account">
                    <div className="bank-text">
                        <a className="contact mai " href="mailto:{email}">
                            <Mail className="contact-icon" />
                            <span>{email}</span>
                        </a>
                        <p className="contact">
                            <Phone className="contact-icon" />
                            <span>08092577770 | 08068910387</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
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
                            <li><a href="#medical">Medical Info</a>
                            </li><li><a href="#update">Updates</a></li>
                            <li><a href="#donate">Donate Now</a></li>
                        </ul>
                    </nav>
                    <div className="column-three">
                        <h5 className="column-header">Contact</h5>
                        <button
                            className="contact mail"
                            onClick={() => setOpen(true)}
                        >
                            <Mail className="contact-icon" />
                            <span>Email</span>
                        </button>
                        <button onClick={() => setOpen(true)} className="contact">
                            <Phone className="contact-icon" />
                            <span>Phone Number</span>
                        </button>
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
                <DetailsModal 
                    isOpen={open}
                    onClose={() => {
                        setOpen(false)
                        setConfirm(true)
                    }}
                    confirmationOpen={confirm}
                    confirmClose={() => setConfirm(false)}
                    head={"Contact Details"}
                    confirmBody={ConfirmBody}
                    body={Body}
                />
            </div>
        </div>
    )
}