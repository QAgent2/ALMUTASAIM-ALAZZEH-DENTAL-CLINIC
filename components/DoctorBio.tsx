
import React from 'react';
import { Award, GraduationCap, Microscope, Palette, ShieldCheck } from 'lucide-react';

const DoctorBio: React.FC = () => {
  return (
    <section id="doctor" className="py-40 bg-[#0d141b] relative overflow-hidden">
        {/* Luxury Background Detail */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            {/* Image Side - Male Doctor Focus */}
            <div className="w-full lg:w-5/12">
              <div className="relative group">
                <div className="absolute -inset-6 border border-luxury/20 -z-10 group-hover:scale-105 transition-transform duration-1000"></div>
                <div className="absolute -inset-12 border border-luxury/10 -z-10 group-hover:scale-110 transition-transform duration-[1.5s]"></div>
                
                <div className="relative overflow-hidden bg-black gold-glow">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=100&w=1200&h=1600" 
                    alt="Dr. Almutasaim Alazzeh - Clinical Director" 
                    className="w-full h-auto object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Luxury Signature Badge */}
                  <div className="absolute bottom-10 right-0 left-0 px-8">
                    <div className="bg-[#050a0e]/90 backdrop-blur-2xl p-8 border-r-4 border-luxury shadow-2xl">
                        <div className="flex flex-col">
                            <h4 className="text-luxury font-black text-2xl tracking-tighter mb-1 font-display">Dr. Almutasaim Alazzeh</h4>
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Medical Director & Visionary</p>
                            <div className="mt-4 opacity-30 invert brightness-200 h-10 w-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Signature_of_Hillary_Clinton.svg/1200px-Signature_of_Hillary_Clinton.svg.png')] bg-contain bg-no-repeat"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-7/12 space-y-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-luxury"></span>
                  <h2 className="text-luxury text-sm tracking-[0.6em] uppercase font-black">القيادة الطبية والرؤية</h2>
                </div>
                <h3 className="text-5xl md:text-8xl font-black text-white leading-tight">
                  الدكتور <span className="text-luxury font-display italic font-normal">المعتصم العزه</span>
                </h3>
                <p className="text-white/40 text-xl font-light italic border-l border-luxury/20 pl-6">
                  رائد طب الأسنان التجميلي الرقمي وجراحة الفم والفكين المتقدمة
                </p>
              </div>

              <div className="space-y-8 text-white/60 text-xl leading-relaxed font-light text-justify">
                <p>
                  يُعد الدكتور المعتصم العزه من أبرز القامات الطبية في المنطقة التي تدمج بين الجراحة الدقيقة والفلسفة الجمالية. بخبرة مهنية تتجاوز الـ 15 عاماً، أشرف الدكتور على آلاف الحالات المعقدة، محققاً نتائج تزاوج بين الصحة الوظيفية المطلقة والجمال الطبيعي الأخاذ.
                </p>
                <p>
                  بصفته خبيراً معتمداً في أنظمة CAD/CAM، يقود الدكتور المعتصم فريقاً طبياً متكاملاً يطبق بروتوكولات علاجية مخصصة لكل مريض، مع التركيز على تجربة مريض استثنائية خالية تماماً من التوتر.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-luxury/10 border border-luxury/20 text-luxury group-hover:bg-luxury group-hover:text-black transition-all duration-500">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg mb-2">التميز الأكاديمي</h5>
                    <p className="text-white/30 text-sm">بكالوريوس طب وجراحة الفم والأسنان مع تخصصات دقيقة في الزراعة الفورية من مراكز ألمانية معتمدة.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-luxury/10 border border-luxury/20 text-luxury group-hover:bg-luxury group-hover:text-black transition-all duration-500">
                    <Award size={28} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg mb-2">اعتمادات دولية</h5>
                    <p className="text-white/30 text-sm">عضوية دائمة في الجمعية الدولية لزراعة الأسنان والعديد من المجالس العلمية العالمية.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-luxury/10 border border-luxury/20 text-luxury group-hover:bg-luxury group-hover:text-black transition-all duration-500">
                    <Microscope size={28} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg mb-2">الدقة التشخيصية</h5>
                    <p className="text-white/30 text-sm">خبير في تحليل الابتسامة الرقمي ثلاثي الأبعاد والتشخيص بالموجات والذكاء الاصطناعي.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-luxury/10 border border-luxury/20 text-luxury group-hover:bg-luxury group-hover:text-black transition-all duration-500">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg mb-2">ضمان الجودة الملكي</h5>
                    <p className="text-white/30 text-sm">نحن لا نقدم علاجاً فحسب، بل نمنح مرضانا ضماناً طبياً طويل الأمد على كافة الإجراءات.</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 flex flex-col sm:flex-row items-center gap-10">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-14 py-6 bg-luxury text-black font-black text-xs tracking-[0.3em] uppercase hover:bg-white transition-all shadow-2xl"
                >
                  Private Consultation
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-luxury animate-pulse"></div>
                    <span className="text-white/40 text-xs tracking-widest uppercase font-bold">Accepting Exclusive Patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default DoctorBio;
