import React from "react";
import "../CSS/LastFormPage.css";

export default function LastFormPage({
  count,
  cancelCallBack,
  formData
}) {
  return (
    <div>
      <div className="background">
        <div className="ticket-heading">
          <h3>Ready</h3>
          <span>Step {count}/3</span>
        </div>
        <div className="text">
          <h2>Your Ticket is Booked!</h2>
          <p>Check your email for a copy or you can download</p>
        </div>
        <div className="ticket-background">
          <div className="ticket-contents">
            <div className="heading">
              <h2>Techember Fest ”25</h2>
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>
            <div className="avatar">
              <img src={formData.profilePhoto} alt="" />
            </div>
            <div className="attendee-info">
              <div className="info">
                <p>Enter your name</p>
                <span>{formData.name}</span>
              </div>
              <div className="info">
                <p>Enter your Email</p>
                <span>{formData.email}</span>
              </div>
              <div className="info">
                <p>Ticket Type</p>
                <span>VIP</span>
              </div>
              <div className="info">
                <p>Ticket number</p>
                <span>{formData.ticknumber}</span>
              </div>
              <div className="info last-child">
                <p>Special request</p>
                <span>
                  {formData.specialRequest}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-buttons">
          <button
            className="book"
            onClick={() => {
              cancelCallBack();
            }}
          >
            Book Another Ticket
          </button>
          <button className="download-ticket">Download Ticket</button>
        </div>
      </div>
    </div>
  );
}
