import React, { useState, useRef, useEffect } from 'react';
import {
    ChevronDown,
    PhoneCall,
    Menu,
    X,
    Home,
    Info,
    PiggyBank,
    Percent,
    Landmark,
    Send,
    Bell,
    Mail,
    ChevronRight,
    Images
} from 'lucide-react';
import tdsccLogo from '../../assets/logos/tdsccLogo.png';

export interface NavItem {
    id: string;
    labelEn: string;
    labelNe: string;
    icon?: React.ComponentType<{ className?: string }>;
    href?: string;
    dropdown?: {
        id: string;
        labelEn: string;
        labelNe: string;
        descriptionEn?: string;
        descriptionNe?: string;
    }[];
}

interface NavBarProps {
    activeTab: string;
    setActiveTab: (tabId: string, subItemId?: string) => void;
    language: 'en' | 'ne';
    setLanguage: (lang: 'en' | 'ne') => void;
}

export const navItems: NavItem[] = [
    {
        id: 'home',
        labelEn: 'Home',
        labelNe: 'गृहपृष्ठ',
        icon: Home,
    },
   {
    id: 'about',
    labelEn: 'About Us',
    labelNe: 'हाम्रो बारेमा',
    icon: Info,
    dropdown: [
        {
            id: 'intro',
            labelEn: 'Introduction',
            labelNe: 'परिचय',
            descriptionEn: 'Our mission, vision and values',
            descriptionNe: 'हाम्रो लक्ष्य, दृष्टि र मूल्य मान्यता'
        },
        {
            id: 'chairperson',
            labelEn: 'Message from Chairperson',
            labelNe: 'अध्यक्षको सन्देश',
            descriptionEn: 'Message from our Chairperson',
            descriptionNe: 'हाम्रो अध्यक्षको सन्देश'
        },
        {
            id: 'history',
            labelEn: 'History',
            labelNe: 'इतिहास',
            descriptionEn: 'Our journey & milestones',
            descriptionNe: 'हाम्रो यात्रा र उपलब्धिहरू'
        },
        {
            id: 'board',
            labelEn: 'Board of Directors',
            labelNe: 'सञ्चालक समिति',
            descriptionEn: 'Leadership & governance',
            descriptionNe: 'नेतृत्व तथा सुशासन'
        },
        {
            id: 'management',
            labelEn: 'Management Team',
            labelNe: 'व्यवस्थापन टोली',
            descriptionEn: 'Executive management team',
            descriptionNe: 'कार्यकारी व्यवस्थापन टोली'
        },
    ],
},
    {
        id: 'deposits',
        labelEn: 'Deposits',
        labelNe: 'बचत योजनाहरू',
        icon: PiggyBank,
        dropdown: [
            { id: 'savings', labelEn: 'Savings', labelNe: 'साधारण बचत', descriptionEn: 'Flexible interest savings accounts', descriptionNe: 'लचिलो ब्याज बचत खाताहरू' },
            { id: 'fixed-deposit', labelEn: 'Periodic / Fixed Deposit', labelNe: 'मुद्धती निक्षेप', descriptionEn: 'High return long-term deposits', descriptionNe: 'उच्च प्रतिफल दीर्घकालीन निक्षेप' },
        ],
    },
    {
        id: 'interest-rates',
        labelEn: 'Interest Rates',
        labelNe: 'ब्याजदर',
        icon: Percent,
    },
    {
        id: 'loans',
        labelEn: 'Loans',
        labelNe: 'कर्जा सुविधाहरू',
        icon: Landmark,
        dropdown: [
            { id: 'personal-loan', labelEn: 'Personal / Consumer Loan', labelNe: 'व्यक्तिगत / उपभोक्ता कर्जा' },
            { id: 'housing-loan', labelEn: 'Housing Loan', labelNe: 'घर / आवास कर्जा' },
            { id: 'auto-loan', labelEn: 'Auto Loan', labelNe: 'सवारी साधन कर्जा' },
            { id: 'education-loan', labelEn: 'Education Loan', labelNe: 'शिक्षा कर्जा' },
            { id: 'business-loan', labelEn: 'Business Loan', labelNe: 'व्यापार कर्जा' },
            { id: 'tourism-agri-loan', labelEn: 'Tourism Agriculture Loan', labelNe: 'पर्यटन कृषि कर्जा' },
            { id: 'hire-purchase-loan', labelEn: 'Hire Purchase Loan', labelNe: 'हायरिङ पर्चेज कर्जा' },
            { id: 'short-term-business-loan', labelEn: 'Short Term Business Loan', labelNe: 'अल्पकालीन व्यापार कर्जा' },
        ],
    },
    {
        id: 'remittance',
        labelEn: 'Remittance',
        labelNe: 'रेमिट्यान्स',
        icon: Send,
        dropdown: [
            { id: 'ime', labelEn: 'IME', labelNe: 'आई.एम.ई.' },
            { id: 'western-union', labelEn: 'Western Union', labelNe: 'वेष्टर्न युनियन' },
            { id: 'inward-remittance', labelEn: 'Inward Remittance', labelNe: 'आन्तरिक रेमिट्यान्स' },
            { id: 'outward-remittance', labelEn: 'Outward / Domestic Remittance', labelNe: 'बाह्य / घरेलु रेमिट्यान्स' },
        ],
    },
    {
        id: 'notices',
        labelEn: 'Notices',
        labelNe: 'सूचना तथा समाचार',
        icon: Bell,
        dropdown: [
            { id: 'notices-list', labelEn: 'Notices', labelNe: 'सूचनाहरू' },
            { id: 'news', labelEn: 'News', labelNe: 'समाचार तथा गतिविधि' },
            { id: 'downloads', labelEn: 'Events', labelNe: 'कार्यक्रमहरू' },
        ],
    },
    {
        id: 'gallery',
        labelEn: 'Gallery',
        labelNe: 'ग्यालरी',
        icon: Images,
    },
    {
        id: 'contact',
        labelEn: 'Contact',
        labelNe: 'सम्पर्क',
        icon: Mail,

    },
];

