import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { backendURL } from '../../config/ApiConfig';
import { useHistory } from "react-router-dom";

const ViewUserProfilePageComp = () => {

  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const userId = localStorage.getItem('userId');
  const history = useHistory();

  useEffect(() => {
    const getUserProfile = async () => {
      await axios.get(`/api/user/user-profile/get-user/${id}`)
        .then((resp) => setUserDetails(resp.data));
    }
    getUserProfile();
  }, [id])

  const onMessageHandler = async () => {

    if (userId) {
      const conversation = {
        senderId: userId,
        receiverId: id
      }

      const ProtectedApi = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };

      await axios.post('/api/conversation/', conversation, ProtectedApi);
      history.push("/user-messages")
    } else {
      history.push("/login")
    }

  }
  return (
    <div className="root">
      <div className="main-content">
        {/* <!-- Top navbar --> */}
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">
            {/* <!-- Brand --> */}
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/user-profile">User profile</a>
            {/* <!-- Form --> */}
            {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
                <input className="form-control" placeholder="Search" type="text" />
              </div>
            </div>
          </form> */}
            {/* <!-- User --> */}
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <a className="nav-link pr-0" href="/user-profile" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="loading" src={`${backendURL}/${userDetails?.userImage}`} />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">{userDetails?.userName}</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="/user-profile" className="dropdown-item">
                    <i className="ni ni-single-02"></i>
                    <span>My profile</span>
                  </a>
                  <a href="/user-profile" className="dropdown-item">
                    <i className="ni ni-settings-gear-65"></i>
                    <span>Settings</span>
                  </a>
                  <a href="/user-profile" className="dropdown-item">
                    <i className="ni ni-calendar-grid-58"></i>
                    <span>Activity</span>
                  </a>
                  <a href="/user-profile" className="dropdown-item">
                    <i className="ni ni-support-16"></i>
                    <span>Support</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="/user-profile" className="dropdown-item">
                    <i className="ni ni-user-run"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Header --> */}
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{ minHeight: '600px', backgroundImage: 'url(https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
          {/* <!-- Mask --> */}
          <span className="mask bg-gradient-default opacity-8"></span>
          {/* <!-- Header container --> */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Hello {userDetails?.userName}</h1>
                <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                {/* <a href="/user-profile" className="btn btn-info">Edit profile</a> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="/user-profile">
                        <img src={`${backendURL}/${userDetails?.userImage}`} alt="loading" className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="/user-profile" className="btn btn-sm btn-info mr-4">Connect</a>
                    <button onClick={() => onMessageHandler()} className="btn btn-sm btn-default float-right"> Message </button>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      {userDetails?.userName}<span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>{userDetails?.city}, {userDetails?.country}
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2"></i>{userDetails?.employment}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2"></i>{userDetails?.university}
                    </div>
                    <hr className="my-4" />
                    <p>{userDetails?.userName} — {userDetails?.aboutMe}</p>
                    <a href="/user-profile">Show more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form >
                    <h6 className="heading-small text-muted mb-4">User information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-username">Username:  {userDetails?.userName} </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">Email address: {userDetails?.email}</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-first-name">First name: {userDetails?.firstName}</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-last-name">Last name: {userDetails?.lastName}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* <!-- Address --> */}
                    <h6 className="heading-small text-muted mb-4">Contact information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-address">Address: {userDetails?.address} </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-city">City: {userDetails?.city}</label>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-country">Country: {userDetails?.country}</label>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Postal code: {userDetails?.postalCode}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* <!-- Description --> */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>{userDetails?.aboutMe}</label>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6 m-auto text-center">
            <div className="copyright">
              <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard">Argon Dashboard</a> by Creative Tim</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ViewUserProfilePageComp
