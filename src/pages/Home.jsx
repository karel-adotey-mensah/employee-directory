import React from "react"
import SearchAndFilter from "../components/SearchAndFilter"
import ShortCardGrid from "../components/ShortCardGrid"
const axios = require('axios')

class Home extends React.Component {
    constructor(){
      super()
      this.state = {
          employeeData: [],
          filterValue: "allDepartments",
          searchValue: ""
      }

      this.handleChange = this.handleChange.bind(this)
    }
    
    async componentDidMount(){
        const response = await axios({
            method: "get",
            url: "http://localhost:4000/api/employees",
          })
        const { data } = response.data
        this.setState(() => ({employeeData: data}))
    }

        handleChange = async(event) => {
        const { value, name } = event.target
        
        if (name === "filter" && value !== "allDepartments") {
            const filteredEmployees = await axios({
                method: "post",
                url: "http://localhost:4000/api/employees/query",
                data: {
                    department: value
                }
              })
            const { data } = filteredEmployees.data
            this.setState(() => ({filterValue: value, employeeData: data}))

        } else if (name === "filter" && value === "allDepartments") {
            const noFilter = await axios({
                method: "get",
                url: "http://localhost:4000/api/employees",
              })
            const { data } = noFilter.data
            this.setState(() => ({filterValue: value, employeeData: data}))

        } else {
            const searchedEmployees = await axios({
                method: "post",
                url: "http://localhost:4000/api/employees/query/s",
                data: {
                    searchPhrase: value
                }
              })
            const { data } = searchedEmployees.data
            this.setState(() => ({searchValue: value, employeeData: data}))
        }
        
    } 
    
    render(){
        return(
            <div>
                <SearchAndFilter
                    filterValue={this.state.filterValue}
                    searchValue={this.state.searchValue}
                    changeFilterValue={this.handleChange}
                    changeSearchValue={this.handleChange}
                    />
                <ShortCardGrid employeeData={this.state.employeeData}/>
            </div>
        )
    }
}
export default Home