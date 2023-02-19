import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bar from "./pages/Bar";
import Rastreio from "./pages/Rastreio";
import Cep from "./pages/Cep";

function App() {
  return (
    <div className="App">
      <Bar />
      <BrowserRouter>
        <Routes>
          <Route path="/cep" element={<Rastreio />} />
          <Route path="/" element={<Cep />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
