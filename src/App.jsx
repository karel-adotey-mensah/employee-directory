import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "fontsource-roboto";
import Nav from "./global_components/Nav";
import Brand from "./global_components/Brand";
import Home from "./main_pages/Home";
import Admin from "./main_pages/Admin";
import Careers from "./main_pages/Careers";

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
            <Route path="/login">
              <Admin />
            </Route>
            <Route path="/add-employee">
              <Careers />
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
