/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Button, TextField, MenuItem } from "@material-ui/core";
import "./SignUpForm.css";

function SignUpForm({
  name,
  userId,
  userEmail,
  userPhone,
  notify,
  onChange,
  handleSubmit,
}) {
  return (
    <form className="form-data">
      <div className="form-field-signup">
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter Name*"
            variant="outlined"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter userId*"
            variant="outlined"
            name="userId"
            value={userId}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-field-signup">
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter Email*"
            variant="outlined"
            name="userEmail"
            value={userEmail}
            onChange={onChange}
          />
        </div>
        <div className="form-field">
          <TextField
            className="text-field"
            label="Enter Phone*"
            variant="outlined"
            name="userPhone"
            value={userPhone}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-field-select">
        <TextField
          id="select-field"
          label="Notification*"
          variant="outlined"
          name="notify"
          value={notify}
          onChange={onChange}
          select
        >
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
        </TextField>
      </div>
      <div className="signup-button">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          size="large"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

SignUpForm.prototypes = {
  name: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userPhone: PropTypes.string.isRequired,
  notify: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignUpForm;
