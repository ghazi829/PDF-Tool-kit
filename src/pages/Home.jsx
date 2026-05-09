import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Zap, Image as ImageIcon, Presentation, Table, Layers, Scissors, FileEdit } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
            Every PDF Tool at Your <span className="text-primary italic">Fingertips</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            PDFNinja provides all the tools you need to manage your documents effectively. 
            Fast, secure, and professional.
          </p>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-navy mb-4">Popular PDF Tools</h2>
            <p className="text-navy/60 text-lg">Select a tool below to get started with your conversion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Word to PDF", desc: "Convert DOC and DOCX files to PDF.", icon: FileText, path: "/word-to-pdf", color: "bg-blue-50 text-blue-600" },
              { title: "JPG to PDF", desc: "Convert JPG images to PDF in seconds.", icon: ImageIcon, path: "/jpg-to-pdf", color: "bg-orange-50 text-orange-600" },
              { title: "PowerPoint to PDF", desc: "Convert PPT and PPTX to PDF format.", icon: Presentation, path: "/word-to-pdf", color: "bg-red-50 text-red-600" },
              { title: "Excel to PDF", desc: "Convert Excel spreadsheets to PDF.", icon: Table, path: "/excel-to-pdf", color: "bg-green-50 text-green-600" },
              { title: "Merge PDF", desc: "Combine multiple PDFs into one document.", icon: Layers, path: "/merge-pdf", color: "bg-purple-50 text-purple-600" },
              { title: "Split PDF", desc: "Separate one page or a whole set.", icon: Scissors, path: "/split-pdf", color: "bg-yellow-50 text-yellow-600" },
              { title: "PDF to Word", desc: "Convert PDF files back to Word documents.", icon: FileEdit, path: "/pdf-to-word", color: "bg-indigo-50 text-indigo-600" },
              { title: "Compress PDF", desc: "Reduce file size without losing quality.", icon: Zap, path: "/compress-pdf", color: "bg-teal-50 text-teal-600" },
            ].map((tool, i) => (
              <Link
                key={i}
                to={tool.path}
                className="group bg-white p-8 rounded-3xl border border-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${tool.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <tool.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why choose PDFNinja?</h2>
            <p className="text-white/60 text-lg">Built for speed, security, and precision.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Our high-performance servers ensure your documents are converted in seconds, not minutes." },
              { icon: Shield, title: "Privacy First", desc: "All files are processed securely and deleted automatically from our servers after one hour." },
              { icon: FileText, title: "Perfect Quality", desc: "Your PDF will look exactly like your original document, with all formatting preserved perfectly." }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-display">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden premium-shadow group">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110" />
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-navy/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110" />
             
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">Ready to start converting?</h2>
             <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                Join thousands of users who trust PDFNinja for their daily document tasks. No credit card required.
             </p>
             <Link to="/signup" className="inline-block bg-navy text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-navy/90 transition-all premium-shadow relative z-10 hover:scale-105">
                Get Started for Free
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
