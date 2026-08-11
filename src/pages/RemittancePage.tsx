import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface RemittancePageProps {
  language: 'en' | 'ne';
}

export const RemittancePage: React.FC<RemittancePageProps> = ({ language }) => {
  const isNe = language === 'ne';

  const remittancePartners = [
    { name: 'IME Remit', type: 'Domestic & International', logo: 'IME' },
    { name: 'Western Union', type: 'Global Money Transfer', logo: 'WU' },
    { name: 'Prabhu Remit', type: 'Worldwide Network', logo: 'PR' },
    { name: 'City Express', type: 'Fast Counter Payout', logo: 'CE' },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-xl">
          <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded-full uppercase">
            {isNe ? 'रेमिट्यान्स सेवा' : 'Money Transfer & Remittance'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mt-3">
            {isNe ? 'सुरक्षित, द्रुत र विश्वसनीय रेमिट्यान्स सेवा' : 'Fast & Secure Remittance Services Across Nepal'}
          </h1>
          <p className="text-sm text-emerald-100 mt-2">
            {isNe
              ? 'स्वदेश तथा विदेशबाट पठाएको रकम ठमेल कार्यालयबाट तुरुन्त भुक्तानी लिनुहोस्।'
              : 'Collect inward money transfers smoothly at our counters in Thamel, Kathmandu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {remittancePartners.map((p, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-black text-lg">
                {p.logo}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
              <p className="text-xs text-slate-500">{p.type}</p>
              <div className="pt-2 flex justify-center text-xs font-semibold text-emerald-700 items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isNe ? 'सञ्चालनमा रहेको' : 'Authorized Partner'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
