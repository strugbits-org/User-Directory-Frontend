import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPageComp from "./components/login/LoginPageComp";
import "./App.css";
import RegisterPageComp from "./components/register/RegisterPageComp";
import HomePageComp from "./components/home/HomePageComp";
import VerifyEmailPageComp from "./components/verifyEmail/VerifyEmailPageComp";
// import LayoutComp from "./shared/components/layout/LayoutComp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePageComp} />
        <Route exact path="/login" component={LoginPageComp} />
        <Route exact path="/register" component={RegisterPageComp} />
        <Route exact path="/verify-email" component={VerifyEmailPageComp} />
      </Switch>
    </Router>
  );
};

export default App;
