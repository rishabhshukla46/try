import React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";
import "./SignInForm.css";

function SignInForm({ name, password, handleSubmit, onChange }) {
  return (
    <form className="form-data" onSubmit={handleSubmit}>
      <div className="form-field">
        <TextField
          className="text-field"
          label="Enter Username"
          variant="outlined"
          name="name"
          value={name}
          autoComplete="off"
          onChange={onChange}
        />
      </div>
      <div className="form-field">
        <TextField
          className="text-field"
          type="password"
          label="Enter Password"
          variant="outlined"
          name="password"
          autoComplete="off"
          value={password}
          onChange={onChange}
        />
      </div>
      <Button
        className="signin-button"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </form>
  );
}

SignInForm.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignInForm;
