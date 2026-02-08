
import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'سارة منصور',
    role: 'رائدة أعمال',
    text: 'تجربة طبية وفنية تفوق التوقعات. الدكتور المعتصم ليس مجرد طبيب، بل هو مهندس ابتسامات. حصلت على نتيجة مذهلة وابتسامة هوليوود التي طالما حلمت بها بدقة متناهية.',
    rating: 5
  },
  {
    name: 'المهندس أحمد علي',
    role: 'عميل متميز',
    text: 'الخصوصية التامة والاهتمام بأدق التفاصيل هو ما يميز هذه العيادة. شعرت بالرفاهية منذ اللحظة الأولى، والتقنيات المستخدمة هي الأحدث عالمياً بلا منازع في عمّان.',
    rating: 5
  },
  {
    name: 'لينا الخالدي',
    role: 'مديرة تسويق',
    text: 'أكثر ما أبهرني هو تحليل الابتسامة الرقمي. شاهدت النتيجة قبل البدء وكان العلاج بدون ألم تماماً. الرقي والاحترافية هما عنوان عيادة الدكتور المعتصم العزه.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-40 bg-[#050a0e] relative overflow-hidden">
      {/* Decorative background numbers or light flares */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-luxury/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="flex items-center justify-center gap-6">
            <span className="h-[1px] w-12 bg-luxury/40"></span>
            <h2 className="text-luxury text-xs tracking-[0.6em] uppercase font-black font-modern">Elite Reflections</h2>
            <span className="h-[1px] w-12 bg-luxury/40"></span>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
            ماذا يقول <span className="text-luxury italic font-luxury-en font-normal">نخبة</span> عملاؤنا
          </h3>
          <p className="text-white/30 text-sm tracking-[0.3em] uppercase font-modern">Testimonials of Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="group bg-[#0d141b] p-12 border border-white/5 hover:border-luxury/30 transition-all duration-700 relative gold-glow"
            >
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-luxury text-black flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <Quote size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
              </div>
              
              <div className="flex mb-8 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-luxury text-luxury" />
                ))}
              </div>

              <p className="text-white/60 text-lg leading-relaxed mb-10 italic font-light">
                "{review.text}"
              </p>

              <div className="pt-8 border-t border-white/5 flex flex-col items-start gap-1">
                <span className="text-white font-bold tracking-wide">{review.name}</span>
                <span className="text-luxury/50 text-[10px] uppercase tracking-[0.2em] font-black font-modern">{review.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
             <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl font-luxury-en">4.9/5</span>
                <span className="text-luxury text-[10px] uppercase tracking-widest font-modern">Google Rating</span>
             </div>
             <div className="h-10 w-[1px] bg-white/10"></div>
             <div className="flex flex-col items-center">
                <span className="text-white font-black text-4xl font-luxury-en">1k+</span>
                <span className="text-luxury text-[10px] uppercase tracking-widest font-modern">Happy Patients</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
