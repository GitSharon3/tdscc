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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">

                    {/* Col 1: Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0 border border-amber-300/30 overflow-hidden">
                                <img
                                    src={tdsccLogo}
                                    alt="TDSCC Official Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white leading-tight">
                                    {isNe ? 'पर्यटन विकास बचत तथा ऋण सहकारी संस्था लि.' : 'Tourism Development Saving & Credit Cooperative Ltd.'}
                                </h3>
                                <span className="text-[11px] text-amber-400 font-semibold">Regd No: 2558/066/067</span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                            {isNe
                                ? 'आफ्ना सदस्यहरूलाई सुरक्षित, पारदर्शी र आधुनिक वित्तीय सेवाहरू प्रदान गर्दै पर्यटन तथा स्थानीय समुदायको समृद्धिमा समर्पित।'
                                : 'Committed to empowering members through safe savings, competitive credit terms, and community financial strength.'}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-emerald-300">
                            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                            <span>{isNe ? 'नेपाल सरकार / सहकारी ऐन अन्तर्गत दर्ता' : 'Regulated Financial Institution'}</span>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800 pb-2">
                            {isNe ? 'मुख्य लिङ्कहरू' : 'Quick Links'}
                        </h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <button onClick={() => setActiveTab('home')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'गृहपृष्ठ (Home)' : 'Home'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('about')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'हाम्रो बारेमा (About Us)' : 'About Us'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('deposits')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'बचत योजनाहरू (Deposits)' : 'Deposits'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('interest-rates')} className="hover:text-[#D4AF37] font-semibold text-[#D4AF37] transition-colors">
                                    {isNe ? 'ब्याजदर तालिका (Interest Rates)' : 'Interest Rates Schedule'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('loans')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'कर्जा सुविधाहरू (Loans)' : 'Loan Products'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Services & Notice */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800 pb-2">
                            {isNe ? 'सेवाहरू र रेमिट्यान्स' : 'Services & Remittance'}
                        </h4>
                        <ul className="space-y-2 text-xs">
                            <li>
                                <button onClick={() => setActiveTab('remittance')} className="hover:text-[#D4AF37] transition-colors">
                                    IME & Western Union Remittance
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('notices')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'सूचना तथा समाचार (Notices)' : 'Official Notices'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('notices')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'फारम डाउनलोड (Downloads)' : 'KYC & Form Downloads'}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setActiveTab('contact')} className="hover:text-[#D4AF37] transition-colors">
                                    {isNe ? 'सम्पर्क फारम (Contact)' : 'Inquiry Form'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Contact Info */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800 pb-2">
                            {isNe ? 'सम्पर्क ठेगाना' : 'Contact Office'}
                        </h4>
                        <div className="space-y-3 text-xs text-slate-300">
                            <a
                                href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 hover:text-[#D4AF37] transition-colors group"
                                title="Open TDSCC in Google Maps"
                            >
                                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="underline decoration-slate-500 underline-offset-2 group-hover:decoration-[#D4AF37]">
                                    Thamel-29, Saat Ghumti Marg, Kathmandu, Nepal
                                </span>
                            </a>

                            <div className="flex items-start gap-2">
                                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-[11px] text-slate-400 font-medium">{isNe ? 'टेलिफोन (Telephone Lines):' : 'Telephone Lines:'}</div>
                                    <div className="flex items-center gap-1.5 font-bold text-white">
                                        <a href="tel:014700289" className="hover:text-[#D4AF37] transition-colors">01-4700289</a>
                                        <span className="text-emerald-500">/</span>
                                        <a href="tel:014700290" className="hover:text-[#D4AF37] transition-colors">01-4700290</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <Smartphone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-[11px] text-slate-400 font-medium">{isNe ? 'मोबाइल (Mobile):' : 'Mobile:'}</div>
                                    <a href="tel:9801203726" className="font-bold text-white hover:text-[#D4AF37] transition-colors">
                                        9801203726
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                                <a href="mailto:tourismdsccmission@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                                    tourismdsccmission@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2">
                                <FacebookIcon className="w-4 h-4 text-[#D4AF37] shrink-0 fill-current" />
                                <a
                                    href="https://www.facebook.com/tourism.development.1/?rdid=rZuyYHrPCRYn8KAq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#D4AF37] transition-colors"
                                >
                                    {isNe ? 'फेसबुक पेज (TDSCC Facebook Page)' : 'TDSCC Facebook Page'}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-emerald-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
                    <p>© {new Date().getFullYear()} Tourism Development Saving & Credit Cooperative Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.facebook.com/tourism.development.1/?rdid=rZuyYHrPCRYn8KAq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-slate-300 hover:text-[#1877F2] font-semibold transition-colors"
                        >
                        </a>
                        <span className="text-emerald-800">|</span>
                        <span>{isNe ? 'सहकारी मार्फत समृद्धि' : 'Empowering Financial Excellence'}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
