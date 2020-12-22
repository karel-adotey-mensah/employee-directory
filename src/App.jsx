import React from "react"
import Users from "./pages/Users"

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      users: [
        {
          firstName: "Karel",
          lastName: "Mensah",
          department: "Kuulpeeps"
        },
        {
          firstName: "Jane",
          lastName: "Foster",
          department: "Kuulpeeps"
        }
      ],
    }
  }

  render(){
    return(
     <div>
       <Users />
     </div>
    )
  }
}

export default App
