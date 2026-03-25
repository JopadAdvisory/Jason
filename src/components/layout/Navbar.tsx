import { useState, type JSX } from "react";
import { Heart, Menu, X } from "lucide-react";
import "./NavBar.css";


function NavBar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
   
   return (
        <div className="nav-container">
            <nav className="top-nav">
                <div className="top-header">
                    <p className="logo">
                        <Heart 
                          className="logo-icon" 
                          strokeWidth={3}
                        />
                        Urgent Campaign
                    </p>
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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Story</a>
                        </li>
                        <li>
                            <a href="">Donate</a>
                        </li>
                        <li>
                            <a href="">Updates</a>
                        </li>
                        <li>
                            <a href="" className="primary-btn">Donate Now</a>
                        </li>
                  </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;