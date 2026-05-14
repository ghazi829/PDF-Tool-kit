import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X, ChevronDown, Image as ImageIcon, Presentation, Table, Layers, Scissors, FileEdit, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const tools = [
    { name: 'Word to PDF', path: '/word-to-pdf', icon: FileText, color: 'text-blue-600' },
    { name: 'JPG to PDF', path: '/jpg-to-pdf', icon: ImageIcon, color: 'text-orange-600' },
    { name: 'PowerPoint to PDF', path: '/ppt-to-pdf', icon: Presentation, color: 'text-red-600' },
    { name: 'Excel to PDF', path: '/excel-to-pdf', icon: Table, color: 'text-green-600' },
    { name: 'Merge PDF', path: '/merge-pdf', icon: Layers, color: 'text-purple-600' },
    { name: 'Split PDF', path: '/split-pdf', icon: Scissors, color: 'text-yellow-600' },
    { name: 'PDF to Word', path: '/pdf-to-word', icon: FileEdit, color: 'text-indigo-600' },
    { name: 'Compress PDF', path: '/compress-pdf', icon: Zap, color: 'text-teal-600' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen
        ? 'bg-white py-3 premium-shadow' 
        : `py-5 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <FileText className="text-white w-6 h-6" />
          </div>
          <span className={`font-display font-bold text-2xl tracking-tight ${isHomePage && !scrolled && !isOpen ? 'text-white' : 'text-navy'}`}>
            PDF<span className="text-primary">Ninja</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
            <button className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
              isHomePage && !scrolled ? 'text-white/80 hover:text-white' : 'text-navy/70 hover:text-primary'
            }`}>
              <span>Tools</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isToolsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full -left-4 w-[480px] bg-white rounded-2xl shadow-2xl border border-navy/5 p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top ${isToolsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.path}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-navy/5 transition-colors group/item"
                >
                  <div className={`p-2 rounded-lg bg-white shadow-sm border border-navy/5 ${tool.color} group-hover/item:scale-110 transition-transform`}>
                    <tool.icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{tool.name}</p>
                    <p className="text-navy/40 text-xs">Professional conversion</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors ${
                isHomePage && !scrolled 
                  ? `hover:text-white ${location.pathname === link.path ? 'text-white font-bold' : 'text-white/70'}` 
                  : `hover:text-primary ${location.pathname === link.path ? 'text-primary font-bold' : 'text-navy/70'}`
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Link to="/login" className={`font-semibold transition-colors ${
              isHomePage && !scrolled ? 'text-white hover:text-white/80' : 'text-navy hover:text-primary'
            }`}>
              Log in
            </Link>
            <Link
              to="/signup"
              className={`${
                isHomePage && !scrolled ? 'bg-white text-navy' : 'bg-navy text-white'
              } px-6 py-2.5 rounded-full font-semibold transition-all premium-shadow hover:scale-105`}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden transition-colors ${isHomePage && !scrolled && !isOpen ? 'text-white' : 'text-navy'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-white premium-shadow md:hidden border-t border-navy/10 transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            <p className="text-xs font-bold text-navy/30 uppercase tracking-wider px-2">Tools</p>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-navy/5"
                >
                  <tool.icon size={18} className={tool.color} />
                  <span className="text-sm font-semibold text-navy truncate">{tool.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <hr className="border-navy/10" />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-navy/70'}`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-navy/10" />
          <div className="flex flex-col space-y-4">
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-navy">
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center py-3 rounded-xl font-bold"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
