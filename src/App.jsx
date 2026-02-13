import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import QA from "./pages/QA.jsx";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/QA" element={<QA />} />
    </Routes>
  );
}
