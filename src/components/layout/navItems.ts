import {
  Bell,
  Home,
  Images,
  Info,
  Landmark,
  Mail,
  Percent,
  PiggyBank,
  Send,
} from 'lucide-react';
import type { ComponentType } from 'react';

export interface NavItem {
  id: string;
  labelEn: string;
  labelNe: string;
  icon?: ComponentType<{ className?: string }>;
  href?: string;
  dropdown?: {
    id: string;
    labelEn: string;
    labelNe: string;
    descriptionEn?: string;
    descriptionNe?: string;
  }[];
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
        descriptionNe: 'हाम्रो लक्ष्य, दृष्टि र मूल्य मान्यता',
      },
      {
        id: 'history',
        labelEn: 'History',
        labelNe: 'इतिहास',
        descriptionEn: 'Our journey & milestones',
        descriptionNe: 'हाम्रो यात्रा र उपलब्धिहरू',
      },
      {
        id: 'chairperson',
        labelEn: 'Message from Chairperson',
        labelNe: 'अध्यक्षको सन्देश',
        descriptionEn: 'Message from our Chairperson',
        descriptionNe: 'हाम्रो अध्यक्षको सन्देश',
      },
      {
        id: 'board',
        labelEn: 'Board of Directors',
        labelNe: 'सञ्चालक समिति',
        descriptionEn: 'Leadership & governance',
        descriptionNe: 'नेतृत्व तथा सुशासन',
      },
      {
        id: 'management',
        labelEn: 'Management Team',
        labelNe: 'व्यवस्थापन टोली',
        descriptionEn: 'Executive management team',
        descriptionNe: 'कार्यकारी व्यवस्थापन टोली',
      },
    ],
  },
  {
    id: 'deposits',
    labelEn: 'Deposits',
    labelNe: 'बचत योजनाहरू',
    icon: PiggyBank,
    dropdown: [
      {
        id: 'savings',
        labelEn: 'Savings',
        labelNe: 'साधारण बचत',
        descriptionEn: 'Flexible interest savings accounts',
        descriptionNe: 'लचिलो ब्याज बचत खाताहरू',
      },
      {
        id: 'fixed-deposit',
        labelEn: 'Periodic / Fixed Deposit',
        labelNe: 'मुद्धती निक्षेप',
        descriptionEn: 'High return long-term deposits',
        descriptionNe: 'उच्च प्रतिफल दीर्घकालीन निक्षेप',
      },
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
