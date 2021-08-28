import React, { useState, useEffect } from 'react';
import "./ConversationCompStyle.css";
import altAvatar from "../../../assets/userAltAvatar.png";
import { backendURL } from '../../../config/ApiConfig';
import axios from 'axios';

const ConversationComp = ({ conversation, currentUserId }) => {

  const [user, setUser] = useState();

  useEffect(() => {
    const friendId = conversation.members.find((v) => v !== currentUserId);

    const getUser = async () => {
      await axios.get(`/api/user/user-profile/get-user/${friendId}`)
        .then((resp) => setUser(resp.data));
    }
    getUser();
  }, [conversation, currentUserId])

  return (
    <div className="conversation">
      {
        user?.length !== 0 ?
          <>
            <img
              className="conversationImg"
              src={user?.userImage ? `${backendURL}/${user?.userImage}` : altAvatar}
              alt="user avatar"
            />
            <span className="conversationName">{user?.userName}</span>
          </>
          : null
      }
    </div>
  )
}

export default ConversationComp
