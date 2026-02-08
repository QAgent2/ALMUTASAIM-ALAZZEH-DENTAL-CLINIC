
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0f14]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-luxury text-sm tracking-[0.3em] uppercase mb-4 font-bold">تواصل معنا</h2>
              <h3 className="text-4xl font-bold text-white mb-6">نحن هنا لخدمتك</h3>
              <p className="text-white/60 mb-8">
                فريقنا جاهز لاستقبال مكالماتكم وتحديد المواعيد التي تناسب جداولكم. تفضلوا بزيارتنا في موقعنا المميز في عمّان.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-luxury/10 rounded-full flex items-center justify-center text-luxury">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">+962 78 073 5083</p>
                  <p className="text-white/40 text-xs">اتصال مباشر / واتساب</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-luxury/10 rounded-full flex items-center justify-center text-luxury">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">عمّان، الأردن</p>
                  <p className="text-white/40 text-xs">محافظة عمّان - موقع استراتيجي</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-luxury/10 rounded-full flex items-center justify-center text-luxury">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white font-bold">info@alazzehdental.com</p>
                  <p className="text-white/40 text-xs">تواصل عبر البريد الإلكتروني</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-sm overflow-hidden grayscale border border-white/10 hover:grayscale-0 transition-all duration-700">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108391.24647313264!2d35.79421245763952!3d31.933396593415175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb859a11a87%3A0x6b7729bc1e43c510!2sAmman%2C%20Jordan!5e0!3m2!1sen!2s!4v1715456345678!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-[#0d141b] p-8 md:p-12 border border-white/5 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3 space-x-reverse">
                <MessageSquare className="text-luxury" />
                <span>طلب موعد استشارة</span>
              </h4>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/50 block">الاسم الكامل</label>
                  <input 
                    type="text" 
                    placeholder="أدخل اسمك"
                    className="w-full bg-[#0a0f14] border border-white/10 p-4 rounded-sm text-white focus:border-luxury outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/50 block">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف"
                    className="w-full bg-[#0a0f14] border border-white/10 p-4 rounded-sm text-white focus:border-luxury outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-white/50 block">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني"
                    className="w-full bg-[#0a0f14] border border-white/10 p-4 rounded-sm text-white focus:border-luxury outline-none transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-white/50 block">نوع الخدمة</label>
                  <select className="w-full bg-[#0a0f14] border border-white/10 p-4 rounded-sm text-white focus:border-luxury outline-none transition-all appearance-none">
                    <option>تجميل الأسنان</option>
                    <option>ابتسامة هوليوود</option>
                    <option>زراعة الأسنان</option>
                    <option>تقويم الأسنان</option>
                    <option>أخرى</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-white/50 block">رسالتك</label>
                  <textarea 
                    rows={4} 
                    placeholder="كيف يمكننا مساعدتك؟"
                    className="w-full bg-[#0a0f14] border border-white/10 p-4 rounded-sm text-white focus:border-luxury outline-none transition-all"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full py-4 luxury-gradient text-white font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
                    إرسال طلب الاستشارة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
