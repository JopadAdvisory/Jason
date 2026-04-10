import React, {  type JSX } from "react";
import "./modal.css";
import { Link, X } from "lucide-react";
import { BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";

type Props = {
    isOpen: boolean;
    confirmationOpen?: boolean;
    head?: React.ReactNode;
    confirmBody?: () => JSX.Element;
    body?: () => JSX.Element;
    onClose: () => void;
    confirmClose?: () => void;
}

function ShareModal({ isOpen, onClose }: Props): JSX.Element | null {
    const url = window.location.href;
    const message = `🙏 Help Give Jason a Chance at a Normal Life
    
Jason is a strong young boy born with hand deformities. Surgery can restore his hands, but time is running out.

Please support or share ❤️

${url}`;

    const encoded = encodeURIComponent(message);

    const links = {
        whatsapp: `https://wa.me/?text=${encoded}`,
        twitter: `https://twitter.com/intent/tweet?text=${encoded}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };

    const handleCopy = async () => {
        navigator.clipboard.writeText(message);
        alert("Copied! Share the message to help Jason's campaign.");
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h4>Share This Campaign</h4>
                    <p>Help spread the word — every share counts!</p>
                </div>
                <div className="modal-buttons">
                    <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="modal-button whatsapp">
                        <BsWhatsapp size={25} />
                        WhatsApp
                    </a>
                    <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="modal-button twitter">
                        <BsTwitterX  size={25}/>
                        Twitter
                    </a>
                    <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="modal-button facebook">
                        <BsFacebook size={25} />
                        Facebook
                    </a>
                    <button onClick={handleCopy}    className="modal-button copy">
                        <Link />
                        Copy Link
                    </button>
                    <button onClick={onClose}    className="modal-button exit">
                        <X />
                    </button>
                </div>
            </div>
        </div>
    )
 }

function DetailsModal({ 
    isOpen, 
    onClose, 
    confirmClose, 
    confirmationOpen, 
    head, 
    confirmBody,
    body 
}: Props): JSX.Element | null {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    {
                        confirmationOpen ?
                            <h4>Confirm Your Intent</h4> :
                            <h4>{head}</h4>
                    }
                </div>
                <div className="modal-body">
                    {
                        confirmationOpen ?
                            <p>{confirmBody?.()}</p>:
                            <p>{body?.()}</p>
                    }
                </div>
                <div className="modal-buttons">
                    { confirmationOpen &&
                        <>
                            <button onClick={onClose}    className="secondary-btn cancel">
                                Cancel
                            </button>
                            <button onClick={confirmClose}    className="primary-btn cancel">
                                Yes, show Details
                            </button>
                        </>
                    }
                    <button onClick={onClose}    className="modal-button exit">
                        <X />
                    </button>
                </div>
            </div>
        </div>
    )
 }

 export { ShareModal, DetailsModal };