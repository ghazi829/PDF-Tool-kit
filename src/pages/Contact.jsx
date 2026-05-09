import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-navy mb-8 tracking-tight">
            Get in <span className="text-primary italic">Touch</span>.
          </h1>
          <p className="text-xl text-navy/60 leading-relaxed">
            Have questions or feedback? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
            {[
              { icon: Mail, title: "Email Us", detail: "support@docuconvert.com", sub: "For general inquiries" },
              { icon: Phone, title: "Call Us", detail: "+1 (555) 000-0000", sub: "Mon-Fri from 9am to 6pm" },
              { icon: MapPin, title: "Visit Us", detail: "123 Tech Avenue", sub: "San Francisco, CA 94105" }
            ].map((item, i) => (
              <div 
                key={i}
                className="flex items-start space-x-6 p-8 bg-white rounded-3xl premium-shadow border border-navy/5 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <item.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-1">{item.title}</h4>
                  <p className="text-navy font-semibold mb-1">{item.detail}</p>
                  <p className="text-navy/40 text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-navy rounded-[2.5rem] p-10 md:p-16 text-white animate-in fade-in slide-in-from-right-5 duration-700 delay-200">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-2">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us more about your inquiry..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 premium-shadow hover:-translate-y-1">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
