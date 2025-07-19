import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/ContactUs';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />
    </div>
  )
}
