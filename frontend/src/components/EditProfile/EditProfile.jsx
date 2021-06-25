/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, MenuItem } from "@material-ui/core";
import "./EditProfile.css";

function EditProfile({ user }) {
  const [userPhone, setUserPhone] = useState(user.userPhone);
  const [userEmail, setUserEmail] = useState(user.userEmail);
  const [notify, setNotify] = useState(user.notify);
  const [error, setError] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    switch (e.target.name) {
      case "userEmail":
        setUserEmail(value);
        break;

      case "userPhone":
        setUserPhone(value);
        break;

      default:
        setError(!error);
    }
  };

  const selectChange = (e) => {
    setNotify(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: user.name,
      userId: user.userId,
      userEmail,
      userPhone,
      notify,
    };
    axios
      .put(`${process.env.REACT_APP_DJANGO}/user/detail/${user.id}/`, obj)
      .then(() => {
        setSuccess(true);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  const errorMessage = (
    <p
      style={{
        color: "red",
        fontStyle: "italic",
      }}
    >
      Opps! Can not update Please check Network.
    </p>
  );

  const sucessMessage = (
    <p
      style={{
        color: "blue",
        fontStyle: "italic",
      }}
    >
      Updates successFully!!.
    </p>
  );

  return (
    <form className="form-data">
      <div className="form-field-edit">
        <TextField
          id="select-field-edit"
          label="Phone"
          variant="outlined"
          name="userPhone"
          value={userPhone}
          onChange={onChange}
        />
      </div>
      <div className="form-field-edit">
        <TextField
          id="select-field-edit"
          label="Email"
          variant="outlined"
          name="userEmail"
          value={userEmail}
          onChange={onChange}
        />
      </div>
      <div className="form-field-edit">
        <TextField
          id="select-field-edit"
          label="Notification"
          variant="outlined"
          name="notify"
          value={notify}
          onChange={selectChange}
          select
        >
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="none">None</MenuItem>
        </TextField>
      </div>
      {error && errorMessage}
      {sucess && sucessMessage}
      <div className="signup-button">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
    </form>
  );
}

export default EditProfile;
