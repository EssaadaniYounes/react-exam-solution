import React from "react";
import { useState } from "react";
import Homme from "./homme.png";
import Femme from "./female.png";
function Ex1() {
  const [taille, setTaille] = useState(0);
  const [genre, setGenre] = useState("homme");
  const [poids, setPoids] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Question C si la taille un chaine de character
    if (isNaN(taille)) {
      return setPoids("la taille doit etre un entier!!");
    }
    //   Question B Error si la poids <150
    if (taille < 150) return alert("Taille doit etre supperier 150cm");

    //Question D calculer poids
    setPoids("poids ideal est :" + (taille * 74) / 190 + "kg");
  };

  return (
    <form action="/" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taille">Taille en CM:</label>
        <input
          type="text"
          name="taille"
          id="taille"
          onChange={(e) => setTaille(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <select
          name="genre"
          id="genre"
          onChange={
            (e) => setGenre(e.target.value) /* Q1 we change the sex here*/
          }
        >
          <option value={genre} disabled>
            Choisir le genre
          </option>
          <option value="femme">Femme</option>
          <option value="homme">Homme</option>
        </select>
        <img
          src={genre === "homme" ? Homme : Femme}
          alt=""
          style={{ width: "50px", height: "100px" }}
        />
      </div>
      <div>
        <label htmlFor="poids">Poids ideal:</label>
        <input type="text" name="poids" id="poids" value={poids} readOnly />
      </div>
      <button>Calculer</button>
    </form>
  );
}

export default Ex1;
