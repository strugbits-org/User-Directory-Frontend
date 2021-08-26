import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = (props) => {
  const { component, path } = props;

  const [value, setValue] = useState();

  useEffect(() => {
    const ApiConfig = {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    }
    const getUser = async () => {
      await axios.get('/api/user/', ApiConfig).then((resp) => {
        setValue(resp.data.user._id);
        localStorage.setItem('userId', resp.data.user._id);
        localStorage.setItem('name', resp.data.user.userName);
      })
        .catch((err) => {
          console.log(err);
          setValue('notValid');
        })
    }
    getUser();
  }, []);

  return (
    <div>
      {
        value !== undefined ?
          value !== "notValid" ? <Route exact path={path} component={component} /> :
            <Redirect
              to={{
                pathname: '/login'
              }}
            />
          : null
      }
    </div>
  );
};

export default ProtectedRoute;