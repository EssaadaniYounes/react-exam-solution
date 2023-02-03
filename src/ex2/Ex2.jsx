import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLivres } from "./redux/actions";
import CartesContainer from "./CartesContainer";
// Q1 declaration Liste de livres
const livres = [
  {
    titre: "smtng1",
    auteur: "IDK",
    edition: "anything",
    poster:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    likes: 0,
  },
  {
    titre: "smtng2",
    auteur: "IDK2",
    edition: "anything2",
    poster:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    likes: 0,
  },
  {
    titre: "smtng3",
    auteur: "IDK3",
    edition: "anything3",
    poster:
      "https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg",
    likes: 0,
  },
];
function Ex2() {
  const dispatch = useDispatch();

  //Redux here to add data to the store using dispatch
  useEffect(() => {
    dispatch(setLivres(livres));
  }, []);

  // Q2 See Carte.jsx

  //   Q4 See CartesContainer.jsx
  return <CartesContainer />;
}

export default Ex2;
