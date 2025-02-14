import React, { useState } from "react";
import "../CSS/FirstFormPage.css";
import { useTicket } from "./TicketContext";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";
import { BackgroundColor } from "@cloudinary/url-gen/actions/background/actions/BackgroundColor";

export default function FirstFormPage({
  callbackProp,
  count,
  cancelCallBack,
  formData,
  setFormData,
  error
}) {
  
    const { ticketTypes, selectedCard, setSelectedCard } = useTicket();

    const handleCardClick = (id) => {
      setSelectedCard(id);
      console.log(id)
    };
  return (
    <div>
      <div className="form-container">
        <div className="form-heading">
          <h3>Ticket Selection</h3>
          <span>Step {count}/3</span>
        </div>
        <div className="line1"></div>
        <div className="form-wrapper">
          <div className="info-about">
            <h2 className="h2-txt">Techember Fest ”25</h2>
            <p className="p-txtt">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
            <div className="location">
              <p className="p-txt">📍 [Event Location]</p>
              <p className="p-txt">March 15, 2025 | 7:00 PM</p>
            </div>
          </div>
          <hr />
          <div className="ticket-type">
            <p>Select Ticket Type:</p>
            <div className="cards">
              {ticketTypes.map((ticket) => (
                <div
                key={ticket.id}
                onClick={() => handleCardClick(ticket.id)}
                className={`card ${
                  selectedCard === ticket.id 
                    ? 'clicked-card' 
                    : 'card'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(ticket.id);
                  }
                }}
                aria-selected={selectedCard === ticket.id}
                aria-label={`${ticket.price} ${ticket.type}`}
              >
                <h3>{ticket.price}</h3>
                <p>{ticket.type}</p>
                <p>{ticket.spots}</p>
              </div>
              ))}
            </div>
          </div>
          <div className="ticket-number">
            <label htmlFor="func" className="form_label">
              Number of Ticket
            </label>
            <select
              name="ticketNumber"
              value={formData.ticketNumber}
              onChange={(e) => setFormData({...formData, ticketNumber: e.target.value})}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="form-buttons">
            <button
              className="cancel-btn"
              onClick={() => {
                cancelCallBack();
              }}
            >
              Cancel
            </button>
            <button
              className="next-btn"
              onClick={() => {
                callbackProp();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
