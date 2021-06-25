import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
import Logo from "../../images/bevy.png";
import "./SignInPage.css";

function SignInPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const onChange = (e) => {
    const { value } = e.target;
    if (e.target.name === "name") {
      setName(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError(true);
    } else {
      setError(false);
      setName("");
      setPassword("");
      axios
        .get(`${process.env.REACT_APP_DJANGO}/user/list`)
        .then((res) => {
          const users = res.data;
          const user = users.find((obj) => {
            if (obj.userId === name) {
              return obj;
            }
            return null;
          });
          if (!user) {
            setError(true);
          } else {
            history.push(`/user/${user.id}`);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const errorMessage = (
    <p
      style={{
        color: "red",
        fontStyle: "italic",
      }}
    >
      User not found
    </p>
  );

  return (
    <div className="sign-in-page">
      <div className="main-logo">
        <img src={Logo} alt="main logo" />
      </div>
      <SignInForm
        name={name}
        password={password}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />
      {error && errorMessage}
    </div>
  );
}

export default SignInPage;
