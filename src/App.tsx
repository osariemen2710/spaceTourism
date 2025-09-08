import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpaceTravelPage from './components/landing';
import Destination from './components/destination';
import Crew from './components/crew';
import Tech from './components/tech';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SpaceTravelPage />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Tech />} />
    </Routes>
  );
};

export default App;