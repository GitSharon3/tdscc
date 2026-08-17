import React, { useState } from 'react';
import { CheckCircle2, ExternalLink, Mail, MapPin, Phone, Send, Smartphone } from 'lucide-react';
import { contactDetails, type Language } from './homeContent';

interface ContactProps {
  language: Language;
}

const SUCCESS_NOTIFICATION_DURATION = 4000;

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [submitted, setSubmitted] = useState(false);
  const isNe = language === 'ne';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), SUCCESS_NOTIFICATION_DURATION);
  };

  const contactLinks = [
    {
      icon: MapPin,
      label: isNe ? 'ठेगाना' : 'Location',
      value: contactDetails.address[language],
      href: contactDetails.mapUrl,
      isExternal: true,
    },
    {
      icon: Phone,
      label: isNe ? 'टेलिफोन' : 'Phone',
      value: contactDetails.telephone.join(' / '),
      href: `tel:${contactDetails.telephone[0]}`,
    },
    {
      icon: Smartphone,
      label: isNe ? 'मोबाइल' : 'Mobile',
      value: contactDetails.mobile,
      href: `tel:${contactDetails.mobile}`,
    },
    {
      icon: Mail,
      label: isNe ? 'इमेल' : 'Email',
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {isNe ? 'हामीसँग सम्पर्क गर्नुहोस्' : 'Get In Touch'}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {isNe
              ? 'सेवा, सदस्यता, निक्षेप, कर्जा वा रेमिट्यान्स सम्बन्धी कुनै प्रश्न भए हामीलाई सम्पर्क गर्नुहोस्।'
              : 'Have questions? Reach out to us for service, membership, deposit, loan or remittance inquiries.'}
          </p>

          <div className="mt-6 space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{link.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 break-all">{link.value}</p>
                  </div>
                  {link.isExternal && <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              {isNe ? 'सन्देश पठाउनुहोस्' : 'Send A Message'}
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">{isNe ? 'पूरा नाम' : 'Full Name'}</span>
                <input
                  required
                  type="text"
                  placeholder={isNe ? 'तपाईंको नाम' : 'Your name'}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">{isNe ? 'इमेल' : 'Email'}</span>
                <input
                  required
                  type="email"
                  placeholder={isNe ? 'example@email.com' : 'your@email.com'}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">{isNe ? 'फोन नम्बर' : 'Phone Number'}</span>
                <input
                  required
                  type="tel"
                  placeholder={isNe ? '९८०********' : '980*******'}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">{isNe ? 'विषय' : 'Subject'}</span>
                <input
                  required
                  type="text"
                  placeholder={isNe ? 'सन्देशको विषय' : 'Message subject'}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">{isNe ? 'सन्देश' : 'Message'}</span>
              <textarea
                required
                rows={4}
                placeholder={isNe ? 'तपाईंको सन्देश यहाँ लेख्नुहोस्' : 'Write your message here'}
                className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500"
              />
            </label>

            {submitted && (
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                {isNe ? 'तपाईंको सन्देश सफलतापूर्वक पठाइएको छ।' : 'Your message has been sent successfully.'}
              </div>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              <span>{isNe ? 'सन्देश पठाउनुहोस्' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
