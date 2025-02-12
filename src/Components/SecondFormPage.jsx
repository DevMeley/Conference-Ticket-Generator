import React from "react";
import "../CSS/FirstFormPage.css";
import "../CSS/SecondFormPage.css";


export default function SecondFormPage({
  callbackProp,
  count,
  callbackProp2,
  profilePhoto,
  email,
  name,
  specialRequest,
  setProfilePhoto,
  setName,
  setEmail,
  setSpecialRequest
}) {
  return (
    <div className="form-container">
      <div className="form-heading">
        <h3>Attendee Details</h3>
        <span>Step {count}/3</span>
      </div>
      <div className="form-container-wrapper">
        <div className="upload-photo-container form-wrapper">
          <p>Upload Photo</p>
          <div className="image-background">
            {profilePhoto && (<img className="image-background" src={URL.createObjectURL(profilePhoto)}/>)}
          </div>
            <label className="drag-and-drop">
              <p>Drag & drop or click to upload</p>
              <input
                type="file"
                value={profilePhoto}
                onChange={(e)=>setProfilePhoto(e.target.files[0])}
              />
            </label>
        </div>
        <hr />
        <div className="inputs">
          <div className="input">
            <label>Enter your name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div className="input">
            <label>Enter your Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input">
            <label>Special Request</label>
            <textarea
                name="description"
                value={specialRequest}
                onChange={(e)=>setSpecialRequest(e.target.value)}
                placeholder="Text area"
                required
            />
          </div>
        </div>
        <div className="second-form-button">
          <button
            className="back-btn"
            onClick={() => {
              callbackProp2();
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className="get-btn"
            onClick={() => {
              callbackProp();
            }}
          >
            Get my free ticket
          </button>
        </div>
      </div>
    </div>
  );
}
