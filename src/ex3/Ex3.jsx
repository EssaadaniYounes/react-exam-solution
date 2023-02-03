import React, { useEffect, useState } from "react";

function Ex3() {
  const [countries, setCountries] = useState([]);
  //Q1 Code qui recupere les donnees dans le variable countries
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  // Q2 Code D'afficher les pays avec nombre de cases
  return (
    <ul>
      {countries.map((c) => (
        <li key={c.country}>
          {c.country}------{c.cases}
        </li>
      ))}
    </ul>
  );
}

export default Ex3;
