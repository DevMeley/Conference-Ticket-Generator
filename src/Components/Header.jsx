import React from 'react'
import "../CSS/Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="logo">
          <img src="Assets\Images\Frame 1618871078.png" alt="" />
        </div>
        <div className="nav">
            <ul>
              <li>Events</li>
              <li>My Tickets</li>
              <li>About Project</li>
            </ul>
        </div>
        <div className="nav-button">
            <button className='nav-btn'>MY TICKETS</button>
        </div>
    </div>
  )
}
