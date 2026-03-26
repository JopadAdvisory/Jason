import { Heart } from "lucide-react";
import StoryImage from "../assets/images/6.webp";
import FormImage from "../assets/images/5.webp";
import React, { useState } from "react";
import type { JSX } from "react";
import "./storyDonation.css";

export default function StoryDonation(): JSX.Element {
    const [ amount, setAmount ] = useState<number>();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(Number(e.target.value));
    }

    return (
        <div className="story-donation-bg">
            <div className="ds-container">
                <div className="story-container">
                    <div className="story-image-container">
                        <img src={StoryImage} alt="A picture of jason smiling" className="story-image" />
                    </div>
                    <h1 className="story-header">Jason's Story</h1>
                    <p className="first-story">
                        Despite his condition, Jason is intelligent, confident, and full of life. His strength and determination inspire everyone around him.
                    </p>

                    <p className="second-story">
                        But without surgery, his condition may become permanent as he grows older. The window for effective treatment is narrowing, and Jason's family needs your help to give him the future he deserves.
                    </p>
                    <a href="" className="full-story">Read Full Story →</a>
                </div>

                <div className="form-container">
                    <div className="donation-container">
                        <div className="donation-header">
                            <Heart className="donation-icon"/>
                            <h2>Make a Donation</h2>
                            <p>
                                Every contribution brings Jason closer to independence
                            </p>
                        </div>
                        <div className="donation-btns">
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(5_000)}
                            >₦5,000</button>
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(10_000)}
                            >₦10,000</button>
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(20_000)}
                            >₦20,000</button>
                            <button 
                                className="donation-btn"
                                onClick={() => setAmount(50_000)}
                            >₦50,000</button>
                        </div>
                        <input 
                            type="number"
                            name="donationAmount"
                            value={amount || ""}
                            placeholder="Enter custom amount (₦)"
                            onChange={handleChange}
                        />
                        {
                            (amount ?? 0) < 100
                            ? <button className="submit primary-btn" disabled>Donate ₦{amount}</button>
                            : <button className="submit primary-btn">Donate ₦{amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " "}</button>
                        }
                        <p className="secure">Payments secured via Paystack. Your details are safe.</p>
                    </div>
                    <div className="form-image-container">
                        <img className="form-image" src={FormImage} alt="A picture of jason's hand" />
                    </div>
                </div> 
                    
            </div>
        </div>
    )
}