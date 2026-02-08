
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050a0e]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=100&w=2600" 
          alt="Ultra Luxury Dental Clinic" 
          className="w-full h-full object-cover hero-zoom brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a0e_95%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <div className="mb-14 flex flex-col items-center opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
            <div className="flex items-center gap-8 mb-6">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-luxury/50 to-luxury"></div>
                <span className="text-luxury tracking-[0.7em] uppercase text-xs md:text-sm font-black font-luxury-en">Art . Love . Trust</span>
                <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-luxury/50 to-luxury"></div>
            </div>
        </div>
        
        <h1 className="text-5xl md:text-9xl font-black mb-12 text-white leading-[1.1] tracking-tight opacity-0 animate-[fadeInUp_1.5s_ease-out_0.5s_forwards]">
          نحت <span className="text-[#d4a373] font-luxury-en italic font-normal">الكمال</span> <br />
          <span className="text-3xl md:text-5xl font-light opacity-60 block mt-6 tracking-[0.3em] font-modern uppercase">The Architecture of Smiles</span>
        </h1>
        
        <p className="text-lg md:text-3xl text-white/50 mb-16 max-w-5xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeInUp_1.5s_ease-out_0.8s_forwards]">
          في عيادة الدكتور المعتصم العزه، نتجاوز حدود الطب التقليدي لنصنع تحفاً فنية <br className="hidden md:block" /> 
          تجسد شخصيتك الفريدة وتمنحك الثقة المطلقة التي تستحقها.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 opacity-0 animate-[fadeInUp_1.5s_ease-out_1.1s_forwards]">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-20 py-6 overflow-hidden bg-[#d4a373] text-black font-black text-xs tracking-[0.4em] uppercase hover:shadow-[0_0_80px_rgba(212,163,115,0.6)] transition-all duration-700 border-none outline-none"
          >
            <span className="relative z-10">Private Inquiry</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-20 py-6 border-[0.5px] border-white/20 text-white/70 text-xs font-bold tracking-[0.4em] uppercase hover:bg-white/5 hover:border-white transition-all duration-1000 backdrop-blur-sm"
          >
            Explore Philosophy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
