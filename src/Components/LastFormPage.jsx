import React, { useEffect, useState } from "react";
import "../CSS/LastFormPage.css";
import  html2pdf  from "html2pdf.js";
import { useTicket } from './TicketContext';

export default function LastFormPage({
  count,
  cancelCallBack,
  formData,
}) {
  
  const {ticketTypes, selectedCard } = useTicket();
  
  const handlePdf = async () => {
    const element = document.getElementById("download");
     element.style.display = 'block';
    await html2pdf()
      .set({
        margin: 0,
        filename: "ticket.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save();
  };
  
  return (
    <div>
      <div className="background">
        <div className="ticket-heading">
          <h3>Ready</h3>
          <span>Step {count}/3</span>
        </div>
        <div className="line3"></div>
        <div className="text">
          <h2>Your Ticket is Booked!</h2>
          <p>Check your email for a copy or you can download</p>
        </div>
        <div className="ticket-background" id="download">
          <div className="ticket-contents">
            <div className="heading">
              <h2>Techember Fest ”25</h2>
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>
            <div className="avatar">
              <img src={formData.profilePhotoURL} alt="" />
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
                {selectedCard? <span>{selectedCard.type}</span> : ''}
              </div>
              <div className="info">
                <p>Ticket number</p>
                <span>{formData.ticketNumber}</span>
              </div>
              <div className="info last-child">
                <p>Special request</p>
                <span>
                  {formData.specialRequest}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="bar-code"><img className="barcode" src="Assets\Images\Bar Code.png" alt="" /></div> */}
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
          <button className="download-ticket" onClick={handlePdf}>Download Ticket</button>
        </div>
      </div>
      
    </div>
  );
}
