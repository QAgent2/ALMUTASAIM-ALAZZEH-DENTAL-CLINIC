
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, 
  Sparkles, Star, Shield, Zap, Smile, PlusSquare, 
  Award, GraduationCap, ShieldCheck, Quote, MessageSquare, ArrowUp
} from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: id === 'hero' ? 0 : element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#d4a373] selection:text-black bg-[#050a0e]">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-1000 ${isScrolled ? 'bg-[#050a0e]/95 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div onClick={() => scrollToSection('hero')} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 border border-[#d4a373] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-700">
              <span className="text-[#d4a373] text-xl font-luxury-en -rotate-45 group-hover:rotate-0 transition-all">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-[0.2em] text-sm md:text-lg uppercase">ALMUTASAIM ALAZZEH</span>
              <span className="text-[#d4a373] text-[9px] tracking-[0.5em] uppercase font-bold font-luxury-en">Dental Clinic</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10 space-x-reverse">
            {['الرئيسية', 'عن العيادة', 'الخدمات', 'الدكتور', 'تواصل معنا'].map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => scrollToSection(['hero', 'about', 'services', 'doctor', 'contact'][idx])}
                className="text-[11px] font-bold text-white/60 hover:text-[#d4a373] transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-[#d4a373] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all">
              Private Inquiry
            </button>
          </div>

          <button className="lg:hidden text-[#d4a373]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=100&w=2600" 
            className="w-full h-full object-cover brightness-[0.2] scale-105 animate-[pulse_10s_infinite]" 
            alt="Ultra Luxury" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a0e] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#d4a373]"></div>
            <span className="text-[#d4a373] tracking-[0.5em] text-xs font-black uppercase font-luxury-en">Art . Love . Trust</span>
            <div className="h-[1px] w-12 bg-[#d4a373]"></div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-10 leading-tight tracking-tighter">
            نحت <span className="text-[#d4a373] italic font-luxury-en font-normal">الكمال</span>
          </h1>
          <p className="text-white/50 text-xl md:text-3xl max-w-4xl mx-auto mb-16 font-light">
            في عيادة الدكتور المعتصم العزه، نصنع ابتسامة تعكس جوهرك الحقيقي بلمسات فنية وتقنيات عالمية.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button onClick={() => scrollToSection('contact')} className="px-16 py-6 bg-[#d4a373] text-black font-black uppercase tracking-widest hover:shadow-[0_0_80px_rgba(212,163,115,0.4)] transition-all">
              Book Appointment
            </button>
            <button onClick={() => scrollToSection('about')} className="px-16 py-6 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
              Our Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-52 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#d4a373]/30 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-1000"></div>
            <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=100&w=1400" className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Excellence" />
          </div>
          <div className="space-y-12">
            <h2 className="text-[#d4a373] tracking-[0.5em] uppercase text-xs font-black">The Sanctuary</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">رؤية استثنائية <br/> <span className="text-[#d4a373] italic font-luxury-en font-normal">لفن</span> طب الأسنان</h3>
            <p className="text-white/60 text-xl leading-relaxed font-light border-r-2 border-[#d4a373] pr-8">
              نحن لا نعالج الأسنان فحسب، بل نعيد تصميم ملامح الثقة. في عيادتنا، يلتقي العلم بالفن لخلق تجربة علاجية ملكية تضمن لك الخصوصية والدقة المتناهية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-white font-bold text-xl flex items-center gap-3"><Zap className="text-[#d4a373]" /> دقة رقمية</h4>
                <p className="text-white/40 text-sm">استخدام أحدث أنظمة التصميم الرقمي ثلاثي الأبعاد لضمان نتائج مثالية.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold text-xl flex items-center gap-3"><ShieldCheck className="text-[#d4a373]" /> أمان مطلق</h4>
                <p className="text-white/40 text-sm">بروتوكولات تعقيم عالمية لضمان سلامة كل مريض في بيئة نقية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#0a0f14] border-t border-white/5">
        <div className="container mx-auto px-6 text-center mb-24">
          <h2 className="text-[#d4a373] tracking-[0.5em] uppercase text-xs font-black mb-6">Treatments</h2>
          <h3 className="text-5xl font-black text-white">خدماتنا النخبوية</h3>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'تجميل الأسنان', icon: Sparkles, desc: 'تصحيح العيوب وإبراز الجمال الطبيعي لأسنانك.' },
            { title: 'ابتسامة هوليوود', icon: Star, desc: 'ابتسامة مشرقة تناسب ملامح وجهك بدقة.' },
            { title: 'زراعة الأسنان', icon: PlusSquare, desc: 'استعادة الأسنان المفقودة بأحدث التقنيات السويسرية.' },
            { title: 'تقويم الأسنان', icon: Zap, desc: 'حلول تقويمية غير مرئية لتنسيق مثالي.' },
            { title: 'تبييض الأسنان', icon: Shield, desc: 'بياض ناصع في جلسة واحدة فقط بآمان تام.' },
            { title: 'تصميم الابتسامة', icon: Smile, desc: 'تحليل رقمي شامل قبل البدء بالعلاج.' }
          ].map((s, i) => (
            <div key={i} className="group p-12 bg-[#0d141b] border border-white/5 hover:border-[#d4a373]/50 transition-all duration-700">
              <s.icon className="text-[#d4a373] w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-white mb-6">{s.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Bio */}
      <section id="doctor" className="py-32 md:py-52 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-10 border border-[#d4a373]/10 -z-10 rounded-full scale-110 animate-pulse"></div>
             <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=100&w=1200" className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="Dr. Almutasaim" />
             <div className="absolute bottom-10 right-0 bg-[#050a0e] p-8 border-r-4 border-[#d4a373]">
                <h4 className="text-white font-black text-2xl tracking-tighter">Dr. Almutasaim Alazzeh</h4>
                <p className="text-[#d4a373] text-[10px] uppercase tracking-widest font-bold">Clinical Director</p>
             </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <h3 className="text-6xl font-black text-white leading-tight">الدكتور <br/> <span className="text-[#d4a373] italic font-luxury-en">المعتصم العزه</span></h3>
            <p className="text-white/60 text-xl font-light leading-relaxed">بخبرة تتجاوز 15 عاماً في طب الأسنان التجميلي والجراحة الرقمية، يقود الدكتور المعتصم فريقاً طبياً متكاملاً لتقديم أعلى مستويات الرعاية الطبية في الأردن.</p>
            <div className="grid grid-cols-2 gap-8">
               <div className="flex items-center gap-4">
                  <Award className="text-[#d4a373]" />
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Board Certified</span>
               </div>
               <div className="flex items-center gap-4">
                  <GraduationCap className="text-[#d4a373]" />
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Implant Expert</span>
               </div>
            </div>
            <button onClick={() => scrollToSection('contact')} className="px-12 py-5 bg-[#d4a373] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all">Consultation</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#0a0f14] border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-[#d4a373] tracking-[0.5em] uppercase text-xs font-black">Concierge</h2>
            <h3 className="text-5xl font-black text-white">ابدأ رحلتك اليوم</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a373] group-hover:bg-[#d4a373] group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">+962 78 073 5083</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Call or WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-[#d4a373] group-hover:bg-[#d4a373] group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">عمّان، الأردن</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Global Medical Center</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0d141b] p-12 border border-white/5">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="الاسم الكامل" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#d4a373] outline-none transition-all placeholder:text-white/20" />
                <input type="tel" placeholder="رقم الهاتف" className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#d4a373] outline-none transition-all placeholder:text-white/20" />
              </div>
              <textarea placeholder="رسالتك الخاصة" rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-[#d4a373] outline-none transition-all placeholder:text-white/20"></textarea>
              <button className="w-full py-6 bg-[#d4a373] text-black font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">إرسال الطلب</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#050a0e] border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="w-16 h-16 border-2 border-[#d4a373] flex items-center justify-center rotate-45">
              <span className="text-[#d4a373] text-3xl font-luxury-en -rotate-45">A</span>
            </div>
            <h4 className="text-white font-black text-2xl tracking-[0.3em] uppercase">ALMUTASAIM ALAZZEH</h4>
            <div className="flex items-center gap-8 text-white/30">
              <Instagram className="hover:text-[#d4a373] cursor-pointer" />
              <Facebook className="hover:text-[#d4a373] cursor-pointer" />
              <Twitter className="hover:text-[#d4a373] cursor-pointer" />
            </div>
          </div>
          <p className="text-white/10 text-[9px] uppercase tracking-[0.5em] font-bold">© {new Date().getFullYear()} ALMUTASAIM ALAZZEH DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 bg-[#050a0e] z-[60] transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          <button className="absolute top-10 left-10 text-[#d4a373]" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
          {['الرئيسية', 'عن العيادة', 'الخدمات', 'الدكتور', 'تواصل معنا'].map((item, idx) => (
            <button key={idx} onClick={() => scrollToSection(['hero', 'about', 'services', 'doctor', 'contact'][idx])} className="text-3xl font-bold text-white hover:text-[#d4a373] uppercase tracking-tighter transition-all">
              {item}
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} className="px-12 py-4 bg-[#d4a373] text-black font-black uppercase shadow-2xl">Book Now</button>
        </div>
      </div>
    </div>
  );
};

// تشغيل React DOM مباشرة من داخل الملف
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

export default App;
