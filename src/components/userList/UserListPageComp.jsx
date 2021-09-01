import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from './UserListPageCompStyle';
import { ProtectedApiConfig, backendURL } from '../../config/ApiConfig';
import TextFieldComp from '../../shared/components/textField/TextFieldComp';
import ButtonComp from '../../shared/components/button/ButtonComp';
import SelectComp from '../../shared/components/select/SelectComp';
import { countryList } from '../../shared/data/CountryList';
import userList from "../../assets/userList.jpg";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

const UserListPageComp = () => {

  const [userResp, setUserResp] = useState();
  const classes = useStyles();
  const [searchFilterDetail, setSearchFilterDetails] = useState();
  const [allUsers, setAllUsers] = useState();
  const history = useHistory();
  const [btnVisibility, setBtnVisibility] = useState(false);

  useEffect(() => {
    const getUserProfile = async () => {

      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };

      await axios.get('/api/user/user-profile/get-all-users', ProtectedApi)
        .then((resp) => {
          setUserResp(resp.data);
          setAllUsers(resp.data);
        });
    }
    getUserProfile();
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSearchFilterDetails((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setBtnVisibility(true);
    const body = JSON.stringify(searchFilterDetail);
    await axios.post('/api/user/search-users', body, ProtectedApiConfig)
      .then((resp) => {
        setAllUsers(resp.data);
        setBtnVisibility(false);
      })
  }

  const onListItemHandler = async (id) => {
    await axios.get(`/api/user/get-user-by-user-profile-id/${id}`)
      .then((resp) => history.push(`user/${resp.data}`))
  }

  return (
    <div style={{
      backgroundImage: `url(${userList})`,
      display: 'cover',
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: 'relative',
      width: '100%',
      overflowX: 'hidden',
      top: '0px'
    }} >
      <div>
        <Typography style={{ textAlign: 'center', margin: '5% 0 3% 0' }} variant="h3"> Users </Typography>
        <form id="searchForm" onSubmit={onSubmitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={1}>
              <div>
                <SelectComp
                  label="Select Country"
                  minWidth="100%"
                  onChange={(e) => {
                    e.persist();
                    setSearchFilterDetails((prev) => ({ ...prev, country: e.target.value }));
                  }}
                >
                  {
                    countryList.map((v) =>
                      <optgroup>
                        <option value={v}>{v}</option>
                      </optgroup>
                    )
                  }
                </SelectComp>
              </div>
            </Grid>
            <Grid item xs={1}>
              <TextFieldComp
                label="Name"
                name="name"
                variant="outlined"
                size="small"
                onChange={onChangeHandler} />
            </Grid>
            <Grid item xs={1}>
              <TextFieldComp
                label="University"
                name="university"
                variant="outlined"
                size="small"
                onChange={onChangeHandler} />
            </Grid>
            <Grid item xs={1}>
              {
                !btnVisibility ?
                  <ButtonComp type="submit"> Search </ButtonComp>
                  : <CircularProgress style={{ margin: "0 0 0 10%" }} />
              }
            </Grid>
            <Grid item xs={2}>
              <ButtonComp color="secondary" onClick={() => {
                document.getElementById("searchForm").reset();
                setAllUsers(userResp);
                setSearchFilterDetails('');
              }}> Reset Filter </ButtonComp>
            </Grid>
            <Grid item xs={1}>

            </Grid>
          </Grid>
        </form>
        {
          allUsers?.length !== 0 ?
            <List dense className={classes.root}>
              <ListItem className={classes.listHeader}>
                <ListItemText style={{ marginLeft: '4%' }} primary="Name" />
                <ListItemText primary="University" />
                <ListItemText style={{ marginRight: '3%' }} primary="Country" />
              </ListItem>
              {
                allUsers?.map((value) => (
                  <ListItem onClick={() => onListItemHandler(value._id)} className={classes.listItem} style={{ textAlign: 'center' }} key={value} button>
                    <ListItemAvatar>
                      <Avatar
                        alt={value._id}
                        src={`${backendURL}/${value?.userImage}`}
                      />
                    </ListItemAvatar>
                    <ListItemText style={{ width: '350px' }} id={value._id} primary={`${value.firstName} ${value.lastName}`} />
                    <ListItemText style={{ width: '350px' }} id={value._id} primary={value.university} />
                    <ListItemText style={{ width: '350px' }} id={value._id} primary={value.country} />
                  </ListItem>
                )
                )}
            </List>
            : <h2 style={{ textAlign: 'center' }}>  No Users </h2>
        }
      </div>
    </div>
  )
}

export default UserListPageComp
