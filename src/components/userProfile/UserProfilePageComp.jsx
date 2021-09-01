import React, { useState, useEffect } from 'react';
import { countryList } from '../../shared/data/CountryList';
import "./UserProfilePageCompStyle.css";
import axios from 'axios';
import SnackBarComp from '../../shared/components/snackBar/SnackBarComp';
import AddAndDisplayImageComp from '../../shared/components/addAndDisplayImage/AddAndDisplayImageComp';
import { backendURL } from '../../config/ApiConfig';
import userAltAvatar from "../../assets/userAltAvatar.png";
import CircularProgress from '@material-ui/core/CircularProgress';

const UserProfilePageComp = () => {

  const [userDetails, setUserDetails] = useState();
  const [respMessage, setRespMessage] = useState();
  const [statusType, setStatusType] = useState('error');
  const [open, setOpen] = useState(false);
  const [snackDuration, setSnackDuration] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [btnVisibility, setBtnVisibility] = useState(false);

  useEffect(() => {
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
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  }

  const onSelectImageHandler = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setSelectedImage(e.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setBtnVisibility(true);
    userDetails.id = localStorage.getItem('userId');
    const formData = new FormData();
    formData.append('userImage', selectedImage);
    Object.keys(userDetails).forEach((k) => formData.append(k, userDetails[k]));
    const ProtectedImageApiConfig = {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        headers: { "Content-Type": "multipart/form-data" },
      },
    };
    try {
      await axios.post('/api/user/user-profile/update-profile', formData, ProtectedImageApiConfig)
        .then((resp) => {
          setStatusType("success");
          setRespMessage(resp.data.message);
          setSnackDuration(6000);
          setTimeout(() => window.location.reload(), 3000);
        })
    } catch (err) {
      setRespMessage(err.response.data.message);
      setSnackDuration(6000);
      setBtnVisibility(false);
      setStatusType("error");
    }
    setOpen(true);
  }

  return (
    <div className="root">
      <div className="main-content">
        {/* <!-- Top navbar --> */}
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">
            {/* <!-- Brand --> */}
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/user-profile">User profile</a>
            {/* <!-- User --> */}
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <a className="nav-link pr-0" href="/user-profile" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="loading" src={userDetails?.userImage ? `${backendURL}/${userDetails?.userImage}` : userAltAvatar} />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">{localStorage.getItem('name')}</span>
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
                <h1 className="display-2 text-white">Hello {localStorage.getItem('name')}</h1>
                <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
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
                        <img src={userDetails?.userImage ? `${backendURL}/${userDetails?.userImage}` : userAltAvatar} alt="loading" className="rounded-circle" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
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
                      {localStorage.getItem('name')}<span className="font-weight-light">, 27</span>
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
                  <form onSubmit={onSubmitHandler}>
                    <h6 className="heading-small text-muted mb-4">User information</h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-username">Username</label>
                            <input id="input-username" defaultValue={userDetails?.userName} className="form-control form-control-alternative" placeholder="Lucky" name="userName" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-email">Email address</label>
                            <input type="email" id="input-email" defaultValue={userDetails?.email} className="form-control form-control-alternative" placeholder="jesse@example.com" name="email" onChange={onChangeHandler} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-first-name">First name</label>
                            <input type="text" id="input-first-name" defaultValue={userDetails?.firstName} className="form-control form-control-alternative" placeholder="Lucky" name="firstName" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                            <input type="text" id="input-last-name" defaultValue={userDetails?.lastName} className="form-control form-control-alternative" placeholder="Jesse" name="lastName" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-university">University</label>
                            <input type="text" id="input-university" defaultValue={userDetails?.university} className="form-control form-control-alternative" placeholder="Sir Syed University of Engineering" name="university" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-employment">Employment</label>
                            <input type="text" id="input-employment" defaultValue={userDetails?.employment} className="form-control form-control-alternative" placeholder="Solution Manager-Creative Tim Officer" name="employment" onChange={onChangeHandler} />
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
                            <label className="form-control-label" htmlFor="input-address">Address</label>
                            <input id="input-address" defaultValue={userDetails?.address} className="form-control form-control-alternative" placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" name="address" onChange={onChangeHandler} type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-city">City</label>
                            <input type="text" id="input-city" defaultValue={userDetails?.city} className="form-control form-control-alternative" placeholder="New York" name="city" onChange={onChangeHandler} />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group focused">
                            <label className="form-control-label" htmlFor="input-country">Country</label>
                            <select
                              onChange={(e) => {
                                e.persist();
                                setUserDetails((prev) => ({ ...prev, country: e.target.value }));
                              }}
                              defaultValue={userDetails?.country}
                              className="form-control form-control-alternative">
                              <optgroup>
                                {
                                  countryList.map((v) => {
                                    if (v === userDetails?.country) {
                                      return <option value={v} selected>{v}</option>
                                    }
                                    return <option value={v}>{v}</option>
                                  })
                                }
                              </optgroup>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label className="form-control-label" htmlFor="input-country">Postal code</label>
                            <input type="number" id="input-postal-code" defaultValue={userDetails?.postalCode} className="form-control form-control-alternative" placeholder="Postal code" name="postalCode" onChange={onChangeHandler} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* <!-- Description --> */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>About Me</label>
                        <textarea rows="4" name="aboutMe" defaultValue={userDetails?.aboutMe} onChange={onChangeHandler} className="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                      </div>
                    </div>
                    <div className="pl-lg-4">
                      <AddAndDisplayImageComp
                        onSelectImageHandler={onSelectImageHandler}
                        src={userDetails
                          ? `${backendURL}/${userDetails?.userImage}`
                          : userAltAvatar
                        }
                        imagePreview={imagePreview}
                        imageRequired={userDetails?.userImage ? false : true}
                      />
                    </div>
                    <div className="col-12 text-right">
                      {
                        btnVisibility ?
                          <CircularProgress />
                          : <button type="submit" className="btn btn-sm btn-primary"> Update </button>
                      }
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
      <SnackBarComp
        open={open}
        setOpen={setOpen}
        statusType={statusType}
        respMessage={respMessage}
        snackDuration={snackDuration}
      />
    </div>
  )
}

export default UserProfilePageComp
