import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPageComp from "./components/login/LoginPageComp";
import "./App.css";
import RegisterPageComp from "./components/register/RegisterPageComp";
import HomePageComp from "./components/home/HomePageComp";
import VerifyEmailPageComp from "./components/verifyEmail/VerifyEmailPageComp";
import UserProfilePageComp from "./components/userProfile/UserProfilePageComp";
import ProtectedRoute from "./shared/components/protectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePageComp} />
        <Route exact path="/login" component={LoginPageComp} />
        <Route exact path="/register" component={RegisterPageComp} />
        <Route exact path="/verify-email" component={VerifyEmailPageComp} />
        <ProtectedRoute path="/user-profile" component={UserProfilePageComp} />
      </Switch>
    </Router>
  );
};

export default App;
