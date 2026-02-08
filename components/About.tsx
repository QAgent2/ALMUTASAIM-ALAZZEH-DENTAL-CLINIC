
import React from 'react';
import { Shield, Sparkles, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-44 bg-[#050a0e] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-luxury/5 to-transparent opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          {/* Visual Presentation */}
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-luxury/5 rounded-full blur-[180px]"></div>
            
            <div className="relative z-10">
              <div className="absolute inset-0 border-[0.5px] border-luxury/40 translate-x-10 translate-y-10 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-1000"></div>
              <div className="overflow-hidden gold-glow border-[0.5px] border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=100&w=1400" 
                  alt="Elite Clinical Suite" 
                  className="w-full h-[750px] object-cover transition-transform duration-[4s] group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Prestigious Badge */}
              <div className="absolute top-20 -left-16 bg-glass border border-luxury/20 p-14 shadow-3xl hidden md:block group-hover:-translate-x-4 transition-transform duration-700">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-luxury text-7xl font-luxury-en tracking-tighter uppercase">Elite</span>
                    <span className="text-white/40 text-[9px] tracking-[0.8em] uppercase font-black font-modern">The Sanctuary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Narrative */}
          <div className="order-1 lg:order-2 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <span className="h-[0.5px] w-16 bg-luxury"></span>
                <h2 className="text-luxury text-xs tracking-[0.6em] uppercase font-black font-modern">The Elite Standard</h2>
              </div>
              <h3 className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tight">
                رؤية <span className="text-luxury italic font-luxury-en font-normal">استثنائية</span> <br /> لفن طب الأسنان
              </h3>
            </div>
            
            <p className="text-white/60 text-2xl leading-relaxed text-justify font-light border-r border-luxury/20 pr-10">
              في عيادة الدكتور المعتصم العزه، نؤمن أن الطب هو أعلى درجات الفن. لقد صممنا بيئة علاجية تحاكي أرقى المعايير العالمية، حيث تلتقي التكنولوجيا الرقمية الجراحية باللمسات الجمالية الشخصية لابتكار ابتسامة لا تتكرر.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
              {[
                { icon: Zap, title: 'هندسة رقمية دقيقة', desc: 'استخدام أنظمة CAD/CAM المتطورة والذكاء الاصطناعي في تصميم الابتسامة.' },
                { icon: Shield, title: 'أمان بيولوجي مطلق', desc: 'بروتوكولات تعقيم سويسرية تضمن بيئة نقية تماماً لصحة مرضانا.' },
                { icon: Heart, title: 'تجربة ملكية خاصة', desc: 'علاقات علاجية مبنية على الثقة المطلقة والخصوصية التامة لنخبة المجتمع.' },
                { icon: Sparkles, title: 'إبداع فني طبي', desc: 'كل علاج هو رحلة فنية لإبراز جمالك الطبيعي وتناغم ملامح وجهك.' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-4 group-hover:text-luxury transition-colors">
                      <item.icon className="text-luxury w-6 h-6 stroke-[1px]" />
                      {item.title}
                  </h4>
                  <p className="text-white/40 text-[13px] leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-12">
                <p className="text-luxury font-luxury-en italic text-3xl opacity-90 border-b-[0.5px] border-luxury/30 pb-6 inline-block">
                  "ART . LOVE . TRUST <span className="text-white/20 text-sm font-modern not-italic font-black tracking-[0.5em] ml-6">THE ESSENCE</span>"
                </p>
                <div className="flex items-center gap-4 mt-6">
                   <div className="w-1.5 h-1.5 rounded-full bg-luxury"></div>
                   <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-modern">Amman's Premiere Destination for Dental Artistry</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
