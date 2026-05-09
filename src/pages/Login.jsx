import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] overflow-hidden premium-shadow border border-navy/5 animate-in zoom-in-95 duration-500">
        <div className="p-10 md:p-16">
          <Link to="/" className="inline-block mb-12">
             <span className="font-display font-bold text-2xl tracking-tight text-navy">
               Docu<span className="text-primary">Convert</span>
             </span>
          </Link>
          
          <h2 className="text-4xl font-display font-bold text-navy mb-4">Welcome Back</h2>
          <p className="text-navy/60 mb-10">Sign in to access your converted files and settings.</p>

          <form className="space-y-6">
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
                     placeholder="Password" 
                     className="w-full bg-navy/5 border border-transparent rounded-2xl pl-14 pr-6 py-4 focus:bg-white focus:border-primary transition-all text-navy focus:outline-none"
                   />
                </div>
                <div className="text-right">
                   <a href="#" className="text-sm font-semibold text-primary hover:underline transition-all">Forgot password?</a>
                </div>
             </div>

             <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 premium-shadow hover:-translate-y-1">
               <span>Sign In</span>
               <ArrowRight size={20} />
             </button>
          </form>

          <div className="mt-8 relative flex items-center justify-center">
             <hr className="w-full border-navy/10" />
             <span className="absolute bg-white px-4 text-sm text-navy/40 font-semibold uppercase tracking-wider">or continue with</span>
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
             Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Create Account</Link>
          </p>
        </div>

        <div className="hidden lg:flex bg-navy flex-col justify-center p-20 text-white relative">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute -top-10 -right-10 w-96 h-96 border-4 border-white/20 rounded-full animate-pulse" />
              <div className="absolute bottom-20 -left-20 w-64 h-64 border-4 border-white/10 rounded-full animate-pulse" />
           </div>
           
           <div className="relative z-10">
              <div className="bg-primary/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform hover:rotate-12 duration-300">
                 <Lock className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-4xl font-display font-bold mb-6 italic leading-tight">
                Secure. <br /> Fast. <br /> Reliable.
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Join our premium members and get access to batch conversions, cloud storage, and priority processing.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
