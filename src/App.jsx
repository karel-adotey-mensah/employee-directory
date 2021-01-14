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

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    let { users } = this.state

        return(
          <Router>
            <div>
              <Brand />
              <Nav />
            </div>
        </Router>
        )
  }
}

export default App
