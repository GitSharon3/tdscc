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
            <div className="bg-[#143C30] text-emerald-100 text-xs py-1.5 px-3 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-2 sm:gap-4 text-emerald-200/90 text-[11px] sm:text-xs text-center sm:text-left">
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span className="truncate max-w-[280px] sm:max-w-none">
                                {isNe ? 'नेपाल राष्ट्र बैंक स्वीकृत / सहकारी विभाग दर्ता नं: २५५८/०६६/०६७' : 'NRB Registered & Authorized Financial Cooperative'}
                            </span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-emerald-200/80 text-[11px] sm:text-xs">
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                            <span>{isNe ? 'आइतबार – शुक्रबार: १०:०० AM – ५:०० PM' : 'Sun – Fri: 10:00 AM – 5:00 PM'}</span>
                        </span>
                        <span className="bg-emerald-900/60 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium border border-emerald-700/50 shrink-0">
                            {isNe ? 'बचत तथा ऋण सुरक्षा' : 'Regulated & Secured'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Top Header Section */}
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6">

                    {/* Left: Branding & Logo */}
                    <div className="flex items-center gap-3 sm:gap-4 text-left w-full md:w-auto justify-start">
                        {/* TDSCC Emblem Logo */}
                        <div className="relative group cursor-pointer shrink-0">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-white p-1 shadow-md border border-slate-200/90 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                                <img
                                    src={tdsccLogo}
                                    alt="Tourism Development Saving & Credit Cooperative Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Organization Name & Tagline */}
                        <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-[#1B4D3E] tracking-wide">
                                    {isNe ? 'टुरिजम डेभलपमेन्ट बचत तथा ऋण सहकारी संस्था लि.' : 'TDSCC LIMITED'}
                                </span>
                                <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold bg-amber-100 text-amber-900 rounded-full uppercase border border-amber-200">
                                    {isNe ? 'सहकारी' : 'Cooperative'}
                                </span>
                            </div>

                            <h1 className="text-sm sm:text-base lg:text-xl font-bold text-slate-900 leading-snug tracking-tight">
                                {isNe
                                    ? 'टुरिजम डेभलपमेन्ट बचत तथा ऋण सहकारी संस्था लि.'
                                    : 'Tourism Development Saving & Credit Cooperative Limited'}
                            </h1>

                            <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 font-medium mt-0.5 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                                <span className="truncate sm:whitespace-normal">
                                    {isNe
                                        ? 'विश्वसनीय वित्तीय सेवा, समृद्ध समाजको आधार'
                                        : 'Empowering Communities through Trust & Financial Excellence'}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Location & Email Info Cards (Shown on Tablet & Desktop: md+) */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0 md:border-l border-slate-200 md:pl-4 lg:pl-6 w-full md:w-auto justify-end">

                        {/* Location Card */}
                        <a
                            href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2.5 group p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-emerald-50 text-[#1B4D3E] flex items-center justify-center shrink-0 border border-emerald-100/80 group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors">
                                <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] lg:text-[11px] font-medium uppercase tracking-wider text-slate-400">
                                    {isNe ? 'हाम्रो कार्यालय' : 'Head Office'}
                                </span>
                                <span className="block text-xs font-semibold text-slate-800 group-hover:text-[#1B4D3E] transition-colors">
                                    {isNe ? 'ठमेल-२९, काठमाडौँ' : 'Thamel-29, Kathmandu'}
                                </span>
                                <span className="block text-[10px] text-slate-500">
                                    {isNe ? 'सात घुम्ती मार्ग, नेपाल' : 'Saat Ghumti Marg, Nepal'}
                                </span>
                            </div>
                        </a>

                        {/* Divider */}
                        <div className="hidden lg:block h-8 w-px bg-slate-200"></div>

                        {/* Email Card */}
                        <a
                            href="mailto:tourismdsccmission@gmail.com"
                            className="flex items-start gap-2.5 group p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100/80 group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors">
                                <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] lg:text-[11px] font-medium uppercase tracking-wider text-slate-400">
                                    {isNe ? 'इमेल सहायता' : 'Email Address'}
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
