import React from "react";

function Carte({ livre }) {
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
            color: "#8989f0",
            backgroundColor: "white",
            outlineColor: "transparent",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          Like (1)
        </button>
      </div>
    </div>
  );
}

export default Carte;
