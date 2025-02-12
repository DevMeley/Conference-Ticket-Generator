import React, { useState } from "react";
import FirstFormPage from "./FirstFormPage";
import SecondFormPage from "./SecondFormPage";
import LastFormPage from "./LastFormPage";

export default function Form() {
  const [count, setCount] = useState(1);
  const [ticketType, setTicketType] = useState();
  const [ticketNumber, setTicketNumber] = useState(1);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [barCode, setBarCode] = useState("");
  const [error, setError] = useState("");

  const stepCountIncrement = () => {
    setCount(count + 1);
  };
  const stepCountDecrement = () => {
    setCount(count - 1);
  };
  const cancel = () => {
    setCount(1);
  };

  //   form handling
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, email);

    
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        {count === 1 ? (
          <FirstFormPage
            callbackProp={stepCountIncrement}
            callbackProp2={stepCountDecrement}
            count={count}
            cancelCallBack={cancel}
            ticketType={ticketType}
            ticketNumber={ticketNumber}
            setTicketType={setTicketType}
            setTicketNumber={setTicketNumber}
          />
        ) : count === 2 ? (
          <SecondFormPage
            callbackProp={stepCountIncrement}
            callbackProp2={stepCountDecrement}
            count={count}
            profilePhoto={profilePhoto}
            name={name}
            email={email}
            specialRequest={specialRequest}
            setProfilePhoto={setProfilePhoto}
            setName={setName}
            setEmail={setEmail}
            setSpecialRequest={setSpecialRequest}
          />
        ) : (
          <LastFormPage
            callbackProp={stepCountIncrement}
            callbackProp2={stepCountDecrement}
            count={count}
            cancelCallBack={cancel}
          />
        )}
      </form>
    </div>
  );
}
