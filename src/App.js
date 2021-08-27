import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPageComp from "./components/login/LoginPageComp";
import "./App.css";
import RegisterPageComp from "./components/register/RegisterPageComp";
import HomePageComp from "./components/home/HomePageComp";
import VerifyEmailPageComp from "./components/verifyEmail/VerifyEmailPageComp";
import UserProfilePageComp from "./components/userProfile/UserProfilePageComp";
import ProtectedRoute from "./shared/components/protectedRoute/ProtectedRoute";
import ViewUserProfilePageComp from "./components/viewUserProfile/ViewUserProfilePageComp";
import UserListPageComp from "./components/userList/UserListPageComp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePageComp} />
        <Route exact path="/login" component={LoginPageComp} />
        <Route exact path="/register" component={RegisterPageComp} />
        <Route exact path="/verify-email" component={VerifyEmailPageComp} />
        <Route exact path="/user/:id" component={ViewUserProfilePageComp} />
        <ProtectedRoute path="/user-profile" component={UserProfilePageComp} />
        <ProtectedRoute path="/users" component={UserListPageComp} />
      </Switch>
    </Router>
  );
};

export default App;
