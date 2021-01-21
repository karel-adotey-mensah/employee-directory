import React from "react"
import SearchAndFilter from "../components/SearchAndFilter"
import ShortCardGrid from "../components/ShortCardGrid"
const axios = require('axios')

class Home extends React.Component {
    constructor(){
      super()
      this.state = {
          employeeData: [],
          filterValue: "allDepartments"
      }

      this.handleChange = this.handleChange.bind(this)
    }
    
    async componentDidMount(){
        const response = await axios({
            method: "get",
            url: "http://localhost:4000/api/employees",
            params: {
                firstName: "Karel"
            }
          })
        const { data, request, message } = response.data
        this.setState(() => ({employeeData: data}))
        console.log(request)
    }

        handleChange = async(event) => {
        const { value } = event.target
        // const filteredEmployees = await axios({
        //     method: "get",
        //     url: "http://localhost:4000/api/employees",
        //     data: {
        //         department: value
        //     }
        //   })
        // const { data } = filteredEmployees.data
        // console.log(data);
        this.setState(() => {
            return {filterValue: value}
        })
    } 
    
    render(){
        return(
            <div>
                <SearchAndFilter filterValue={this.state.filterValue} changeFilterValue={this.handleChange}/>
                <ShortCardGrid employeeData={this.state.employeeData}/>
            </div>
        )
    }
}
export default Home