import React from "react";
import { useState } from "react";
import CartesContainer from "./CartesContainer";

function Ex2() {
  // Q1 declaration Liste de livres
  const [livres, setLivres] = useState([
    {
      titre: "smtng1",
      auteur: "IDK",
      edition: "anything",
      poster:
        "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    },
    {
      titre: "smtng2",
      auteur: "IDK2",
      edition: "anything2",
      poster:
        "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    },
    {
      titre: "smtng3",
      auteur: "IDK3",
      edition: "anything3",
      poster:
        "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    },
  ]);
  // Q2 See Carte.jsx
  // Q3 tlghda :)
  //   Q4 See CartesContainer.jsx
  return <CartesContainer livres={livres} />;
}

export default Ex2;
