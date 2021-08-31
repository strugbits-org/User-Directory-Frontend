import React, { useState, useEffect, useRef } from 'react';
import "./ChatPageCompStyle.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import ConversationComp from "./conversation/ConversationComp";
import MessageComp from "./message/MessageComp";
import axios from 'axios';
import { io } from "socket.io-client";
import TextFieldComp from '../../shared/components/textField/TextFieldComp';
import { ProtectedApiConfig } from '../../config/ApiConfig';
import { Typography } from '@material-ui/core';
import { InputAdornment, IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './ChatPageStyles';

const ChatPageComp = () => {

  const socket = useRef();
  const scrollRef = useRef();
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState();
  const userId = localStorage.getItem('userId');
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState('');
  const [searchRecord, setSearchRecord] = useState([]);
  const [respConvo, setRespConvo] = useState([]);
  const [usersImages, setUsersImages] = useState();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [socket]);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    // socket.current.on("getUsers", (users) => {
    //   console.log(users);
    // })
    const getUserProfile = async () => {
      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };

      await axios.get('/api/user/user-profile/', ProtectedApi)
        .then((resp) => setUserDetails(resp.data));
    }
    getUserProfile();
  }, [userId]);

  useEffect(() => {
    const getConversations = async () => {
      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      await axios.get(`/api/conversation/${userId}`, ProtectedApi)
        .then((resp) => {
          setConversations(resp.data);
          setRespConvo(resp.data);
        });
    }
    getConversations();
  }, [userId]);

  useEffect(() => {
    const getMessages = async () => {
      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
      if (currentChat) {
        await axios.get(`/api/message/${currentChat?._id}`, ProtectedApi)
          .then((resp) => {
            setMessages(resp.data.messages);
            setUsersImages(resp.data.userImages)
          });
      }
    }
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

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

  const onSearchHandler = (_e, value) => {
    const [result] = searchRecord.filter((v) => v.userName === value);

    if (result) {
      const findConvo = conversations.find((v) => v._id === result.convoId);
      const wrapConvo = [].concat(findConvo);
      setConversations(wrapConvo);
    } else {
      setConversations(respConvo);
      setSearchRecord([]);
    }
  }

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div style={{ margin: '10% 0 0% 5%', height: '10%', }}>
          <Typography variant="h2"> Chats </Typography>
        </div>
        <div className="chatMenuWrapper">
          <Autocomplete
            id="search"
            freeSolo
            style={{ marginBottom: '13%' }}
            onChange={onSearchHandler}
            options={searchRecord.map((option) => option.userName)}
            renderInput={(params) => (
              <TextFieldComp
                {...params}
                label="Search for friends"
                variant="outlined"
                style={{ width: '70%' }}
                size="small"
                className={classes.searchField}
                onChange={onChangeHandler}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton style={{ marginLeft: '0%' }}>
                        {<SearchIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
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
        {
          currentChat ?
            <div className="chatBoxHeader">
              <img alt="user avatar" className="chatBoxHeaderImg"
                src={userId !== usersImages?.user1Id ? usersImages?.user1Image : usersImages?.user2Image} />
              <Typography className="chatBoxHeaderTypo">
                {userId !== usersImages?.user1Id ? usersImages?.user1Name : usersImages?.user2Name}
              </Typography>
            </div> : null
        }
        <div className="chatBoxWrapper">
          {
            currentChat ?
              <>
                <div className="chatBoxTop">
                  {
                    messages.map((v) => {
                      return <div ref={scrollRef}>
                        <MessageComp
                          userImage={v.sender === usersImages?.user1Id ? usersImages?.user1Image : usersImages?.user2Image}
                          message={v}
                          own={v.sender === userId} />
                      </div>
                    })
                  }
                </div>
                <div className="chatBoxBottom">
                  <TextFieldComp
                    placeholder="Write Something..."
                    value={newMessage}
                    variant="outlined"
                    multiline={true}
                    className={classes.typeMsg}
                    // rows={3}
                    rowsMax="3"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSubmit(e);
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleSubmit}>
                            {<SendIcon />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </div>
              </>
              : <span className="noConversationText"> Open a conversation to start a chat </span>
          }
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <div className={classes.rightUserProfileDiv}>
            <img alt="user avatar" className={classes.rightUserProfileImg}
              src={userDetails?.userImage} />
            <Typography variant="h4" className={classes.rightUserProfileText}>
              {userDetails?.firstName} {userDetails?.lastName}
            </Typography>
            <Typography variant="h6" className={classes.rightUserProfileText}>
              {userDetails?.employment}
            </Typography>
            <Typography variant="h6" className={classes.rightUserProfileText}>
              {userDetails?.city}, {userDetails?.country}
            </Typography>
            <Typography className={classes.rightUserProfileText}>
              {userDetails?.aboutMe}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPageComp
