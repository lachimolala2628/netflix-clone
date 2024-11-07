import React from 'react'
import './Footer.css'
import YouTube from '../../assets/youtube_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Instagram from '../../assets/instagram_icon.png'
import Facebook from '../../assets/facebook_icon.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="footer-icons">
                    <img src={YouTube} alt="Youtube-Logo" />
                    <img src={Instagram} alt="Instagram-Logo" />
                    <img src={Facebook} alt="Facebook-Logo" />
                    <img src={Twitter} alt="Twitter-Logo" />
                </div>
                <ul>
                    <li>Audio Description</li>
                    <li>Help Center</li>
                    <li>Gift Cards</li>
                    <li>Media Center</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Cookie Preference</li>
                    <li>Corporate Information</li>
                    <li>Contact Us</li>
                </ul>
                <p className='copyright'>
                    &copy; 1997 - 2024 Netflix, Inc.
                </p>
            </div>
        </>
    )
}

export default Footer