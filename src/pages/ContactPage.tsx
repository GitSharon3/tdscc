import React, { useState } from 'react';
import { MapPin, Mail, Phone, Smartphone, Clock, Send, Building2, CheckCircle2, ExternalLink } from 'lucide-react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

interface ContactPageProps {
  language: 'en' | 'ne';
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const isNe = language === 'ne';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2D6A4F] text-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg text-left relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-[#D4AF37] border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              {isNe ? 'सम्पर्क' : 'Contact'}
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              {isNe ? 'आमीसँग सम्पर्क गर्नुहोस्' : 'Get in Touch'}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed">
              {isNe
                ? 'हामीलाई फोन, इमेल वा अफिसमा भेट्न सक्नुहुन्छ।'
                : 'Reach out to our team - we\'re here to help.'}
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#1B4D3E]" />
                  <span>{isNe ? 'मुख्य कार्यालय' : 'Head Office'}</span>
                </span>
                <a
                  href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#1B4D3E] hover:text-amber-700 flex items-center gap-1 hover:underline"
                >
                  <span>{isNe ? 'गुगल म्याप' : 'Map'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <a
                  href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#1B4D3E] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400 group-hover:text-[#1B4D3E]">
                      {isNe ? 'ठेगाना' : 'Location Address'}
                    </strong>
                    <span>{isNe ? 'ठमेल-२९, सात घुम्ती मार्ग, काठमाडौँ, नेपाल' : 'Thamel-29, Saat Ghumti Marg, Kathmandu, Nepal'}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'टेलिफोन नम्बरहरू' : 'Telephone Lines'}
                    </strong>
                    <div className="flex items-center gap-2 text-[#1B4D3E] font-bold text-sm">
                      <a href="tel:014700289" className="hover:underline">01-4700289</a>
                      <span className="text-slate-300">/</span>
                      <a href="tel:014700290" className="hover:underline">01-4700290</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'मोबाइल' : 'Mobile'}
                    </strong>
                    <a href="tel:9801203726" className="text-[#1B4D3E] font-bold text-sm hover:underline block">
                      9801203726
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'इमेल' : 'Email Address'}
                    </strong>
                    <a href="mailto:tourismdsccmission@gmail.com" className="text-slate-800 font-semibold hover:underline block">
                      tourismdsccmission@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0">
                    <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'फेसबुक पेज' : 'Official Facebook Page'}
                    </strong>
                    <a
                      href="https://www.facebook.com/tourism.development.1/?rdid=rZuyYHrPCRYn8KAq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1877F2] hover:underline mt-0.5"
                    >
                      <span>{isNe ? 'टुरिजम डेभलपमेन्ट फेसबुक पेज' : 'TDSCC Facebook Page'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'कार्यालय समय' : 'Office Hours'}
                    </strong>
                    <span>{isNe ? 'आइतबार – शुक्रबार: १०:०० AM – ५:०० PM' : 'Sun – Fri: 10:00 AM – 5:00 PM'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {isNe ? 'स्थान नक्सा' : 'Location Map'}
                </h3>
                <a
                  href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#1B4D3E] hover:text-amber-800 flex items-center gap-1 bg-slate-100 px-2 py-1 rounded"
                >
                  <span>{isNe ? 'ठूलो नक्सा' : 'View Map'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-48 rounded-xl bg-slate-100 border border-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400 hover:opacity-90 transition-opacity"
              >
                <div className="text-center space-y-1">
                  <MapPin className="w-8 h-8 text-[#1B4D3E] mx-auto animate-bounce" />
                  <div className="text-xs font-bold text-slate-700">TDSCC Head Office</div>
                  <div className="text-[11px] text-slate-500">Saat Ghumti Marg, Thamel-29, Kathmandu</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 h-full">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-[10px] font-bold uppercase tracking-wider mb-3">
                  {isNe ? 'सन्देश पठाउनुहोस्' : 'Send a Message'}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  {isNe ? 'हामीलाई सम्पर्क गर्नुहोस्' : 'Contact Our Team'}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {isNe
                    ? 'तपाईंको प्रश्न वा सेवा अनुरोधको लागि खाली फाराम भर्नुहोस्। हामी सधै सहयोग गर्न तयार छौं।'
                    : 'Fill out the form below and our team will get back to you soon.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                      {isNe ? 'नाम' : 'Full Name'}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder={isNe ? 'तपाईंको नाम' : 'Your full name'}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 focus:border-[#1B4D3E] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                      {isNe ? 'फोन नम्बर' : 'Phone Number'}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder={isNe ? '९८०********' : '+977-98********'}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 focus:border-[#1B4D3E] focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                    {isNe ? 'इमेल' : 'Email Address'}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={isNe ? 'example@email.com' : 'your@email.com'}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 focus:border-[#1B4D3E] focus:bg-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">
                    {isNe ? 'विषय' : 'Subject'}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder={isNe ? 'सन्देशको विषय' : 'What do you need help with?'}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 focus:border-[#1B4D3E] focus:bg-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    {isNe ? 'सन्देश' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    placeholder={isNe ? 'तपाईंको सन्देश यहाँ लेख्नुहोस्...' : 'Write your message here...'}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 focus:border-[#1B4D3E] focus:bg-white focus:outline-none transition resize-none"
                  />
                </div>

                {submitted && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                    <CheckCircle2 className="w-4 h-4" />
                    {isNe ? 'तपाईंको सन्देश सफलतापूर्वक पठाइएको छ।' : 'Your inquiry has been sent successfully.'}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#1B4D3E] hover:bg-[#143C30] text-white font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isNe ? 'सन्देश पठाउनुहोस्' : 'Submit Inquiry'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
