import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ex1 from "./ex1/Ex1";
import Ex2 from "./ex2/Ex2";
import Ex3 from "./ex3/Ex3";
import Ex4 from "./ex4/Ex4";

function App() {
  return (
    <BrowserRouter>
      <Ex4 />
      <Routes>
        <Route path="/" exact element={<Ex1 />} />
        <Route path="/livres" element={<Ex2 />} />
        <Route path="/covid" element={<Ex3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;