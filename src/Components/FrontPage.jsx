import React from 'react'
import "../CSS/FrontePage.css"
import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <div>
        <div className="form-container body">
            <div className="body-text">
                <h1>Hey Techie👋👋...</h1>
                <p>Excited to attend Techember Fest ”25?</p>
                <Link to="/form"><button className='btn'>Book your Ticket Now</button></Link>
            </div>
        </div>
    </div>
  )
}
