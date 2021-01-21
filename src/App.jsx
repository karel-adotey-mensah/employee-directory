import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import "fontsource-roboto"
import Button from '@material-ui/core/Button'

import Nav from "./components/Nav"
import Brand from "./components/Brand"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Careers from "./pages/Careers"
import Gallery from "./pages/Gallery"

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    
        return(
          <Router>
            <div>
              <Brand />
              <Nav />
              <Switch>
                <Route path="/contracts">
                  <Admin />
                </Route>

                <Route path="/leave-requests">
                  <Gallery />
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
        )
  }
}

export default App
