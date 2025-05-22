import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Product } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
