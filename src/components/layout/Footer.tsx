import React from 'react';
import { MapPin, Mail, Phone, Smartphone, ShieldCheck } from 'lucide-react';
import tdsccLogo from '../../assets/logos/tdsccLogo.png';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

interface FooterProps {
    language: 'en' | 'ne';
    setActiveTab: (tab: string, sub?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, setActiveTab }) => {
    const isNe = language === 'ne';

    return (
        <footer className="w-full bg-[#0F2E24] text-slate-300 border-t-4 border-[#D4AF37]">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-left">

                    {/* Col 1: Brand Info */}
                    <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-2 sm:gap-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0 border border-amber-300/30 overflow-hidden">
                                <img
                                    src={tdsccLogo}
                                    alt={isNe ? "पर्यटन विकास बचत तथा ऋण सहकारी संस्था लि." : "TDSCC Official Logo"}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-[0.7rem] sm:text-xs md:text-sm font-bold text-white leading-snug break-words">
                                    {isNe ? 'टुरिजम डेभलपमेन्ट बचत तथा ऋण सहकारी संस्था लि.' : 'Tourism Development Saving & Credit Cooperative Ltd.'}
                                </h3>
                                <span className="text-[9px] sm:text-[10px] text-amber-400 font-semibold block">
                                    {isNe ? 'दर्ता नं: २५५८/०६६/०६७' : 'Regd No: 2558/066/067'}
                                </span>
                            </div>
                        </div>
                        <p className="text-[0.65rem] sm:text-[0.7rem] md:text-xs text-slate-300 leading-relaxed">
                            {isNe
                                ? 'आफ्ना सदस्यहरूलाई सुरक्षित, पारदर्शी र आधुनिक वित्तीय सेवाहरू प्रदान गर्दै पर्यटन तथा स्थानीय समुदायको समृद्धिमा समर्पित।'
                                : 'Committed to empowering members through safe savings, competitive credit terms, and community financial strength.'}
                        </p>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-[0.65rem] sm:text-[0.7rem] md:text-xs text-emerald-300">
                            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
                            <span>{isNe ? 'नेपाल सरकार / सहकारी ऐन अन्तर्गत दर्ता' : 'Regulated Financial Institution'}</span>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-[0.7rem] sm:text-xs font-bold text-white uppercase tracking-wider border-b border-emerald-800 pb-1.5 sm:pb-2">
                            {isNe ? 'मुख्य लिङ्कहरू' : 'Quick Links'}
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-[0.65rem] sm:text-[0.7rem] md:text-xs">
                            <li>
                                <button onClick={() => setActiveTab('home')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block cursor-pointer">
                                    {isNe ? 'गृहपृष्ठ' : 'Home'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('about')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block cursor-pointer">
                                    {isNe ? 'हाम्रो बारेमा' : 'About Us'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('deposits')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block cursor-pointer">
                                    {isNe ? 'बचत योजनाहरू' : 'Deposits'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('interest-rates')} className="hover:text-[#D4AF37] font-semibold text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block cursor-pointer">
                                    {isNe ? 'ब्याजदर तालिका' : 'Interest Rates Schedule'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('loans')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block cursor-pointer">
                                    {isNe ? 'कर्जा सुविधाहरू' : 'Loan Products'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Services & Notice */}
                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-[0.7rem] sm:text-xs font-bold text-white uppercase tracking-wider border-b border-emerald-800 pb-1.5 sm:pb-2">
                            {isNe ? 'सेवाहरू र रेमिट्यान्स' : 'Services & Remittance'}
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-[0.65rem] sm:text-[0.7rem] md:text-xs">
                            <li>
                                <button onClick={() => setActiveTab('remittance')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block text-left cursor-pointer">
                                    {isNe ? 'आईएमई तथा वेष्टर्न युनियन रेमिट्यान्स' : 'IME & Western Union Remittance'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('notices')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block text-left cursor-pointer">
                                    {isNe ? 'सूचना तथा समाचार' : 'Official Notices'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('notices')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block text-left cursor-pointer">
                                    {isNe ? 'फारम तथा केवाइसी डाउनलोड' : 'KYC & Form Downloads'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('contact')} className="hover:text-[#D4AF37] transition-colors py-0.5 sm:py-1 inline-block text-left cursor-pointer">
                                    {isNe ? 'सम्पर्क फारम' : 'Inquiry Form'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Contact Info */}
                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-[0.7rem] sm:text-xs font-bold text-white uppercase tracking-wider border-b border-emerald-800 pb-1.5 sm:pb-2">
                            {isNe ? 'सम्पर्क ठेगाना' : 'Contact Office'}
                        </h4>
                        <div className="space-y-2 sm:space-y-3 text-[0.65rem] sm:text-[0.7rem] md:text-xs text-slate-300">
                            <a
                                href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-1.5 sm:gap-2 hover:text-[#D4AF37] transition-colors group"
                                title={isNe ? "गूगल नक्सामा TDSCC हेर्नुहोस्" : "Open TDSCC in Google Maps"}
                            >
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="underline decoration-slate-500 underline-offset-2 group-hover:decoration-[#D4AF37]">
                                    {isNe ? 'ठमेल-२९, सात घुम्ती मार्ग, काठमाडौँ, नेपाल' : 'Thamel-29, Saat Ghumti Marg, Kathmandu, Nepal'}
                                </span>
                            </a>

                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">{isNe ? 'टेलिफोन:' : 'Telephone Lines:'}</div>
                                    <div className="flex items-center gap-1 font-bold text-white flex-wrap">
                                        <a href="tel:014700289" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                                            {isNe ? '०१-४७००२८९' : '01-4700289'}
                                        </a>
                                        <span className="text-emerald-500">/</span>
                                        <a href="tel:014700290" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                                            {isNe ? '०१-४७००२९०' : '01-4700290'}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-1.5 sm:gap-2">
                                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                <div className="min-w-0">
                                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">{isNe ? 'मोबाइल:' : 'Mobile:'}</div>
                                    <a href="tel:9801203726" className="font-bold text-white hover:text-[#D4AF37] transition-colors break-all">
                                        {isNe ? '९८०१२०३७२६' : '9801203726'}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
                                <a href="mailto:tourismdsccmission@gmail.com" className="hover:text-[#D4AF37] transition-colors break-all">
                                    tourismdsccmission@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <FacebookIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0 fill-current" />
                                <a
                                    href="https://www.facebook.com/tourism.development.1/?rdid=rZuyYHrPCRYn8KAq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#D4AF37] transition-colors truncate"
                                >
                                    {isNe ? 'फेसबुक पेज' : 'TDSCC Facebook Page'}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-6 sm:mt-8 md:mt-10 pt-3 sm:pt-4 md:pt-6 border-t border-emerald-900 flex flex-col sm:flex-row justify-between items-center text-[0.65rem] sm:text-[0.7rem] md:text-xs text-slate-400 gap-2 sm:gap-3 text-center sm:text-left">
                    <p className="order-2 sm:order-1">
                        {isNe
                            ? `© ${new Date().getFullYear()} टुरिजम डेभलपमेन्ट बचत तथा ऋण सहकारी संस्था लि. सर्वाधिकार सुरक्षित।`
                            : `© ${new Date().getFullYear()} Tourism Development Saving & Credit Cooperative Ltd. All rights reserved.`}
                    </p>
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 order-1 sm:order-2">
                        <span className="line-clamp-1">{isNe ? 'सहकारी मार्फत समृद्धि' : 'Empowering Financial Excellence | Designed and Developed by Sharon'}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
