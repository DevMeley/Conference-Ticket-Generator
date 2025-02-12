import React from 'react'
import "../CSS/FirstFormPage.css"
import "../CSS/SecondFormPage.css"

export default function SecondFormPage() {
  return (
    <div className='form-container'>
            <div className="form-heading">
                <h3>Attendee Details</h3>
                <span>Step 2/3</span>
            </div>
        <div className="form-container-wrapper">
            <div className="upload-photo-container form-wrapper">
                <p>Upload Photo</p>
                <div className="image-background">
                    <div className="drag-and-drop">
                        <p>Drag & drop or click to upload</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="inputs">
                <div className="input">
                    <label>Enter your name</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Enter your Email</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label>Special Request</label>
                    <textarea>Text area</textarea>
                </div>
            </div>
            <div className="second-form-button">
                <button className="back-btn">Back</button>
                <button className="get-btn">Get my free ticket</button>
            </div>
        </div>
    </div>
  )
}
