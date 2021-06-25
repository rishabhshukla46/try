import React, { useState, useEffect } from "react";
import "./UserPage.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";
import Logo from "../../images/bevy.png";
import SendMessage from "../../components/SendMessage/SendMessage";
import EditProfile from "../../components/EditProfile/EditProfile";

function UserPage() {
  const [menuSwitch, setMenuSwitch] = useState("message");
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const userArray = history.location.pathname.split("/");
    const id = userArray[userArray.length - 1];
    axios
      .get(`${process.env.REACT_APP_DJANGO}/user/detail/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const content =
    menuSwitch === "message" ? <SendMessage /> : <EditProfile user={user} />;

  return (
    <div className="user-page">
      <div className="user-details">
        <div className="user-card">
          <img src={Logo} alt="main logo" />
          <div className="user-name">
            <h4>{user.name}</h4>
            <h6>{user.userId}</h6>
          </div>
        </div>
        <div className="user-menu">
          <Button id="menu-buttons" onClick={() => setMenuSwitch("message")}>
            Send Notifications
          </Button>
          <Button id="menu-buttons" onClick={() => setMenuSwitch("edit")}>
            Edit Preference
          </Button>
        </div>
      </div>
      <div className="user-actions">{content}</div>
    </div>
  );
}

export default UserPage;
