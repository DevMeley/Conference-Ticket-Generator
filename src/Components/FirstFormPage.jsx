import React from 'react'
import "../CSS/FirstFormPage.css"

export default function FirstFormPage() {
  return (
    <div>
        <div className="form-container">
            <div className="form-heading">
                <h3>Ticket Selection</h3>
                <span>Step 1/3</span>
            </div>
            <div className="form-wrapper">
                <div className="info-about">
                    <h2 className='h2-txt'>Techember Fest ”25</h2>
                    <p className='p-txtt'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                    <div className="location">
                        <p className='p-txt'>📍 [Event Location]</p>
                        <p className='p-txt'>March 15, 2025 | 7:00 PM</p>
                    </div>
                </div>
                <hr />
                <div className="ticket-type">
                    <p>Select Ticket Type:</p>
                    <div className="cards">
                        <div className="card">
                            <h3>Free</h3>
                            <p>Regualer Access</p>
                            <p>20/52</p>
                        </div>
                        <div className="card">
                            <h3>$150</h3>
                            <p>VIP Access</p>
                            <p>20/52</p>
                        </div>
                        <div className="card">
                            <h3>$150</h3>
                            <p>VVIP Access</p>
                            <p>20/52</p>
                        </div>
                    </div>
                </div>
                <div className="ticket-number">
                <label htmlFor="func" className="form_label">
                    Number of Ticket
                </label>
                <select name="func" >
                    <option value=""></option>
                    <option value="5">1</option>
                    <option value="6">2</option>
                    <option value="7">3</option>
                </select>
                </div>
                <div className="form-buttons">
                    <button className="cancel-btn">Cancel</button>
                    <button className="next-btn">Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}
