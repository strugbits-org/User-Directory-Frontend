// import { io } from "socket.io-client";
import React, { useState, useEffect, useRef } from 'react';
import "./ChatPageCompStyle.css";
import ConversationComp from "./conversation/ConversationComp";
import MessageComp from "./message/MessageComp";
import axios from 'axios';

const ChatPageComp = () => {

  const userId = localStorage.getItem('userId');
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollRef = useRef();

  useEffect(() => {
    const getConversations = async () => {
      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      await axios.get(`/api/conversation/${userId}`, ProtectedApi)
        .then((resp) => setConversations(resp.data));
    }
    getConversations();
  }, [userId]);

  useEffect(() => {
    const getMessages = async () => {
      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      await axios.get(`/api/message/${currentChat?._id}`, ProtectedApi)
        .then((resp) => setMessages(resp.data));
    }
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ProtectedApi = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: currentChat._id,
    }
    if (newMessage) {
      await axios.post('/api/message', message, ProtectedApi)
        .then((resp) => {
          setMessages([...messages, resp.data]);
          setNewMessage("");
        })
    }
  }

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {
              conversations.map((v) => {
                return <div onClick={() => setCurrentChat(v)}> <ConversationComp conversation={v} currentUserId={userId} /> </div>
              })
            }
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {
              currentChat ?
                <>
                  <div className="chatBoxTop">
                    {
                      messages.map((v) => {
                        return <div ref={scrollRef}> <MessageComp message={v} own={v.sender === userId} /> </div>
                      })
                    }
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="write something..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    ></textarea>
                    <button className="chatSubmitButton"
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </>
                : <span className="noConversationText"> Open a conversations to start a chat </span>
            }
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
          </div>
        </div>
      </div>
    </>
  );
}
export default ChatPageComp
