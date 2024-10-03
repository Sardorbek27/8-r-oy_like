

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LikePage from './pages/LikePage';
const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/like">Liked Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/like" element={<LikePage />} />
      </Routes>
    </Router>
  );
};

export default App;
