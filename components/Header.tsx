
import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'الرئيسية', id: 'hero' },
    { name: 'عن العيادة', id: 'about' },
    { name: 'الخدمات', id: 'services' },
    { name: 'الدكتور', id: 'doctor' },
    { name: 'تواصل معنا', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // تعويض لارتفاع الهيدر
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-1000 ${isScrolled ? 'bg-[#050a0e]/95 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-10 flex justify-between items-center">
        {/* Logo Section */}
        <div 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex flex-col items-start group cursor-pointer"
        >
          <div className="flex items-center gap-3">
             <div className="w-11 h-11 border-[0.5px] border-luxury flex items-center justify-center rotate-45 group-hover:bg-luxury group-hover:rotate-0 transition-all duration-700">
                <span className="text-luxury group-hover:text-black text-2xl font-luxury-en -rotate-45 group-hover:rotate-0 transition-all duration-700">A</span>
             </div>
             <div className="flex flex-col">
                <span className="text-base md:text-xl font-bold tracking-[0.2em] text-white font-modern uppercase">ALMUTASAIM ALAZZEH</span>
                <span className="text-[9px] md:text-[11px] tracking-[0.5em] text-luxury uppercase font-bold font-luxury-en">Dental Clinic</span>
             </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12 space-x-reverse">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-[11px] tracking-[0.25em] font-bold text-white/60 hover:text-luxury transition-all duration-500 uppercase font-modern relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 right-0 w-0 h-[1px] bg-luxury transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-10 py-3 bg-luxury text-black text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white transition-all duration-700 btn-hover-effect"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-luxury transition-transform active:scale-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#050a0e] z-40 transform transition-transform duration-1000 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
           <div className="w-16 h-16 border border-luxury flex items-center justify-center rotate-45 mb-4">
              <span className="text-luxury text-3xl font-luxury-en -rotate-45">A</span>
           </div>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-4xl font-bold text-white hover:text-luxury transition-all tracking-tighter"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-10 flex flex-col items-center gap-6">
             <a href="tel:+962780735083" className="text-luxury text-2xl font-modern font-black tracking-widest">+962 78 073 5083</a>
             <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-luxury/30"></div>
                <div className="text-white/30 tracking-[0.6em] text-[10px] font-luxury-en">ART . LOVE . TRUST</div>
                <div className="h-[1px] w-8 bg-luxury/30"></div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
