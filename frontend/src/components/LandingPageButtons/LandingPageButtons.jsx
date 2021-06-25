import React from "react";
import { Button } from "@material-ui/core";
import "./LandingPageButtons.css";
import { useHistory } from "react-router-dom";

function LandingPageButtons() {
  const history = useHistory();

  const clickSignin = () => {
    history.push("signin/");
  };

  const clickSignUp = () => {
    history.push("signup/");
  };

  return (
    <div className="landing-page-buttons">
      <Button
        id="sign-in-button"
        variant="outlined"
        color="primary"
        onClick={clickSignin}
      >
        Sign In
      </Button>
      <Button
        id="sign-up-button"
        variant="contained"
        color="primary"
        onClick={clickSignUp}
      >
        Sign up
      </Button>
    </div>
  );
}

export default LandingPageButtons;
