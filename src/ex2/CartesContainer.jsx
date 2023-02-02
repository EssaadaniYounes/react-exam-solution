import React from "react";
import Carte from "./Carte";

function CartesContainer({ livres }) {
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
