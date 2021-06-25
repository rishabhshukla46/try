import React from "react";
import "./LandingPage.css";
import Logo from "../../images/bevyBar.jpg";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import LandinPageButtons from "../../components/LandingPageButtons/LandingPageButtons";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="main-header">
        <img id="main-image" src={Logo} alt="main-logo" />
      </div>
      <div className="sigin-siginup-buttons">
        <WhatWeDo />
        <LandinPageButtons />
      </div>
    </div>
  );
}
export default LandingPage;
