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
import ExcelToPdf from './pages/Tools/ExcelToPdf';
import MergePdf from './pages/Tools/MergePdf';
import SplitPdf from './pages/Tools/SplitPdf';
import PdfToWord from './pages/Tools/PdfToWord';
import CompressPdf from './pages/Tools/CompressPdf';
import PptToPdf from './pages/Tools/PptToPdf';

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
          <Route path="/excel-to-pdf" element={<ExcelToPdf />} />
          <Route path="/ppt-to-pdf" element={<PptToPdf />} />
          <Route path="/merge-pdf" element={<MergePdf />} />
          <Route path="/split-pdf" element={<SplitPdf />} />
          <Route path="/pdf-to-word" element={<PdfToWord />} />
          <Route path="/compress-pdf" element={<CompressPdf />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
