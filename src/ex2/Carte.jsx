import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increaseLikes } from "./redux/actions";
function Carte({ livre }) {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const handleIncreaseLikes = () => {
    let data = dispatch(increaseLikes(livre));
    setRefresh(!refresh);
  };
  useEffect(() => {
    console.log("I DID THIS TO RERENDER THE COMPONENT BCS THERE'S A BUG");
  }, [refresh]);
  return (
    <div
      style={{
        backgroundColor: "white",
        minWidth: "300px",
        width: "32%",
        borderRadius: "10px",
      }}
    >
      <img
        src={livre.poster}
        alt={livre.titre}
        style={{
          maxWidth: "100%",
          maxHeight: "30%",
          height: "400px",
          width: "100%",
        }}
      />
      <div style={{ padding: "6px" }}>
        <h4>{livre.titre}</h4>
        <p style={{ fontSize: "18px", fontWeight: "lighter" }}>
          Auteur :{livre.auteur}{" "}
        </p>
        <p style={{ fontSize: "18px", fontWeight: "lighter" }}>
          Edition :{livre.edition}{" "}
        </p>
        <button
          style={{
            borderColor: "#8989f0",
            color: livre.likes == 0 ? "white" : "#8989f0",
            backgroundColor: livre.likes == 0 ? "#8989f0" : "white",
            outlineColor: "transparent",
            borderRadius: "8px",
            padding: "8px",
          }}
          onClick={handleIncreaseLikes}
        >
          Like ({livre.likes})
        </button>
      </div>
    </div>
  );
}

export default Carte;