export const NavBar: React.FC<NavBarProps> = ({
    activeTab,
    setActiveTab,
    language,
    setLanguage,
}) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileAccordions, setExpandedMobileAccordions] = useState<Record<string, boolean>>({});

    const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isNe = language === 'ne';

    // Handle Mouse Enter for Hover Desktop Dropdown
    const handleMouseEnter = (id: string) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setOpenDropdown(id);
    };

    // Handle Mouse Leave with subtle delay for smooth UX
    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 150);
    };

    const handleNavClick = (itemId: string, subItemId?: string) => {
        setActiveTab(itemId, subItemId);
        setOpenDropdown(null);
        setMobileMenuOpen(false);
    };

    const toggleMobileAccordion = (id: string) => {
        setExpandedMobileAccordions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Close mobile drawer on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="w-full bg-[#1B4D3E] text-white shadow-lg sticky top-0 z-50 border-t-2 border-[#D4AF37]">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 lg:h-16 gap-2">

                    {/* Desktop Navigation Items (Horizontal List - optimized for 1024px+ laptops) */}
                    <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
                        {navItems.map((item, idx) => {
                            const isActive = activeTab === item.id;
                            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                            const isOpen = openDropdown === item.id;
                            const isRightAlignedDropdown = idx >= 4; // Right-align dropdowns for right side items to prevent viewport overflow

                            return (
                                <div
                                    key={item.id}
                                    className="relative"
                                    onMouseEnter={() => hasDropdown && handleMouseEnter(item.id)}
                                    onMouseLeave={() => hasDropdown && handleMouseLeave()}
                                >
                                    <button
                                        onClick={() => handleNavClick(item.id)}
                                        className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${isActive
                                            ? 'bg-[#2D6A4F] text-white shadow-xs border-b-2 border-[#D4AF37]'
                                            : 'text-emerald-50 hover:bg-[#143C30] hover:text-white'
                                            }`}
                                    >
                                        <span>{isNe ? item.labelNe : item.labelEn}</span>
                                        {hasDropdown && (
                                            <ChevronDown
                                                className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 text-emerald-200 shrink-0 ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                                                    }`}
                                            />
                                        )}
                                    </button>

                                    {/* Dropdown Menu (Desktop) */}
                                    {hasDropdown && isOpen && (
                                        <div
                                            className={`absolute top-full pt-1.5 w-64 xl:w-72 z-50 dropdown-animate ${isRightAlignedDropdown ? 'right-0' : 'left-0'
                                                }`}
                                            onMouseEnter={() => handleMouseEnter(item.id)}
                                            onMouseLeave={() => handleMouseLeave()}
                                        >
                                            <div className="bg-white rounded-xl shadow-xl border border-slate-200/90 overflow-hidden py-2 text-slate-800">
                                                <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                                                    <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-wider">
                                                        {isNe ? item.labelNe : item.labelEn}
                                                    </span>
                                                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                                                        TDSCC
                                                    </span>
                                                </div>
                                                <div className="max-h-[380px] overflow-y-auto py-1">
                                                    {item.dropdown?.map((sub) => (
                                                        <button
                                                            key={sub.id}
                                                            onClick={() => handleNavClick(item.id, sub.id)}
                                                            className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 hover:text-[#1B4D3E] transition-colors flex items-start gap-2.5 group cursor-pointer"
                                                        >
                                                            <ChevronRight className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            <div>
                                                                <div className="text-xs font-semibold text-slate-800 group-hover:text-[#1B4D3E]">
                                                                    {isNe ? sub.labelNe : sub.labelEn}
                                                                </div>
                                                                {(sub.descriptionEn || sub.descriptionNe) && (
                                                                    <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                                                                        {isNe ? sub.descriptionNe : sub.descriptionEn}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile View: Logo/Title shorthand for mobile nav bar */}
                    <div className="lg:hidden flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-white p-0.5 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
                            <img
                                src={tdsccLogo}
                                alt="TDSCC Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-sm font-bold text-white tracking-tight">
                            TDSCC
                        </span>
                    </div>

                    {/* Right Section: Language Switcher & Call CTA Button */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">

                        {/* Language Switcher (नेपाली | English) */}
                        <div className="flex items-center bg-[#143C30] border border-emerald-700/60 rounded-lg p-0.5 shadow-inner">
                            <button
                                type="button"
                                onClick={() => setLanguage('ne')}
                                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer ${language === 'ne'
                                    ? 'bg-[#D4AF37] text-slate-950 shadow-xs'
                                    : 'text-emerald-200 hover:text-white'
                                    }`}
                                title="नेपाली भाषा"
                            >
                                नेपाली
                            </button>
                            <span className="text-emerald-500 text-xs px-0.5">|</span>
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer ${language === 'en'
                                    ? 'bg-[#D4AF37] text-slate-950 shadow-xs'
                                    : 'text-emerald-200 hover:text-white'
                                    }`}
                                title="English Language"
                            >
                                English
                            </button>
                        </div>

                        {/* Call CTA Button */}
                        <a
                            href="tel:01-4700289"
                            className="flex items-center gap-1.5 sm:gap-2 bg-[#D4AF37] hover:bg-[#c49f2c] text-slate-950 font-bold px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 shrink-0 border border-amber-300"
                            title="Call TDSCC Customer Care"
                        >
                            <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-slate-900 shrink-0" />
                            <span className="hidden sm:inline-block">
                                {isNe ? 'सम्पर्क:' : 'Call:'} <strong className="font-extrabold text-slate-950">01-4700289</strong>
                            </span>
                            <span className="sm:hidden font-extrabold text-[11px]">01-4700289</span>
                        </a>

                        {/* Mobile Menu Toggle (Hamburger / X) */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-emerald-100 hover:bg-[#143C30] hover:text-white focus:outline-none transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                    </div>

                </div>
            </div>

            {/* Backdrop Overlay for Mobile Drawer */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden relative z-50 bg-[#143C30] border-t border-emerald-800 text-emerald-50 px-4 py-4 max-h-[85vh] overflow-y-auto space-y-2.5 shadow-2xl">
                    <div className="pb-2.5 border-b border-emerald-800 flex justify-between items-center text-xs text-emerald-300">
                        <span>{isNe ? 'मुख्य मेनु (Main Menu)' : 'Main Menu Navigation'}</span>
                        <span className="text-[#D4AF37] font-semibold">{isNe ? 'सहकारी' : 'Financial Coop'}</span>
                    </div>

                    {navItems.map((item) => {
                        const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                        const isExpanded = Boolean(expandedMobileAccordions[item.id]);
                        const isActive = activeTab === item.id;
                        const IconComp = item.icon;

                        return (
                            <div key={item.id} className="rounded-xl bg-emerald-950/40 border border-emerald-800/60 overflow-hidden transition-colors">
                                <div className="flex items-center justify-between px-3.5 py-3 min-h-[46px]">
                                    <button
                                        onClick={() => handleNavClick(item.id)}
                                        className={`flex items-center gap-3 text-left text-sm font-semibold flex-1 ${isActive ? 'text-[#D4AF37]' : 'text-white'
                                            }`}
                                    >
                                        {IconComp && <IconComp className="w-4 h-4 text-emerald-400 shrink-0" />}
                                        <span>{isNe ? item.labelNe : item.labelEn}</span>
                                    </button>

                                    {hasDropdown && (
                                        <button
                                            onClick={() => toggleMobileAccordion(item.id)}
                                            className="p-2 -mr-1 text-emerald-300 hover:text-white min-w-[40px] flex items-center justify-end"
                                            aria-label="Toggle Submenu"
                                        >
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#D4AF37]' : ''}`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Dropdown Subitems */}
                                {hasDropdown && isExpanded && (
                                    <div className="bg-[#0b241c] px-3.5 py-2 border-t border-emerald-800/60 space-y-1 text-xs">
                                        {item.dropdown?.map((sub) => (
                                            <button
                                                key={sub.id}
                                                onClick={() => handleNavClick(item.id, sub.id)}
                                                className="w-full text-left py-2.5 px-2.5 rounded-lg hover:bg-emerald-800/60 text-emerald-100 flex items-center gap-2.5 transition-colors min-h-[40px]"
                                            >
                                                <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">{isNe ? sub.labelNe : sub.labelEn}</span>
                                                    {(sub.descriptionEn || sub.descriptionNe) && (
                                                        <span className="text-[10px] text-emerald-400/80 leading-tight">
                                                            {isNe ? sub.descriptionNe : sub.descriptionEn}
                                                        </span>
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Quick Mobile Contact Footer Card */}
                    <div className="pt-4 border-t border-emerald-800 text-xs text-center space-y-2.5 text-emerald-200">
                        <a
                            href="https://maps.app.goo.gl/j6qrYwCsUJJhRDp16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:text-[#D4AF37] underline underline-offset-2 transition-colors"
                        >
                            📍 {isNe ? 'ठमेल-२९, सात घुम्ती मार्ग, काठमाडौँ, नेपाल' : 'Thamel-29, Saat Ghumti Marg, Kathmandu, Nepal'}
                        </a>
                        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-emerald-300">
                            <a href="mailto:tourismdsccmission@gmail.com" className="hover:text-[#D4AF37]">✉️ tourismdsccmission@gmail.com</a>
                            <a href="tel:014700289" className="hover:text-[#D4AF37] font-semibold">📞 01-4700289</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
