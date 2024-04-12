// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PredictionPage from './pages/PredictionPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictionPage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
