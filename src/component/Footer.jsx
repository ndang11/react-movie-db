import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer-detail">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Careers</p>
            </div>
            <div className="detail-2">
                <h4>Need Help</h4>
                <p>Visit Help Center?</p>
                <p>Share Feedback</p>
            </div>
            <div className="detail-3">
                <h4>View Website In</h4>
                <span>English</span>
            </div>
            <div className="detail-4">
                <h4>Social Media</h4>
                <img src='/images/instagram 1.png' alt='logo'/>
                <img src='/images/twitter.png'/>
            </div>
            <div className="detail-5">
                <h4>Download Our App</h4>
                <img src='/images/app store.png' alt='logo'/>
                <img src='/images/google play.png' alt='logo'/>
            </div>
            <hr></hr>
            <div className="last-sec">
                <small>2023 STREAM X. All Rights Reserve</small>
                <small>Terms Of Us</small>
                <small>Privacy Policy</small>
                <small>FAQ</small>
                <img src='/images/infoicon.png' alt='logo'/>
            </div>
        </div>
    </div>
  )
}
