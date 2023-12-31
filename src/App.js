import HomePage from "./pages/HomePage";
import About from "./pages/About";
import TourPackage from "./pages/TourPackage";
import { Routes, Route } from "react-router-dom";
import DetailPackage from "./pages/DetailPackage";


function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
    <Route path="/tour-package" element={<TourPackage />} />
    <Route path="/tour-package/:tourPackageId" element={<DetailPackage />} />
  </Routes>
  </>
  );
}

export default App;
