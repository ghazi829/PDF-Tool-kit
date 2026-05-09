import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import JpgToPdf from './pages/Tools/JpgToPdf';
import WordToPdf from './pages/Tools/WordToPdf';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jpg-to-pdf" element={<JpgToPdf />} />
          <Route path="/word-to-pdf" element={<WordToPdf />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
