import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import Nav from "./global_components/theme/Nav";
import Brand from "./global_components/theme/Brand";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Careers from "./pages/Careers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.setState(() => ({ isLoggedIn: true }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <div>
          <Brand />
          <Nav />
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
