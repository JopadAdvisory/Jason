import { useState, type JSX } from "react";
import { Heart, Menu, X } from "lucide-react";
import "./NavBar.css";
import { Button } from "../ui/buttons";


function NavBar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
   
   return (
        <div>
            <div className="nav-container">
                <nav className="top-nav">
                    <div className="top-header">
                        <a className="logo-link" href="#home">
                            <h4 className="logo">
                                <Heart 
                                className="logo-icon" 
                                strokeWidth={3}
                                />
                                Urgent Campaign
                        </h4>
                        </a>
                        <button
                        className="nav-btn"
                        aria-label="Toggle Menu"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X  className="nav-icon" /> : <Menu className="nav-icon" />}
                        </button>
                    </div>
                    <div className="top-body">
                        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#story">Story</a>
                            </li>
                            <li>
                                <a href="#medical">Medical Info</a>
                            </li>
                            <li>
                                <a href="#update">Updates</a>
                            </li>
                            <li>
                                <a href="#donate" className="primary-btn">Donate Now</a>
                            </li>
                    </ul>
                    </div>
                </nav>
            </div>
            <div className="bottom-cta">
                <Button
                    className="primary-btn bottom-btn"
                    href="#donate"
                >
                    <Heart 
                        className="bottom-icon"
                        strokeWidth={3} 
                    />
                    Donate Now
                </Button>
            </div>
        </div>
    )
}

export default NavBar;