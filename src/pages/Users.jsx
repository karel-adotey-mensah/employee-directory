import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

function Users(props) {
    return(
        <Router>
             <Link to="/">Home</Link>
             <Link to={"/" + props.currentUser}>{props.currentUser}</Link>

             <Switch>
          <Route path="/">
            <h1>Home</h1>
          </Route>
          <Route path={"/" + props.currentUser}>
          <h1>{props.currentUser}</h1>
          </Route>
        </Switch>
        </Router>
    )
}

  export default Users