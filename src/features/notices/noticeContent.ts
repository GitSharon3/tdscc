import { Bell, CalendarDays, Newspaper, type LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ne';
export type NoticeCategory = 'notice' | 'news' | 'event';
export type NoticeFilter = 'all' | NoticeCategory;

export interface LocalizedText {
  en: string;
  ne: string;
}

export interface NoticeItem {
  id: string;
  category: NoticeCategory;
  title: LocalizedText;
  summary: LocalizedText;
  date: LocalizedText;
  fileName: string;
  fileUrl: string;
  icon: LucideIcon;
}

export const t = (language: Language, copy: LocalizedText) => copy[language];

export const noticeFilters: { id: NoticeFilter; label: LocalizedText }[] = [
  { id: 'all', label: { en: 'All', ne: 'सबै' } },
  { id: 'notice', label: { en: 'Notice', ne: 'सूचना' } },
  { id: 'news', label: { en: 'News', ne: 'समाचार' } },
  { id: 'event', label: { en: 'Events', ne: 'कार्यक्रम' } },
];

export const categoryLabels: Record<NoticeCategory, LocalizedText> = {
  notice: { en: 'Notice', ne: 'सूचना' },
  news: { en: 'News', ne: 'समाचार' },
  event: { en: 'Event', ne: 'कार्यक्रम' },
};

export const noticeItems: NoticeItem[] = [
  {
    id: 'kalanki-chairperson-training',
    category: 'notice',
    title: {
      en: 'Capacity development training for cooperative chairpersons in Kalanki',
      ne: 'कालंकीमा सहकारीका अध्यक्षहरूको लागि क्षमता विकास तालिम',
    },
    summary: {
      en: 'Official notice with schedule, participation details and training coordination information.',
      ne: 'तालिका, सहभागिता विवरण र तालिम समन्वय सम्बन्धी आधिकारिक सूचना।',
    },
    date: { en: 'Jun 29, 2024', ne: '२०८१ असार १५' },
    fileName: 'kalanki-chairperson-training-notice.pdf',
    fileUrl: '/downloads/kalanki-chairperson-training-notice.pdf',
    icon: Bell,
  },
  {
    id: 'pokhara-training-completed',
    category: 'news',
    title: {
      en: 'Pokhara cooperative chairperson capacity development training completed',
      ne: 'पोखरामा सहकारीका अध्यक्षहरूको क्षमता विकास तालिम सम्पन्न',
    },
    summary: {
      en: 'News release covering the completed training program and participation highlights.',
      ne: 'सम्पन्न तालिम कार्यक्रम र सहभागिताका मुख्य विवरण समेटिएको समाचार।',
    },
    date: { en: 'Jun 24, 2024', ne: '२०८१ असार १०' },
    fileName: 'pokhara-training-news-release.pdf',
    fileUrl: '/downloads/pokhara-training-news-release.pdf',
    icon: Newspaper,
  },
  {
    id: 'cooperative-employment-fair',
    category: 'event',
    title: {
      en: 'First cooperative employment fair completed with strong participation',
      ne: 'प्रथम सहकारी रोजगार मेला सम्पन्न, उल्लेखनीय सहभागिता',
    },
    summary: {
      en: 'Event report with participation summary, program notes and downloadable reference material.',
      ne: 'सहभागिता सारांश, कार्यक्रम विवरण र डाउनलोड सामग्री सहितको कार्यक्रम प्रतिवेदन।',
    },
    date: { en: 'Jun 22, 2024', ne: '२०८१ असार ८' },
    fileName: 'cooperative-employment-fair-event-report.pdf',
    fileUrl: '/downloads/cooperative-employment-fair-event-report.pdf',
    icon: CalendarDays,
  },
  {
    id: 'agm-notice-2026',
    category: 'notice',
    title: {
      en: 'Annual General Meeting (AGM) Notice 2026',
      ne: 'वार्षिक साधारण सभा सम्बन्धी सूचना २०२६',
    },
    summary: {
      en: 'Member notice for meeting agenda, venue, time and required documents.',
      ne: 'बैठक एजेन्डा, स्थान, समय र आवश्यक कागजात सम्बन्धी सदस्य सूचना।',
    },
    date: { en: 'Aug 01, 2026', ne: '२०८३ साउन १६' },
    fileName: 'agm-notice-2026.pdf',
    fileUrl: '/downloads/agm-notice-2026.pdf',
    icon: Bell,
  },
  {
    id: 'interest-rate-update',
    category: 'notice',
    title: {
      en: 'Updated interest rates effective from Shrawan 2083',
      ne: 'साउन २०८३ देखि लागू हुने नयाँ ब्याजदर तालिका',
    },
    summary: {
      en: 'Updated deposit and loan interest rate schedule for members and applicants.',
      ne: 'सदस्य तथा आवेदकहरूको लागि निक्षेप र कर्जाको नयाँ ब्याजदर सूची।',
    },
    date: { en: 'Jul 16, 2026', ne: '२०८३ साउन १' },
    fileName: 'interest-rates-shrawan-2083.pdf',
    fileUrl: '/downloads/interest-rates-shrawan-2083.pdf',
    icon: Bell,
  },
];
