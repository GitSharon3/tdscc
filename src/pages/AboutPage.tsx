import React from 'react';
import { Users, Award, ShieldCheck, Target, Building2 } from 'lucide-react';

interface AboutPageProps {
  language: 'en' | 'ne';
  subTab?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const isNe = language === 'ne';

  return (
    <div className="w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Page Banner */}
        <div className="bg-[#1B4D3E] text-white rounded-2xl p-8 shadow-xl">
          <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded-full uppercase">
            {isNe ? 'हाम्रो परिचय' : 'About TDSCC'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold mt-3">
            {isNe ? 'टुरिजम डेभलपमेन्ट सेभिङ्ग एण्ड क्रेडिट को-अपरेटिभ लि.' : 'Tourism Development Saving & Credit Cooperative Limited'}
          </h1>
          <p className="text-sm sm:text-base text-emerald-100 mt-2 max-w-3xl">
            {isNe
              ? 'काठमाडौँको ठमेलमा स्थित, सदस्यहरूको वित्तीय समृद्धि र पर्यटन क्षेत्रको विकासमा समर्पित एक अग्रणी वित्तीय सहकारी संस्था।'
              : 'Established in Thamel, Kathmandu, dedicated to boosting financial prosperity and supporting tourism sector growth in Nepal.'}
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Building2 className="w-6 h-6 text-[#1B4D3E]" />
            <h2 className="text-xl font-bold text-slate-900">
              {isNe ? 'संस्थागत परिचय (Introduction)' : 'Company Profile & Overview'}
            </h2>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            {isNe
              ? 'पर्यटन विकास बचत तथा ऋण सहकारी संस्था लि. सहकारी ऐन, नियम तथा नेपाल राष्ट्र बैंकको मार्गदर्शन अनुरूप दर्ता भई सञ्चालित एक प्रतिष्ठित वित्तीय संस्था हो। संस्थाले आफ्ना सदस्यहरूलाई बचत, कर्जा, रेमिट्यान्स तथा वित्तीय परामर्श सेवा उपलब्ध गराउँदै आएको छ।'
              : 'Tourism Development Saving & Credit Cooperative Limited (TDSCC) is a registered financial cooperative operating under Nepal Cooperative Act and regulatory guidelines. We empower local entrepreneurs, tourism stakeholders, and individuals through safe deposit products and affordable credit.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-100 space-y-2">
              <div className="flex items-center gap-2 text-[#1B4D3E] font-bold text-base">
                <Target className="w-5 h-5" />
                <span>{isNe ? 'हाम्रो उद्देश्य (Our Mission)' : 'Our Mission'}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {isNe
                  ? 'सदस्यहरूलाई उच्चस्तरीय, पारदर्शी र आधुनिक प्रविधियुक्त वित्तीय सेवा प्रदान गरी आर्थिक रूपमा सबल बनाउने।'
                  : 'To deliver transparent, tech-driven, and high-value financial services that elevate our members’ socio-economic status.'}
              </p>
            </div>

            <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                <span>{isNe ? 'हाम्रो दृष्टिकोण (Our Vision)' : 'Our Vision'}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {isNe
                  ? 'नेपालको पर्यटन तथा सहकारी क्षेत्रमा एक मोडल र भरपर्दो वित्तीय संस्थाको रूपमा स्थापित हुने।'
                  : 'To stand out as a model financial cooperative synonymous with trust, financial strength, and community development.'}
              </p>
            </div>
          </div>
        </div>

        {/* Board of Directors & Management preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#1B4D3E]" />
              <h3 className="text-lg font-bold text-slate-900">
                {isNe ? 'सञ्चालक समिति (Board of Directors)' : 'Board of Directors'}
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              {isNe
                ? 'अनुभवी, निष्ठावान र पर्यटन व्यवसायमा समर्पित व्यक्तित्वहरूको नेतृत्व।'
                : 'Guided by seasoned board members with deep roots in hospitality, finance, and community leadership.'}
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 font-medium">
              <li>{isNe ? 'अध्यक्ष: राम बहादुर श्रेष्ठ' : 'Chairman: Ram Bahadur Shrestha'}</li>
              <li>{isNe ? 'उपाध्यक्ष: सीता शर्मा' : 'Vice Chairperson: Sita Sharma'}</li>
              <li>{isNe ? 'सचिव: हरिकृष्ण थापा' : 'Secretary: Hari Krishna Thapa'}</li>
              <li>{isNe ? 'कोषाध्यक्ष: रमेश गुरुङ' : 'Treasurer: Ramesh Gurung'}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-700" />
              <h3 className="text-lg font-bold text-slate-900">
                {isNe ? 'व्यवस्थापन टोली (Management Team)' : 'Management Team'}
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              {isNe
                ? 'दक्ष कर्मचारी वर्गद्वारा द्रुत र सदस्य-मैत्री सेवा सञ्चालन।'
                : 'Dedicated professionals ensuring smooth day-to-day operations and responsive customer service.'}
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4 font-medium">
              <li>{isNe ? 'प्रमुख कार्यकारी अधिकृत (CEO): इन्जिनियर के.बी. खड्का' : 'CEO: Er. K.B. Khadka'}</li>
              <li>{isNe ? 'प्रबन्धक: सुनिता अधिकारी' : 'Manager: Sunita Adhikari'}</li>
              <li>{isNe ? 'ऋण शाखा प्रमुख: प्रकाश सुवेदी' : 'Credit Dept Head: Prakash Subedi'}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
