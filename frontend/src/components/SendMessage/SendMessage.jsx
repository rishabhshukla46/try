import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextareaAutosize } from "@material-ui/core";
import Select from "react-select";
import "./SendMessage.css";

function SendMessage() {
  const [searchList, setSearchList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [allUser, setAllUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [noNotify, setNoNotify] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DJANGO}/user/list/`)
      .then((res) => {
        setAllUsers(res.data);
        const options = res.data.map((user) => {
          return {
            value: user.userId,
            label: user.name,
          };
        });
        setSearchList(options);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const selectedUser = allUser.find((obj) => {
      return obj.name === selectedOption.label;
    });
    if (selectedUser.notify === "phone") {
      const postObj = {
        userPhone: selectedUser.userPhone,
        userMessage: message,
      };
      axios
        .post(`${process.env.REACT_APP_DJANGO}/phone/sms/`, postObj)
        .then(() => {
          setMessage("");
          setSelectedOption(null);
          setError(false);
          setSuccess(true);
        })
        .catch(() => {
          setError(true);
          setSuccess(true);
        });
    } else if (selectedUser.notify === "email") {
      const postObj = {
        userEmail: selectedUser.userEmail,
        userMessage: message,
      };
      axios
        .post(`${process.env.REACT_APP_DJANGO}/email/mail`, postObj)
        .then(() => {
          setMessage("");
          setSelectedOption(null);
          setError(false);
          setSuccess(true);
        })
        .catch(() => {
          setError(true);
          setSuccess(false);
        });
    } else {
      setNoNotify(true);
    }
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const errorMessage = (
    <p
      style={{
        color: "red",
        fontStyle: "italic",
      }}
    >
      Opps! Message not sent, We are looking into it.
    </p>
  );

  const successMessage = (
    <p
      style={{
        color: "blue",
        fontStyle: "italic",
      }}
    >
      Message sent!
    </p>
  );

  const noNotifyMessage = (
    <p
      style={{
        color: "green",
        fontStyle: "italic",
      }}
    >
      This user does not allow messages!
    </p>
  );

  return (
    <>
      <div className="user-actions">
        <div className="search-field">
          <Select
            value={selectedOption}
            options={searchList}
            onChange={handleChange}
            placeholder="search"
            openMenuOnClick
          />
        </div>
        <div className="text-field">
          <TextareaAutosize
            id="message-text"
            aria-label="minimum height"
            rowsMin={8}
            rowsMax={8}
            placeholder="Minimum 3 rows"
            value={message}
            onChange={onChange}
          />
        </div>
        {error && errorMessage}
        {success && successMessage}
        {noNotify && noNotifyMessage}
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send Message
        </Button>
      </div>
    </>
  );
}

export default SendMessage;
