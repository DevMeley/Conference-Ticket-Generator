import React from "react";
import "../CSS/FirstFormPage.css";
import "../CSS/SecondFormPage.css";


export default function SecondFormPage({
  callbackProp,
  count,
  callbackProp2,
  formData,
  setFormData,
  error
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
          <div>
            <div className="image-background">
              <label className="drag-and-drop">
                {formData.profilePhoto && (
                  <img  src={URL.createObjectURL(formData.profilePhoto)}/>
                )}
                {formData.profilePhoto? <p className="hidden">Drag & drop or click to upload</p>:<p>Drag & drop or click to upload</p> }
                <input
                  type="file"
                  onChange={(e)=> setFormData({...formData, profilePhoto: e.target.files[0]})}
                />
              </label>
            </div>
            
        </div>
        </div>
        <hr />
        <div className="inputs">
          <div className="input">
            <label>Enter your name</label>
            <input type="text" value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})}/>
          </div>
          {error.name && (
          <span className="error">
            {error.name}
          </span>
          )}
          <div className="input">
            <label>Enter your Email</label>
            <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
          </div>
          {error.email && (
          <span className="error">
            {error.email}
          </span>
          )}
          <div className="input">
            <label>Special Request</label>
            <textarea
                name="description"
                value={formData.specialRequest}
                onChange={(e)=>setFormData({...formData, specialRequest: e.target.value})}
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
