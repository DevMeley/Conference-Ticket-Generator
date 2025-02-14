import React, { useEffect, useState } from "react";
import FirstFormPage from "./FirstFormPage";
import SecondFormPage from "./SecondFormPage";
import LastFormPage from "./LastFormPage";
import { TicketProvider } from "./TicketContext";

export default function Form() {
  const [count, setCount] = useState(1);
  const [formData, setFormData] = useState({
    ticketNumber: 1,
    profilePhoto: "",
    name: "",
    email: "",
    specialRequest: "",
    profilePhotoURL: "",
  });
  const [barCode, setBarCode] = useState("");
  const [error, setError] = useState("");
  const [ticketGenerated, setTicketGenerated] = useState(null);

  const stepCountIncrement = () => {
    setCount(count + 1);
  };
  const stepCountDecrement = () => {
    setCount(count - 1);
  };
  const cancel = () => {
    setCount(1);
    setFormData({
      name: "",
      ticketNumber: 1,
      email: "",
      specialRequest: "",
      
    });
  };

  //   form handling
  const handleForm = (e) => {
    e.preventDefault();
    console.log(
      formData.name,
      formData.email,
      formData.profilePhoto,
      formData.ticketNumber
    );
    if (validateForm()) {
      setTicketGenerated(true);
    }
  };

  // Save form data to local storage on load
  useEffect(()=>{
    localStorage.setItem("formData", JSON.stringify(formData))
    localStorage.setItem("ticketGenerated", JSON.stringify(ticketGenerated));
  },[formData, ticketGenerated])


  // retrieve save data from local storage
  useEffect(()=>{
    const savedData = JSON.parse(localStorage.getItem("formData"))
    const savedTicketState = JSON.parse(localStorage.getItem("ticketGenerated"));
    if (savedData) {
      setFormData(savedData)
      setTicketGenerated(savedData)
    }
    if (savedTicketState) {
      setTicketGenerated(savedTicketState);
    }
  },[])

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.profilePhoto) {
      newErrors.profilePhoto = "Avatar URL is required.";
    } else if (
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.profilePhoto)
    ) {
      newErrors.avatar = "Invalid image URL.";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <TicketProvider>
        <form onSubmit={handleForm}>
          {count === 1  && (
            <FirstFormPage
              callbackProp={stepCountIncrement}
              callbackProp2={stepCountDecrement}
              count={count}
              cancelCallBack={cancel}
              formData={formData}
              setFormData={setFormData}
              error={error}
            />
          ) }
          {count === 2  &&  
          (
            <SecondFormPage
              callbackProp={stepCountIncrement}
              callbackProp2={stepCountDecrement}
              count={count}
              formData={formData}
              setFormData={setFormData}
              error={error}
            />
          )}
        </form>
        { count === 3 && (
          <LastFormPage
            callbackProp={stepCountIncrement}
            callbackProp2={stepCountDecrement}
            count={count}
            cancelCallBack={cancel}
            formData={formData}
            ticketGenerated={ticketGenerated}
          />
        )}
      </TicketProvider>
      
    </div>
  );
}
