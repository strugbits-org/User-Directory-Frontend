import React from 'react';
import { format } from "timeago.js";
import "./MessageCompStyle.css"
import { backendURL } from '../../../config/ApiConfig';
import altAvatar from "../../../assets/userAltAvatar.png";

const MessageComp = ({ userImage, message, own }) => {

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={userImage ? `${backendURL}/${userImage}` : altAvatar}
          alt="user avatar"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}

export default MessageComp

