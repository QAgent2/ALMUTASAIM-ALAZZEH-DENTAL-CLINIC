
import React from 'react';
import { ShieldCheck, Cpu, Heart, Award, CheckCircle2 } from 'lucide-react';

const USPs = [
  {
    title: 'تكنولوجيا الجيل القادم',
    desc: 'نستثمر في أحدث أنظمة الأشعة ثلاثية الأبعاد والماسحات الضوئية الفموية لضمان دقة لا تشوبها شائبة.',
    icon: Cpu
  },
  {
    title: 'تعقيم بمعايير ذهبية',
    desc: 'نظام تعقيم ميكانيكي وكيميائي متكامل يضمن بيئة خالية تماماً من الميكروبات، مع تتبع رقمي لكل أداة.',
    icon: ShieldCheck
  },
  {
    title: 'رعاية نخبوية شخصية',
    desc: 'من لحظة دخولك حتى مغادرتك، نضمن لك خصوصية تامة وفريقاً مخصصاً لخدمتك وتلبية احتياجاتك.',
    icon: Heart
  },
  {
    title: 'نتائج مضمونة طبياً',
    desc: 'نحن لا نقدم وعوداً عابرة، بل نلتزم بخطط علاجية قائمة على أسس علمية رصينة تضمن استدامة ابتسامتك.',
    icon: Award
  }
];

const Trust: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0f14]">
      <div className="container mx-auto px-6">
        <div className="bg-[#0d141b] p-12 lg:p-24 border border-luxury/10 relative overflow-hidden group">
          {/* Animated Gradient Border */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-luxury via-luxury/20 to-transparent"></div>
          
          {/* Subtle Background Shape */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-luxury/5 rounded-full blur-[120px] group-hover:bg-luxury/10 transition-all duration-1000"></div>

          <div className="text-center mb-24 relative z-10">
            <h2 className="text-luxury text-sm tracking-[0.5em] uppercase mb-6 font-bold flex justify-center items-center gap-4">
                <span className="h-[1px] w-8 bg-luxury"></span>
                لماذا يختارنا النخبة؟
                <span className="h-[1px] w-8 bg-luxury"></span>
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">معايير التميز الطبي</h3>
            <p className="text-white/40 max-w-2xl mx-auto font-light text-lg italic">
              "الثقة هي أساس كل ابتسامة نصممها. نحن نجمع بين الشفافية الطبية والرفاهية لضمان راحة بالك المطلقة."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {USPs.map((usp, index) => (
              <div key={index} className="flex flex-col items-center text-center group/item">
                <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-luxury/5 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-500"></div>
                    <div className="relative z-10 w-24 h-24 flex items-center justify-center rounded-full border border-luxury/20 group-hover/item:border-luxury group-hover/item:bg-luxury group-hover/item:text-white transition-all duration-500 transform group-hover/item:-translate-y-2">
                      <usp.icon className="w-10 h-10 text-luxury group-hover/item:text-white transition-colors" />
                    </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover/item:text-luxury transition-colors">{usp.title}</h4>
                <p className="text-white/50 leading-relaxed text-sm font-light">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             <div className="flex items-center justify-center gap-3">
                <CheckCircle2 size={24} className="text-luxury" />
                <div className="text-left">
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Global</p>
                    <p className="text-white/60 text-[10px]">Standardization</p>
                </div>
             </div>
             <div className="flex items-center justify-center gap-3">
                <CheckCircle2 size={24} className="text-luxury" />
                <div className="text-left">
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Digital</p>
                    <p className="text-white/60 text-[10px]">Workflows</p>
                </div>
             </div>
             <div className="flex items-center justify-center gap-3">
                <CheckCircle2 size={24} className="text-luxury" />
                <div className="text-left">
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Medical</p>
                    <p className="text-white/60 text-[10px]">Excellence</p>
                </div>
             </div>
             <div className="flex items-center justify-center gap-3">
                <CheckCircle2 size={24} className="text-luxury" />
                <div className="text-left">
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Patient</p>
                    <p className="text-white/60 text-[10px]">Centered</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
