import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Child(props) {
    let { id } = useParams()

/* ------------------- Find Index of Current User in Array ------------------ */

    // let currentIndex = props.users.findIndex(isIdMatch)
    let currentUser = props.users.find(user => user.id === id)

/* -------------------------------------------------------------------------- */
/*                         User Object for Development                        */
/* -------------------------------------------------------------------------- */

    useEffect(() => {
      console.log(currentUser.department)
      }, [currentUser])

/* --------------------------------- Display -------------------------------- */

    return (
      <div>
        {"current user: " + currentUser.firstName}
      </div>
    );
  }

export default Child
