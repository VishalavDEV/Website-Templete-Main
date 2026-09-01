import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
import Selector from "./components/Selector";
import EstatePrime from "./pages/EstatePrime/EstatePrime";
import Urbanova from "./pages/Urbanova/Urbanova";
import LuxoraEstates from "./pages/Luxora/LuxoraEstates";
import SkylineCollective from "./pages/SkylineCollective/SkylineCollective";
import TerraLiving from "./pages/TerraLiving/TerraLiving";
import MetroHaus from "./pages/MetroHaus/MetroHaus";
import HeritageHomes from "./pages/HeritageHomes/HeritageHomes";
import VertexProperties from "./pages/VertexProperties/VertexProperties";
import HavenRealty from "./pages/HavenRealty/HavenRealty";
import MonumentEstates from "./pages/MonumentEstates/MonumentEstates";

export default function App() {
  return (
    <Router basename="/templates/real-estate/real-estate-8">
      <ScrollToTop />
      <Routes>
        {/* Main Selector Page */}
        <Route path="/" element={<VertexProperties />} />
        <Route path="/real-estate" element={<VertexProperties />} />

        {/* 10 Signature Brand Templates */}
        <Route path="/estate-prime" element={<EstatePrime />} />
        <Route path="/urbanova" element={<Urbanova />} />
        <Route path="/luxora-estates" element={<LuxoraEstates />} />
        <Route path="/skyline-collective" element={<SkylineCollective />} />
        <Route path="/terra-living" element={<TerraLiving />} />
        <Route path="/metrohaus" element={<MetroHaus />} />
        <Route path="/heritage-homes" element={<HeritageHomes />} />
        <Route path="/vertex-properties" element={<VertexProperties />} />
        <Route path="/haven-realty" element={<HavenRealty />} />
        <Route path="/monument-estates" element={<MonumentEstates />} />
      </Routes>
    </Router>
  );
}
