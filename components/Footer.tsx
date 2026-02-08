
import React from 'react';
import { Instagram, Facebook, Twitter, Phone, ArrowUp, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050a0e] border-t border-white/5 pt-32 pb-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 lg:col-span-1 space-y-10">
            <div className="flex flex-col items-start">
               <div className="w-12 h-12 border-2 border-luxury flex items-center justify-center rotate-45 mb-4">
                  <span className="text-luxury text-2xl font-display -rotate-45">A</span>
               </div>
               <span className="text-xl font-black tracking-[0.2em] text-white uppercase font-modern">ALMUTASAIM ALAZZEH</span>
               <span className="text-[10px] tracking-[0.5em] text-luxury uppercase font-bold font-luxury-en">Dental Clinic</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              المرجع الأول لطب الأسنان الفاخر في الأردن. نجمع بين الفن، الحب، والثقة لصناعة ابتسامتك المثالية.
            </p>
            <div className="flex items-center space-x-6 space-x-reverse">
              <a href="#" className="text-white/30 hover:text-luxury transition-all"><Instagram size={22} /></a>
              <a href="#" className="text-white/30 hover:text-luxury transition-all"><Facebook size={22} /></a>
              <a href="#" className="text-white/30 hover:text-luxury transition-all"><Twitter size={22} /></a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.4em] mb-10 flex items-center gap-4">
                <span className="w-4 h-[1px] bg-luxury"></span>
                The Clinic
            </h4>
            <ul className="space-y-6 text-white/40 text-xs font-bold uppercase tracking-widest font-modern">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-luxury transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="hover:text-luxury transition-colors">Experience</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-luxury transition-colors">Treatments</button></li>
              <li><button onClick={() => document.getElementById('doctor')?.scrollIntoView({behavior:'smooth'})} className="hover:text-luxury transition-colors">The Surgeon</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="hover:text-luxury transition-colors">Concierge</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.4em] mb-10 flex items-center gap-4">
                <span className="w-4 h-[1px] bg-luxury"></span>
                Services
            </h4>
            <ul className="space-y-6 text-white/40 text-xs font-bold uppercase tracking-widest font-modern">
              <li>Digital Smile Design</li>
              <li>Hollywood Smile</li>
              <li>Elite Implants</li>
              <li>Invisible Aligners</li>
              <li>Laser Whitening</li>
              <li>Full Mouth Rehab</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.4em] mb-10 flex items-center gap-4">
                <span className="w-4 h-[1px] bg-luxury"></span>
                Contact
            </h4>
            <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                    <Phone size={18} className="text-luxury group-hover:scale-110 transition-transform" />
                    <span className="text-white/60 text-sm font-bold tracking-widest font-modern">+962 78 073 5083</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <Mail size={18} className="text-luxury group-hover:scale-110 transition-transform" />
                    <span className="text-white/60 text-sm font-bold tracking-widest font-modern">CONCIERGE@ALAZZEHDENTAL.COM</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <MapPin size={18} className="text-luxury group-hover:scale-110 transition-transform" />
                    <span className="text-white/60 text-sm font-bold tracking-widest leading-relaxed font-modern">AMMAN, JORDAN <br /> ELITE DISTRICT</span>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-bold font-modern">
            © {new Date().getFullYear()} ALMUTASAIM ALAZZEH DENTAL CLINIC. THE ART OF PRECISION.
          </p>
          <div className="mt-8 md:mt-0 flex items-center gap-10">
            <span className="text-luxury font-luxury-en italic text-2xl tracking-[0.3em] opacity-60">Art . Love . Trust</span>
            <button 
                onClick={scrollToTop}
                className="p-4 bg-luxury/5 border border-luxury/20 text-luxury hover:bg-luxury hover:text-black transition-all duration-500 rounded-full group"
            >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
