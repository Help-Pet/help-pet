import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/layout/structure/Header";
import Footer from "./components/layout/structure/Footer";

import Home from "./components/pages/structure/Home";
import Contato from "./components/pages/structure/Contato";
import Doar from "./components/pages/structure/Doar";
import Adotar from "./components/pages/structure/Adotar";
import NotFound from "./components/pages/structure/NotFound";
 
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/doar" element={<Doar />} />
          <Route exact path="/adotar" element={<Adotar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
