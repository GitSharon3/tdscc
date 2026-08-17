import {
  Bell,
  CalendarDays,
  Image,
  Landmark,
  Percent,
  PiggyBank,
  Repeat2,
  type LucideIcon,
} from 'lucide-react';

export type Language = 'en' | 'ne';

export interface LocalizedText {
  en: string;
  ne: string;
}

export const t = (language: Language, copy: LocalizedText) => copy[language];

export interface QuickService {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
  tab: string;
  sub?: string;
}

export const quickServices: QuickService[] = [
  {
    id: 'deposits',
    label: { en: 'Deposits', ne: 'निक्षेप' },
    description: {
      en: 'Savings and fixed deposit options for members.',
      ne: 'सदस्यहरूका लागि बचत तथा मुद्धती निक्षेप।',
    },
    icon: PiggyBank,
    tab: 'deposits',
  },
  {
    id: 'loans',
    label: { en: 'Loans', ne: 'कर्जा' },
    description: {
      en: 'Personal, business, housing and tourism credit.',
      ne: 'व्यक्तिगत, व्यवसाय, आवास तथा पर्यटन कर्जा।',
    },
    icon: Landmark,
    tab: 'loans',
  },
  {
    id: 'remittance',
    label: { en: 'Remittance', ne: 'रेमिट्यान्स' },
    description: {
      en: 'Fast domestic and international money transfer.',
      ne: 'द्रुत घरेलु तथा अन्तर्राष्ट्रिय रकम स्थानान्तरण।',
    },
    icon: Repeat2,
    tab: 'remittance',
  },
  {
    id: 'interest',
    label: { en: 'Interest Rates', ne: 'ब्याजदर' },
    description: {
      en: 'Transparent deposit and loan rate schedules.',
      ne: 'निक्षेप तथा कर्जाको पारदर्शी ब्याजदर।',
    },
    icon: Percent,
    tab: 'interest-rates',
  },
  {
    id: 'notices',
    label: { en: 'Notices', ne: 'सूचनाहरू' },
    description: {
      en: 'Official announcements and member updates.',
      ne: 'आधिकारिक सूचना तथा सदस्य अपडेट।',
    },
    icon: Bell,
    tab: 'notices',
  },
  {
    id: 'gallery',
    label: { en: 'Gallery', ne: 'ग्यालरी' },
    description: {
      en: 'Photos from cooperative events and activities.',
      ne: 'सहकारीका कार्यक्रम तथा गतिविधिका तस्बिरहरू।',
    },
    icon: Image,
    tab: 'gallery',
  },
];

export const updateItems = [
  {
    type: { en: 'Notice', ne: 'सूचना' },
    date: { en: 'Jun 29, 2024', ne: '२०८१ असार १५' },
    title: {
      en: 'Capacity development training for cooperative chairpersons in Kalanki',
      ne: 'कालंकीमा सहकारीका अध्यक्षहरूको लागि क्षमता विकास तालिम',
    },
    icon: Bell,
  },
  {
    type: { en: 'News', ne: 'समाचार' },
    date: { en: 'Jun 24, 2024', ne: '२०८१ असार १०' },
    title: {
      en: 'Pokhara cooperative chairperson capacity development training completed',
      ne: 'पोखरामा सहकारीका अध्यक्षहरूको क्षमता विकास तालिम सम्पन्न',
    },
    icon: CalendarDays,
  },
  {
    type: { en: 'Event', ne: 'कार्यक्रम' },
    date: { en: 'Jun 22, 2024', ne: '२०८१ असार ८' },
    title: {
      en: 'First cooperative employment fair completed with strong participation',
      ne: 'प्रथम सहकारी रोजगार मेला सम्पन्न, ३ हजार बढीद्वारा अवलोकन',
    },
    icon: CalendarDays,
  },
];

export const contactDetails = {
  mapUrl: 'https://maps.app.goo.gl/j6qrYwCsUJJhRDp16',
  address: {
    en: 'Thamel-29, Saat Ghumti Marg, Kathmandu, Nepal',
    ne: 'ठमेल-२९, सात घुम्ती मार्ग, काठमाडौँ, नेपाल',
  },
  telephone: ['01-4700289', '01-4700290'],
  mobile: '9801203726',
  email: 'tourismdsccmission@gmail.com',
};
