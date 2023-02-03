import React from "react";
import { useSelector } from "react-redux";
import Carte from "./Carte";

function CartesContainer() {
  const livres = useSelector((state) => state.allLivres.livres);
  return (
    <div style={styles.container}>
      {livres.map((livre) => (
        <Carte key={livre.titre} livre={livre} />
      ))}
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "gray",
    gap: "4px",
    padding: "5px",
  },
};
export default CartesContainer;
