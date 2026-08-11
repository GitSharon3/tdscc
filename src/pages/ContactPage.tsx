import React, { useState } from 'react';
import { MapPin, Mail, Phone, Smartphone, Clock, Send, Building2, CheckCircle2, ExternalLink } from 'lucide-react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
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
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2D6A4F] text-white p-8 rounded-3xl shadow-lg text-left relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-[#D4AF37] border border-amber-400/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              {isNe ? 'सम्पर्क विवरण' : 'Get in Touch'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {isNe ? 'हाम्रो सम्पर्क तथा शाखा कार्यालयहरू' : 'Contact TDSCC & Office Locations'}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed">
              {isNe
                ? 'हामीलाई फोन, इमेल वा कार्यालयमै उपस्थित भई सेवा लिन सक्नुहुन्छ। हाम्रा प्रतिनिधिहरू सहयोग गर्न तत्पर छन्।'
                : 'We are here to answer your questions and assist with deposit accounts, loans, and remittance services.'}
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">

          {/* Left Column: Office Details & Map */}
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

                {/* Phone Lines Section */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'टेलिफोन नम्बरहरू (Telephone Lines)' : 'Telephone Lines'}
                    </strong>
                    <div className="flex items-center gap-2 text-[#1B4D3E] font-bold text-sm">
                      <a href="tel:014700289" className="hover:underline">01-4700289</a>
                      <span className="text-slate-300">/</span>
                      <a href="tel:014700290" className="hover:underline">01-4700290</a>
                    </div>
                  </div>
                </div>

                {/* Mobile Section */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase font-bold text-slate-400">
                      {isNe ? 'मोबाइल (Mobile)' : 'Mobile'}
                    </strong>
                    <a href="tel:9801203726" className="text-[#1B4D3E] font-bold text-sm hover:underline block">
                      9801203726
                    </a>
                  </div>
                </div>

                {/* Email Address Section */}
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

                {/* Facebook Page Link Section */}
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

                {/* Office Hours Section */}
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

            {/* Embedded Google Map Card */}
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

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {isNe ? 'अनलाइन सन्देश पठाउनुहोस्' : 'Send Us an Online Inquiry'}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {isNe ? 'कुनै जिज्ञासा वा परामर्शका लागि फारम भर्नुहोस्।' : 'Fill out the form below and our team will get back to you.'}
                </p>
              </div>

              {submitted && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    {isNe ? 'धन्यवाद! तपाईंको सन्देश सफलतापुर्वक प्राप्त भयो।' : 'Thank you! Your message has been sent successfully.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium text-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-slate-700 font-bold">{isNe ? 'पूरा नाम *' : 'Full Name *'}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ram Shrestha"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B4D3E] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-slate-700 font-bold">{isNe ? 'फोन नम्बर *' : 'Phone Number *'}</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9801203726"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B4D3E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-700 font-bold">{isNe ? 'इमेल ठेगाना' : 'Email Address'}</label>
                  <input
                    type="email"
                    placeholder="e.g. ram@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B4D3E] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-700 font-bold">{isNe ? 'विषय (Subject)' : 'Subject'}</label>
                  <select className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B4D3E] focus:outline-none">
                    <option>{isNe ? 'बचत सम्बन्धी सोधपुछ' : 'Savings Account Inquiry'}</option>
                    <option>{isNe ? 'कर्जा सम्बन्धी सोधपुछ' : 'Loan Scheme Inquiry'}</option>
                    <option>{isNe ? 'रेमिट्यान्स सोधपुछ' : 'Remittance Inquiry'}</option>
                    <option>{isNe ? 'अन्य' : 'General Feedback / Other'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-700 font-bold">{isNe ? 'सन्देश (Message) *' : 'Your Message *'}</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isNe ? 'यहाँ आफ्नो सन्देश लेख्नुहोस्...' : 'Write your question or message here...'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1B4D3E] focus:outline-none"
                  ></textarea>
                </div>

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
