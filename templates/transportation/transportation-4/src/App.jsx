import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TemplateSelector from './components/TemplateSelector';
import Voltway from './templates/Voltway';
import Roadline from './templates/Roadline';
import Fleetrise from './templates/Fleetrise';
import Skyroute from './templates/Skyroute';
import Citymove from './templates/Citymove';
import Transitflow from './templates/Transitflow';
import Cargomax from './templates/Cargomax';
import Rideora from './templates/Rideora';
import Railnova from './templates/Railnova';
import Oceanlink from './templates/Oceanlink';

function App() {
  return (
    <BrowserRouter basename="/templates/transportation/transportation-4">
      <Routes>
        {/* Default route redirects to selector */}
        <Route path="/" element={<Skyroute />} />
        <Route path="/transportation" element={<Skyroute />} />
        
        {/* Individual templates */}
        <Route path="/voltway" element={<Voltway />} />
        <Route path="/roadline" element={<Roadline />} />
        <Route path="/fleetrise" element={<Fleetrise />} />
        <Route path="/skyroute" element={<Skyroute />} />
        <Route path="/citymove" element={<Citymove />} />
        <Route path="/transitflow" element={<Transitflow />} />
        <Route path="/cargomax" element={<Cargomax />} />
        <Route path="/rideora" element={<Rideora />} />
        <Route path="/railnova" element={<Railnova />} />
        <Route path="/oceanlink" element={<Oceanlink />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
