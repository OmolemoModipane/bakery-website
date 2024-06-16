import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
