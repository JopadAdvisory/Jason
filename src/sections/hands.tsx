import type { JSX } from "react";
import HandOne from "../assets/images/2.webp";
import HandTwo from "../assets/images/4.webp";
import HandThree from "../assets/images/9.webp";
import HandFour from "../assets/images/5.webp";
import "./hands.css";

export default function Hands(): JSX.Element {
    return (
        <div className="hands-bg">
            <div className="hands-container">
                <div className="hands-header">
                    <h1 className="hands-heading">Jason's hands</h1>
                    <p className="hands-subtitle">Help Jason regain the use of his hands — your support can give him a brighter future.</p>
                </div>
                <div className="hands-img-container">
                    <div className="hand-image-container">
                        <img 
                          src={HandOne} 
                          alt="First picture of jason's hands" 
                          loading="lazy"
                          className="hand-image" 
                        />
                    </div>
                    <div className="hand-image-container">
                        <img 
                          src={HandTwo} 
                          alt="Second picture of Jason's hands" 
                          loading="lazy"
                          className="hand-image" 
                        />
                    </div>
                    <div className="hand-image-container">
                        <img 
                          src={HandThree} 
                          alt="Third Picture of Jason's hands" 
                          loading="lazy"
                          className="hand-image" />
                    </div>
                    <div className="hand-image-container">
                        <img 
                          src={HandFour} 
                          alt="Fourth picture of Jason's hands" 
                          loading="lazy"
                          className="hand-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}