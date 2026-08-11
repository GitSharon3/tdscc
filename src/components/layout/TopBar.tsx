import React from 'react';
import { MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';
import tdsccLogo from '../../assets/logos/tdsccLogo.png';

interface TopBarProps {
    language: 'en' | 'ne';
}

export const TopBar: React.FC<TopBarProps> = ({ language }) => {
    const isNe = language === 'ne';

    return (
        <header className="w-full bg-white border-b border-slate-200/80 shadow-xs">
            {/* Topmost Micro-Utility Bar */}
            <div className="bg-[#143C30] text-emerald-100 text-xs py-1.5 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-4 text-emerald-200/90 text-xs">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>
                                {isNe ? 'नेपाल राष्ट्र बैंक स्वीकृत / सहकारी विभाग दर्ता नं: ३८४' : 'NRB Registered & Authorized Financial Cooperative'}
                            </span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-emerald-200/80 text-xs">
                        <span className="hidden md:flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-300" />
                            <span>{isNe ? 'आइतबार – शुक्रबार: १०:०० AM – ५:०० PM' : 'Sun – Fri: 10:00 AM – 5:00 PM'}</span>
                        </span>
                        <span className="bg-emerald-900/60 text-[#D4AF37] px-2 py-0.5 rounded text-[11px] font-medium border border-emerald-700/50">
                            {isNe ? 'बचत तथा ऋण सुरक्षा' : 'Regulated & Secured'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Top Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">

                    {/* Left: Branding & Logo */}
                    <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full lg:w-auto">
                        {/* TDSCC Emblem Logo */}
                        <div className="relative group cursor-pointer shrink-0">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-1 shadow-md border border-slate-200/90 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                                <img
                                    src={tdsccLogo}
                                    alt="Tourism Development Saving & Credit Cooperative Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Organization Name & Tagline */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-semibold text-[#1B4D3E] tracking-wide">
                                    {isNe ? 'टुरिजम डेभलपमेन्ट बचत तथा ऋण सहकारी संस्था लि.' : 'TDSCC LIMITED'}
                                </span>
                                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded-full uppercase border border-amber-200">
                                    {isNe ? 'सहकारी' : 'Cooperative'}
                                </span>
                            </div>

                            <h1 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug tracking-tight">
                                {isNe
                                    ? 'टुरिजम डेभलपमेन्ट बचत तथा ऋण सहकारी संस्था लि.'
                                    : 'Tourism Development Saving & Credit Cooperative Limited'}
                            </h1>

                            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                                {isNe
                                    ? 'विश्वसनीय वित्तीय सेवा, समृद्ध समाजको आधार'
                                    : 'Empowering Communities through Trust & Financial Excellence'}
                            </p>
                        </div>
                    </div>

                    {/* Right: Location & Email Info Cards */}
                    <div className="hidden lg:flex items-center gap-6 shrink-0 border-l border-slate-200 pl-6">

                        {/* Location Card */}
                        <a
                            href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 group p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#1B4D3E] flex items-center justify-center shrink-0 border border-emerald-100/80 group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                                    {isNe ? 'हाम्रो कार्यालय' : 'Head Office'}
                                </span>
                                <span className="block text-xs font-semibold text-slate-800 group-hover:text-[#1B4D3E] transition-colors">
                                    {isNe ? 'ठमेल-२९, काठमाडौँ, नेपाल' : 'Thamel-29, Kathmandu, Nepal'}
                                </span>
                                <span className="block text-[10px] text-slate-500">
                                    {isNe ? 'सात घुम्ती मार्ग, काठमाडौँ' : 'Saat Ghumti Marg, Kathmandu'}
                                </span>
                            </div>
                        </a>

                        {/* Divider */}
                        <div className="h-8 w-px bg-slate-200"></div>

                        {/* Email Card */}
                        <a
                            href="mailto:tourismdsccmission@gmail.com"
                            className="flex items-start gap-3 group p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100/80 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400">
                                    {isNe ? 'इमेल पठाउनुहोस्' : 'Email Address'}
                                </span>
                                <span className="block text-xs font-semibold text-slate-800 group-hover:text-[#1B4D3E] transition-colors">
                                    tourismdsccmission@gmail.com
                                </span>
                                <span className="block text-[10px] text-slate-500">
                                    {isNe ? '२४/७ इमेल सहायता' : 'Official Support Mail'}
                                </span>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </header>
    );
};
