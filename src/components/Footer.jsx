import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <FileText className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Docu<span className="text-primary">Convert</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              The fastest and most secure way to convert your Microsoft Office documents to PDF format. Professional tools for professional work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Tools</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-primary transition-colors">Word to PDF</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">JPG to PDF</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Excel to PDF</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Merge PDF</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">API Docs</Link></li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span>support@docuconvert.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} DocuConvert Inc. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Streamlining your document workflow with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
