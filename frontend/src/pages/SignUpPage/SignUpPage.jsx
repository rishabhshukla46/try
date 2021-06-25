import React, { useState } from "react";
import "./SignUpPage.css";
import axios from "axios";
import Logo from "../../images/bevy.png";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function SignUpPage() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [notify, setNotify] = useState("Email");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;

    switch (e.target.name) {
      case "name":
        setName(value);
        break;

      case "userId":
        setUserId(value);
        break;

      case "userEmail":
        setUserEmail(value);
        break;

      case "userPhone":
        setUserPhone(value);
        break;

      case "notify":
        setNotify(value);
        break;

      default:
        setError(!error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      userId,
      userEmail,
      userPhone,
      notify,
    };
    axios
      .post(`${process.env.REACT_APP_DJANGO}/user/list/`, obj)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError(true);
      });
  };
  const errorMessage = (
    <p
      style={{
        color: "red",
        fontStyle: "italic",
      }}
    >
      Please mark all * fields
    </p>
  );

  const successMessage = (
    <p
      style={{
        color: "blue",
        fontStyle: "italic",
      }}
    >
      User Created Successfully, Please go back and Sign in.
    </p>
  );

  return (
    <div className="sign-up-page">
      <div className="main-logo">
        <img src={Logo} alt="main logo" />
      </div>
      <SignUpForm
        name={name}
        userId={userId}
        userEmail={userEmail}
        userPhone={userPhone}
        notify={notify}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />
      {error && errorMessage}
      {success && successMessage}
    </div>
  );
}

export default SignUpPage;
