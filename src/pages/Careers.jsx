import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Careers = () => {
  const history = useHistory();

  useEffect(() => {
    const adminKey = localStorage.getItem("adminKey");
    if (!adminKey) {
      history.push("/admin");
    }
  }, []);

  return (
    <div>
      <p>CAREERS</p>
    </div>
  );
};

export default Careers;
