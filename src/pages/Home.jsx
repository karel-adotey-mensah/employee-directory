import React from "react"
import SearchAndFilter from "../components/SearchAndFilter"
import ShortCardGrid from "../components/ShortCardGrid"
const axios = require('axios')

class Home extends React.Component {
    constructor(){
      super()
      this.state = {
          employees: []
      }
    }
    
    async componentDidMount(){
        const response = await axios({
            method: "get",
            url: "http://localhost:4000/api/employees"
          })
        const { data } = response.data
        this.setState(() => ({employees: data}))
        console.log(this.state.employees)
    }
    
    render(){
        return(
            <div>
                <SearchAndFilter />
                <ShortCardGrid />
            </div>
        )
    }
}
export default Home