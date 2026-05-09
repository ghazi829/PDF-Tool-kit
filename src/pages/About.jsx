import React from 'react';
import { Target, Users, Globe, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-navy mb-8 tracking-tight">
            Mastering the Art of <span className="text-primary italic">PDF</span>.
          </h1>
          <p className="text-xl text-navy/60 leading-relaxed">
            PDFNinja was engineered with a single focus: to provide the fastest, most secure, and most versatile document tools on the planet. From Office files to images, we handle it with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
            <h2 className="text-4xl font-display font-bold text-navy">The Ninja Way</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Select & Upload", desc: "Choose from our suite of tools—Word, JPG, PPT, or Excel—and drop your files into our secure uploader." },
                { step: "02", title: "Stealthy Processing", desc: "Our high-performance engine works with silent precision to convert your documents while preserving 100% of the original quality." },
                { step: "03", title: "Instant Download", desc: "Retrieve your polished PDF in seconds. For your privacy, all files vanish from our servers after 60 minutes." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6 group">
                  <span className="text-primary font-display font-black text-3xl opacity-20 group-hover:opacity-100 transition-opacity duration-300">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-navy/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-[3rem] p-8 relative animate-in fade-in slide-in-from-right-5 duration-700 delay-200">
             <div className="aspect-video bg-deep-blue/50 rounded-2xl flex items-center justify-center text-white/20">
                <Target size={120} className="animate-pulse" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-3xl premium-shadow hidden md:block transition-transform hover:scale-110 duration-300">
                <ShieldCheck size={48} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Users, title: "10M+ Converts", desc: "Trusted by professionals and students worldwide for lightning-fast document tasks." },
            { icon: Globe, title: "Global Network", desc: "Available in 150+ countries with high-speed processing clusters near you." },
            { icon: ShieldCheck, title: "Stealth Security", desc: "Bank-level encryption and automatic file deletion ensure your data stays private." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 bg-white rounded-3xl premium-shadow border border-navy/5 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-display">{item.title}</h3>
              <p className="text-navy/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
