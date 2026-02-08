
import React from 'react';
import { Sparkles, Star, Shield, Zap, Scissors, Smile, PlusSquare } from 'lucide-react';

const services = [
  {
    title: 'تجميل الأسنان',
    desc: 'لمسات فنية لإعادة التوازن والجمال لأسنانك باستخدام أحدث المواد العالمية.',
    icon: Sparkles
  },
  {
    title: 'ابتسامة هوليوود',
    desc: 'تصميم ابتسامة مثالية تناسب ملامح وجهك لتعطيك إطلالة المشاهير بثقة تامة.',
    icon: Star
  },
  {
    title: 'زراعة الأسنان',
    desc: 'استعادة الأسنان المفقودة بأحدث تقنيات الزراعة الفورية والدائمة وبأعلى نسب النجاح.',
    icon: PlusSquare
  },
  {
    title: 'تقويم الأسنان',
    desc: 'حلول تقويمية متطورة وشفافة لتنسيق الأسنان وضمان صحة الفم والفكين.',
    icon: Zap
  },
  {
    title: 'تبييض الأسنان',
    desc: 'أنظمة تبييض ليزرية متقدمة تمنحك بياضاً ناصعاً في جلسة واحدة فقط.',
    icon: Shield
  },
  {
    title: 'تصميم الابتسامة',
    desc: 'تحليل رقمي دقيق لملامح الوجه والابتسامة لرسم المخطط العلاجي الأمثل قبل البدء.',
    icon: Smile
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0f14] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-luxury text-sm tracking-[0.3em] uppercase mb-4 font-bold">خدماتنا النخبوية</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">رعاية شاملة بلمسة ملكية</h3>
          <div className="w-24 h-1 luxury-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 bg-[#0d141b] border border-white/5 hover:border-luxury/50 transition-all duration-500 rounded-sm glow-on-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700"></div>
              
              <service.icon className="w-12 h-12 text-luxury mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-white/60 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="h-[2px] w-0 bg-luxury group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 space-x-reverse p-4 bg-[#0d141b] border border-white/10">
                <Shield className="text-luxury" />
                <span className="text-white/80">جميع خدماتنا تشمل ضمان الجودة والرعاية الوقائية المستمرة.</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
