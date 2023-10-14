import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const routes = [{ path: "/details", element: <Details /> }];
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-pink-50 via-blue-50 to-white">
        <Navbar />
        <Routes>
          <Route path="*" element={<Hero />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
