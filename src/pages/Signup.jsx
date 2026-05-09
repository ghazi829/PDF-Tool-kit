import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden premium-shadow border border-navy/5 animate-in zoom-in-95 duration-500">
        <div className="p-10 md:p-16">
          <Link to="/" className="inline-block mb-12">
             <span className="font-display font-bold text-2xl tracking-tight text-navy">
               Docu<span className="text-primary">Convert</span>
             </span>
          </Link>
          
          <h2 className="text-4xl font-display font-bold text-navy mb-4">Join Us Today</h2>
          <p className="text-navy/60 mb-10">Create your account and start converting like a pro.</p>

          <form className="space-y-6">
             <div className="space-y-2">
                <div className="relative">
                   <User className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/30" size={20} />
                   <input 
                     type="text" 
                     placeholder="Full Name" 
                     className="w-full bg-navy/5 border border-transparent rounded-2xl pl-14 pr-6 py-4 focus:bg-white focus:border-primary transition-all text-navy focus:outline-none"
                   />
                </div>
             </div>
             <div className="space-y-2">
                <div className="relative">
                   <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/30" size={20} />
                   <input 
                     type="email" 
                     placeholder="Email Address" 
                     className="w-full bg-navy/5 border border-transparent rounded-2xl pl-14 pr-6 py-4 focus:bg-white focus:border-primary transition-all text-navy focus:outline-none"
                   />
                </div>
             </div>
             <div className="space-y-2">
                <div className="relative">
                   <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-navy/30" size={20} />
                   <input 
                     type="password" 
                     placeholder="Create Password" 
                     className="w-full bg-navy/5 border border-transparent rounded-2xl pl-14 pr-6 py-4 focus:bg-white focus:border-primary transition-all text-navy focus:outline-none"
                   />
                </div>
             </div>

             <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 premium-shadow hover:-translate-y-1">
               <span>Create Account</span>
               <ArrowRight size={20} />
             </button>
          </form>

          <div className="mt-8 relative flex items-center justify-center">
             <hr className="w-full border-navy/10" />
             <span className="absolute bg-white px-4 text-sm text-navy/40 font-semibold uppercase tracking-wider">or join with</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
             <button className="flex-1 border border-navy/10 py-4 rounded-2xl flex items-center justify-center space-x-3 hover:bg-navy/5 transition-all hover:border-primary/30">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
                <span className="font-bold text-navy">Google</span>
             </button>
             <button className="flex-1 border border-navy/10 py-4 rounded-2xl flex items-center justify-center space-x-3 hover:bg-navy/5 transition-all hover:border-primary/30">
                <Github size={24} className="text-navy" />
                <span className="font-bold text-navy">GitHub</span>
             </button>
          </div>

          <p className="mt-10 text-center text-navy/60">
             Already have an account? <Link to="/login" className="text-primary font-bold hover:underline transition-all">Sign In</Link>
          </p>
        </div>

        <div className="hidden lg:flex bg-navy flex-col justify-center p-20 text-white relative">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal/20 rounded-full blur-3xl" />
           </div>
           
           <div className="relative z-10 text-center">
              <div className="inline-block bg-white/10 p-6 rounded-[2rem] backdrop-blur-xl border border-white/10 mb-8 transition-transform hover:scale-105 duration-300">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                       <div key={i} className="w-12 h-12 rounded-full border-2 border-navy bg-navy/80 flex items-center justify-center text-xs font-bold overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                       </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-navy bg-primary flex items-center justify-center text-xs font-bold">
                       +10k
                    </div>
                 </div>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 leading-tight">
                Join 10,000+ users worldwide.
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                "PDFNinja has saved me hours of work. The quality is unmatched and the speed is incredible!"
              </p>
              <div className="mt-6 flex justify-center space-x-1">
                 {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400">★</span>
                 ))}
              </div>
              <p className="mt-2 font-bold italic">Sarah Jenkins, Product Manager</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
