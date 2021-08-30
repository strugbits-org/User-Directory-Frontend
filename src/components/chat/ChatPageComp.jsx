import React, { useState, useEffect, useRef } from 'react';
import "./ChatPageCompStyle.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import ConversationComp from "./conversation/ConversationComp";
import MessageComp from "./message/MessageComp";
import axios from 'axios';
import { io } from "socket.io-client";
import TextFieldComp from '../../shared/components/textField/TextFieldComp';
import { ProtectedApiConfig } from '../../config/ApiConfig';

const ChatPageComp = () => {

  const userId = localStorage.getItem('userId');
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState('');
  const socket = useRef();
  const scrollRef = useRef();
  const [searchRecord, setSearchRecord] = useState([]);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [socket])

  useEffect(() => {
    socket.current.emit("addUser", userId);
    // socket.current.on("getUsers", (users) => {
    //   console.log(users);
    // })
  }, [userId])

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

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat])

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

    const receiverId = currentChat.members.find((v) => v !== userId);

    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: newMessage
    })

    if (newMessage) {
      await axios.post('/api/message', message, ProtectedApi)
        .then((resp) => {
          setMessages([...messages, resp.data]);
          setNewMessage("");
        })
    }
  }

  const onChangeHandler = async (e) => {
    const keyword = e.target.value;

    await axios.get(`/api/conversation/search-users/${keyword}`, ProtectedApiConfig)
      .then((resp) => setSearchRecord(resp.data))
  }

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <Autocomplete
              id="search"
              freeSolo
              // onChange={onSearchProductHandler}
              options={searchRecord.map((option) => option.userName)}
              renderInput={(params) => (
                <TextFieldComp {...params} size="small" onChange={onChangeHandler} label="Search for friends" />
              )}
            />
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
                        if (v.userImage) {
                          return null;
                        } else {
                          return <div ref={scrollRef}> <MessageComp message={v} own={v.sender === userId} /> </div>
                        }
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
