import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPageComp from "./components/login/LoginPageComp";
import bgImage from "./assets/background.png";
import ftrImage from "./assets/footerBubbles.png";
import "./App.css";
import RegisterPageComp from "./components/register/RegisterPageComp";

const App = () => {
  return (
    <div className="bg-image" style={{ backgroundImage: `url(${bgImage})` }}>
      <div
        className="bubble-image"
        style={{ backgroundImage: `url(${ftrImage})` }}
      />
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPageComp} />
          <Route exact path="/register" component={RegisterPageComp} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
