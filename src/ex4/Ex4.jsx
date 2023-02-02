import React from "react";
import { Link } from "react-router-dom";

function Ex4() {
  return (
    <div>
      <Link to={"/"} style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Poids ideal
      </Link>
      <Link to={"/livres"} style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Livres
      </Link>
      <Link to={"/covid"} style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Covid
      </Link>
    </div>
  );
}

export default Ex4;
