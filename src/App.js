import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import Valuation from './pages/Valuation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/valuation" element={<Valuation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
