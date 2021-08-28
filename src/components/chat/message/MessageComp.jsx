import React, { useState, useEffect } from 'react';
import { format } from "timeago.js";
import "./MessageCompStyle.css"
import axios from 'axios';
import { backendURL } from '../../../config/ApiConfig';
import altAvatar from "../../../assets/userAltAvatar.png";

const MessageComp = ({ message, own }) => {

  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      await axios.get(`/api/user/user-profile/get-user/${message.sender}`)
        .then((resp) => setUser(resp.data));
    }
    getUser();
  }, [message])

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={user?.userImage ? `${backendURL}/${user?.userImage}` : altAvatar}
          alt="user avatar"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}

export default MessageComp

