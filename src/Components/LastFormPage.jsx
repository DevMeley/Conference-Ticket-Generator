import React, { useEffect, useRef, useState } from "react";
import "../CSS/LastFormPage.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function LastFormPage({
  count,
  cancelCallBack,
  formData,
}) {

  const elementRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = elementRef.current?.querySelectorAll("img");
    const promises = Array.from(images).map((img) => 
      new Promise((resolve) => {
        if (img.complete) resolve();
        else img.onload = resolve;
      })
    );

    Promise.all(promises).then(() => setIsLoaded(true));
  }, []);

  const generatePdf = async () => {
    await document.fonts.ready;
    if (!isLoaded) {
      alert("Please wait for the ticket to fully load before downloading.");
      return;
    }

    const input = elementRef.current;

    html2canvas(input, {
      scale: 3, 
      useCORS: true, 
      logging: false,
      backgroundColor:null,
      scrollY: -window.scrollY,
      logging: true,
      letterRendering: 1,
      allowTaint: true,
      foreignObjectRendering: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = 600

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("ticket.pdf");
    });
  };


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
        <div className="ticket-background" ref={elementRef}>
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
                <span>VIP</span>
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
          <div className="bar-code"><img className="barcode" src="Assets\Images\Bar Code.png" alt="" /></div>
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
          <button className="download-ticket" onClick={generatePdf}>Download Ticket</button>
        </div>
      </div>
    </div>
  );
}
