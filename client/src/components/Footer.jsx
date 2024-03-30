import React from "react";

const Footer = ()=>{
    return(
        <footer className="footerContainer">
            <div className="jobSeekers">
                <p className="hp">For Job Seekers</p>
                <p className="pp">Search Job</p>
                <p className="pp">Create Free Account</p>
            </div> 
            <div className="partner">
                <p className="hp">Partner with Us</p>
                <p className="pp">Partners</p>
            </div>
            <div className="company">
                <p className="hp">Company</p>
                <p className="pp">About Us</p>
            </div>
            <div className="contact">
                <p className="hp">Contact Us</p>
                <p className="pp">Email Us</p>
                <p className="pp">Call +91 88874274</p>
            </div>
        </footer>
    )
}

export default Footer;