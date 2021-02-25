import React from "react";
import Footer from "../home_components/Footer";
import SearchAndFilter from "../home_components/SearchAndFilter";
import ShortCardGrid from "../home_components/CardGrid";
import Spinner from "../global_components/Spinner";
const axios = require("axios");

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
      queriedEmployeeData: [],
      filterValue: "allDepartments",
      searchValue: "",
      isLoading: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await axios({
      method: "get",
      url: "http://localhost:4000/api/employees",
    });
    const { data } = response.data;
    this.setState(() => ({ employeeData: data, queriedEmployeeData: data }));
    this.setState(() => ({ isLoading: false }));
  }

  handleChange = async (event) => {
    const { value, name } = event.target;
    const { employeeData } = this.state;

    if (name === "filter" && value !== "allDepartments") {
      const filteredEmployees = employeeData.filter(
        (individualData) => individualData.department === value
      );
      this.setState(() => ({
        filterValue: value,
        queriedEmployeeData: filteredEmployees,
      }));
    } else if (name === "filter" && value === "allDepartments") {
      this.setState(() => ({
        filterValue: value,
        queriedEmployeeData: employeeData,
      }));
    } else {
      const searchPhrase = value.toLowerCase();
      const isSearchItem = (firstName, lastName, department) => {
        const fullName = firstName + " " + lastName;
        return (
          firstName.toLowerCase().includes(searchPhrase) ||
          lastName.toLowerCase().includes(searchPhrase) ||
          fullName.toLowerCase().includes(searchPhrase) ||
          department.toLowerCase().includes(searchPhrase)
        );
      };
      const searchResults = employeeData.filter((searchItem) =>
        isSearchItem(
          searchItem.firstName,
          searchItem.lastName,
          searchItem.department
        )
      );
      this.setState(() => ({
        searchValue: value,
        queriedEmployeeData: searchResults,
      }));
    }
  };

  render() {
    const {
      filterValue,
      searchValue,
      queriedEmployeeData,
      employeeData,
      isLoading,
    } = this.state;

    return (
      <div>
        <SearchAndFilter
          filterValue={filterValue}
          searchValue={searchValue}
          changeFilterValue={this.handleChange}
          changeSearchValue={this.handleChange}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <ShortCardGrid employeeData={queriedEmployeeData} />
        )}
        <Footer employeeCount={employeeData.length} />
      </div>
    );
  }
}
export default Home;