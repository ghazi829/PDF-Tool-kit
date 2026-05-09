import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 premium-shadow' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <FileText className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-navy">
            Docu<span className="text-primary">Convert</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-navy/70'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-navy font-semibold hover:text-primary transition-colors">
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-navy text-white px-6 py-2.5 rounded-full font-semibold hover:bg-deep-blue transition-all premium-shadow"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full glass premium-shadow md:hidden border-t border-navy/10 transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
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
    </nav>
  );
};

export default Navbar;
