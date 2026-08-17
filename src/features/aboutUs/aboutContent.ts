import {
  Award,
  Banknote,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Compass,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { ComponentType } from 'react';
import chairpersonPhoto from '../../assets/images/chairperson.png';

export type Language = 'en' | 'ne';

export type LocalizedText = {
  en: string;
  ne: string;
};

export type AboutSectionId = 'intro' | 'history' | 'chairperson' | 'board' | 'management';

export const text = (language: Language, value: LocalizedText) => value[language];

export const aboutSections: {
  id: AboutSectionId;
  title: LocalizedText;
  shortTitle: LocalizedText;
  description: LocalizedText;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'intro',
    title: { en: 'Introduction', ne: 'परिचय' },
    shortTitle: { en: 'Profile', ne: 'परिचय' },
    description: {
      en: 'Mission, vision and values that guide TDSCC.',
      ne: 'टिडिएससिसीलाई मार्गदर्शन गर्ने लक्ष्य, दृष्टि र मूल्यहरू।',
    },
    icon: Landmark,
  },
  {
    id: 'history',
    title: { en: 'Our Journey', ne: 'हाम्रो यात्रा' },
    shortTitle: { en: 'History', ne: 'इतिहास' },
    description: {
      en: 'From the founding phase in Thamel to wider service coverage.',
      ne: 'ठमेलको प्रारम्भिक चरणदेखि विस्तारित सेवा क्षेत्रसम्म।',
    },
    icon: Clock3,
  },
  {
    id: 'chairperson',
    title: { en: 'Message from the Chairperson', ne: 'अध्यक्षको सन्देश' },
    shortTitle: { en: 'Chairperson', ne: 'अध्यक्ष' },
    description: {
      en: 'A note on trust, partnership and responsible growth.',
      ne: 'विश्वास, साझेदारी र जिम्मेवार वृद्धिबारे सन्देश।',
    },
    icon: HeartHandshake,
  },
  {
    id: 'board',
    title: { en: 'Board of Directors', ne: 'सञ्चालक समिति' },
    shortTitle: { en: 'Board', ne: 'समिति' },
    description: {
      en: 'Leadership and governance for long-term institutional progress.',
      ne: 'दीर्घकालीन संस्थागत प्रगतिका लागि नेतृत्व र सुशासन।',
    },
    icon: Users,
  },
  {
    id: 'management',
    title: { en: 'Management Team', ne: 'व्यवस्थापन टोली' },
    shortTitle: { en: 'Team', ne: 'टोली' },
    description: {
      en: 'Professionals serving members through daily operations.',
      ne: 'दैनिक सञ्चालनमार्फत सदस्यलाई सेवा दिने पेशेवर टोली।',
    },
    icon: BriefcaseBusiness,
  },
];

export const introContent = {
  eyebrow: { en: 'About TDSCC', ne: 'टिडिएससिसी बारे' },
  title: {
    en: 'Tourism Development Saving & Credit Cooperative Limited',
    ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
  },
  subtitle: {
    en: 'A member-oriented cooperative providing accessible and reliable financial services for tourism-linked communities and productive sectors.',
    ne: 'पर्यटनसँग जोडिएका समुदाय र उत्पादनशील क्षेत्रका लागि पहुँचयोग्य तथा विश्वसनीय वित्तीय सेवा प्रदान गर्ने सदस्यमुखी सहकारी।',
  },
  paragraphs: [
    {
      en: 'TDSCC was established through the collective efforts of tourism entrepreneurs, professors, professional bankers, lecturers, doctors, engineers, lawyers and other socially engaged professionals.',
      ne: 'टिडिएससिसी पर्यटन उद्यमी, प्राध्यापक, अनुभवी बैंकर, व्याख्याता, चिकित्सक, इन्जिनियर, कानुन व्यवसायी तथा सामाजिक रूपमा सक्रिय पेशेवरहरूको सामूहिक प्रयासबाट स्थापना भएको हो।',
    },
    {
      en: 'The cooperative works to connect financial services with the needs of individuals, entrepreneurs, businesses and communities linked with tourism and productive sectors.',
      ne: 'सहकारीले पर्यटन तथा उत्पादनशील क्षेत्रसँग जोडिएका व्यक्ति, उद्यमी, व्यवसाय र समुदायका आवश्यकतालाई वित्तीय सेवासँग जोड्ने काम गर्छ।',
    },
    {
      en: 'Our approach is simple: understand member needs, provide appropriate financial solutions and contribute to sustainable economic growth.',
      ne: 'हाम्रो दृष्टिकोण सरल छ: सदस्यको आवश्यकता बुझ्ने, उपयुक्त वित्तीय समाधान दिने र दिगो आर्थिक वृद्धिमा योगदान पुर्‍याउने।',
    },
  ],
  vision: {
    title: { en: 'Our Vision', ne: 'हाम्रो दृष्टि' },
    body: {
      en: 'To be the first choice financial cooperative for our members, customers, shareholders, stakeholders, community and nation through trusted, professional and customer-focused financial services.',
      ne: 'विश्वसनीय, पेशेवर र ग्राहकमुखी वित्तीय सेवामार्फत सदस्य, ग्राहक, शेयरधनी, सरोकारवाला, समुदाय र राष्ट्रका लागि पहिलो रोजाइको वित्तीय सहकारी बन्ने।',
    },
  },
  mission: {
    title: { en: 'Our Mission', ne: 'हाम्रो लक्ष्य' },
    items: [
      {
        en: 'Provide reliable, accessible and member-focused financial services.',
        ne: 'विश्वसनीय, पहुँचयोग्य र सदस्यमुखी वित्तीय सेवा प्रदान गर्ने।',
      },
      {
        en: 'Support entrepreneurs and businesses associated with tourism and productive sectors.',
        ne: 'पर्यटन तथा उत्पादनशील क्षेत्रसँग सम्बन्धित उद्यमी र व्यवसायलाई सहयोग गर्ने।',
      },
      {
        en: 'Encourage saving habits, financial responsibility and appropriate credit access.',
        ne: 'बचत संस्कार, वित्तीय जिम्मेवारी र उपयुक्त कर्जा पहुँचलाई प्रोत्साहन गर्ने।',
      },
      {
        en: 'Contribute to tourism development and Nepal’s socio-economic development.',
        ne: 'पर्यटन विकास तथा नेपालको सामाजिक-आर्थिक विकासमा योगदान पुर्‍याउने।',
      },
      {
        en: 'Continuously improve services according to changing member and customer needs.',
        ne: 'सदस्य र ग्राहकका बदलिँदा आवश्यकताअनुसार सेवा निरन्तर सुधार गर्ने।',
      },
    ],
  },
  values: [
    {
      title: { en: 'Integrity', ne: 'निष्ठा' },
      body: {
        en: 'Honest, transparent and responsible conduct in every financial relationship.',
        ne: 'हरेक वित्तीय सम्बन्धमा इमानदार, पारदर्शी र जिम्मेवार व्यवहार।',
      },
      icon: ShieldCheck,
    },
    {
      title: { en: 'Member Focus', ne: 'सदस्य केन्द्रित सेवा' },
      body: {
        en: 'Practical solutions shaped around member and customer needs.',
        ne: 'सदस्य तथा ग्राहकका आवश्यकताअनुसार व्यावहारिक समाधान।',
      },
      icon: Target,
    },
    {
      title: { en: 'Professionalism', ne: 'पेशागतता' },
      body: {
        en: 'Competence, discipline and continuous improvement in daily operations.',
        ne: 'दैनिक कार्यमा दक्षता, अनुशासन र निरन्तर सुधार।',
      },
      icon: Award,
    },
    {
      title: { en: 'Cooperation', ne: 'सहकार्य' },
      body: {
        en: 'Mutual support, participation and collective progress.',
        ne: 'आपसी सहयोग, सहभागिता र सामूहिक प्रगति।',
      },
      icon: Handshake,
    },
    {
      title: { en: 'Accountability', ne: 'जवाफदेहिता' },
      body: {
        en: 'Responsibility for decisions, services and commitments.',
        ne: 'निर्णय, सेवा र प्रतिबद्धताप्रति जिम्मेवारी।',
      },
      icon: Scale,
    },
    {
      title: { en: 'Sustainable Development', ne: 'दिगो विकास' },
      body: {
        en: 'Support for productive activities that strengthen tourism and communities.',
        ne: 'पर्यटन र समुदायलाई बलियो बनाउने उत्पादनशील गतिविधिमा सहयोग।',
      },
      icon: Leaf,
    },
  ],
};

export const historyContent = {
  eyebrow: { en: 'Our Journey', ne: 'हाम्रो यात्रा' },
  title: {
    en: 'Built on trust, cooperation and tourism-sector purpose',
    ne: 'विश्वास, सहकार्य र पर्यटन क्षेत्रको उद्देश्यमा आधारित यात्रा',
  },
  paragraphs: [
    {
      en: 'Tourism Development Saving & Credit Cooperative Limited was established with the objective of providing financial services to members while contributing to Nepal’s tourism and productive sectors.',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड सदस्यहरूलाई वित्तीय सेवा प्रदान गर्दै नेपालको पर्यटन तथा उत्पादनशील क्षेत्रमा योगदान पुर्‍याउने उद्देश्यले स्थापना भएको हो।',
    },
    {
      en: 'In its initial stage, TDSCC operated around Thamel, Kathmandu. As services developed, coverage expanded across Kathmandu to serve more members, entrepreneurs, professionals and businesses.',
      ne: 'प्रारम्भिक चरणमा टिडिएससिसीले काठमाडौँको ठमेल क्षेत्रमा सेवा सञ्चालन गरेको थियो। सेवा विकाससँगै काठमाडौँभरि सदस्य, उद्यमी, पेशेवर र व्यवसायलाई सेवा दिने गरी पहुँच विस्तार भयो।',
    },
    {
      en: 'The cooperative continues to move forward with professional management, member service, responsible financial practices and sustainable growth at the center of its work.',
      ne: 'सहकारीले पेशेवर व्यवस्थापन, सदस्यमुखी सेवा, जिम्मेवार वित्तीय अभ्यास र दिगो वृद्धिलाई केन्द्रमा राखेर अघि बढिरहेको छ।',
    },
  ],
  principles: [
    { en: 'Financial independence among members', ne: 'सदस्यहरूमा वित्तीय आत्मनिर्भरता' },
    { en: 'Mutual cooperation and participation', ne: 'आपसी सहयोग र सहभागिता' },
    { en: 'Saving culture and appropriate credit access', ne: 'बचत संस्कार र उपयुक्त कर्जा पहुँच' },
    { en: 'Tourism-sector and productive business development', ne: 'पर्यटन क्षेत्र र उत्पादनशील व्यवसायको विकास' },
  ],
  milestones: [
    {
      period: { en: 'Foundation', ne: 'स्थापना चरण' },
      title: { en: 'Establishment', ne: 'स्थापना' },
      body: {
        en: 'TDSCC commenced operations as a savings and credit cooperative.',
        ne: 'टिडिएससिसीले बचत तथा ऋण सहकारीका रूपमा सञ्चालन सुरु गर्‍यो।',
      },
    },
    {
      period: { en: 'Initial Phase', ne: 'प्रारम्भिक चरण' },
      title: { en: 'Thamel service area', ne: 'ठमेल सेवा क्षेत्र' },
      body: {
        en: 'The cooperative began around Thamel, Kathmandu with a focused service base.',
        ne: 'सहकारीले काठमाडौँको ठमेल क्षेत्रमा केन्द्रित सेवा आधारबाट सुरुवात गर्‍यो।',
      },
    },
    {
      period: { en: 'Expansion Phase', ne: 'विस्तार चरण' },
      title: { en: 'Wider Kathmandu coverage', ne: 'काठमाडौँभरि सेवा विस्तार' },
      body: {
        en: 'Services expanded across Kathmandu as membership and financial products grew.',
        ne: 'सदस्यता र वित्तीय उत्पादन बढेसँगै सेवा काठमाडौँभरि विस्तार भयो।',
      },
    },
    {
      period: { en: 'Product Development', ne: 'उत्पादन विकास' },
      title: { en: 'Savings, deposits and credit portfolio', ne: 'बचत, निक्षेप र कर्जा पोर्टफोलियो' },
      body: {
        en: 'TDSCC developed savings, fixed deposits, personal, housing, automobile, education, tourism agriculture, business and other credit products.',
        ne: 'टिडिएससिसीले बचत, मुद्धती निक्षेप, व्यक्तिगत, आवास, सवारी, शिक्षा, पर्यटन कृषि, व्यवसाय लगायतका कर्जा उत्पादन विकास गर्‍यो।',
      },
    },
    {
      period: { en: 'Continuing Growth', ne: 'निरन्तर वृद्धि' },
      title: { en: 'Professional service and sustainable growth', ne: 'पेशेवर सेवा र दिगो वृद्धि' },
      body: {
        en: 'The cooperative continues to focus on member service, tourism development and sound financial growth.',
        ne: 'सहकारीले सदस्य सेवा, पर्यटन विकास र स्वस्थ वित्तीय वृद्धिमा निरन्तर ध्यान दिइरहेको छ।',
      },
    },
  ],
  note: {
    en: 'Publication note: registration details and milestone years should be confirmed from official cooperative documents before final publication.',
    ne: 'प्रकाशन नोट: अन्तिम प्रकाशनअघि दर्ता विवरण र प्रमुख माइलस्टोन वर्षहरू आधिकारिक सहकारी कागजातबाट पुष्टि गर्नुपर्छ।',
  },
};

export const chairpersonContent = {
  name: { en: 'Susil Pant', ne: 'सुशील पन्त' },
  role: {
    en: 'Chairperson, Tourism Development Saving & Credit Cooperative Limited',
    ne: 'अध्यक्ष, टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
  },
  title: {
    en: 'A message of trust, partnership and progress',
    ne: 'विश्वास, साझेदारी र प्रगतिको सन्देश',
  },
  paragraphs: [
    {
      en: 'It gives me great pleasure to welcome you to Tourism Development Saving & Credit Cooperative Limited.',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेडमा यहाँहरूलाई स्वागत गर्न पाउँदा मलाई अत्यन्त खुशी लागेको छ।',
    },
    {
      en: 'TDSCC was established with a clear purpose: to provide dependable financial services while contributing to tourism, entrepreneurship and the wider socio-economic development of Nepal.',
      ne: 'टिडिएससिसी भरपर्दो वित्तीय सेवा प्रदान गर्दै पर्यटन, उद्यमशीलता र नेपालको व्यापक सामाजिक-आर्थिक विकासमा योगदान पुर्‍याउने स्पष्ट उद्देश्यसहित स्थापना भएको हो।',
    },
    {
      en: 'Our members are the foundation of our organization. Their trust, participation and continued support have enabled TDSCC to grow and develop over the years.',
      ne: 'हाम्रा सदस्यहरू नै संस्थाको आधार हुन्। उहाँहरूको विश्वास, सहभागिता र निरन्तर सहयोगले टिडिएससिसीलाई वर्षौंदेखि बढ्न र विकास गर्न सक्षम बनाएको छ।',
    },
    {
      en: 'At TDSCC, we remain committed to responsible financial practices, professional service, transparency, accountability and cooperative values in everything we do.',
      ne: 'टिडिएससिसीमा हामी जिम्मेवार वित्तीय अभ्यास, पेशेवर सेवा, पारदर्शिता, जवाफदेहिता र सहकारी मूल्यप्रति प्रतिबद्ध छौं।',
    },
    {
      en: 'On behalf of the Board of Directors and the entire TDSCC family, I sincerely thank our members, customers, shareholders, partners and well-wishers for their continued trust and support.',
      ne: 'सञ्चालक समिति र सम्पूर्ण टिडिएससिसी परिवारको तर्फबाट सदस्य, ग्राहक, शेयरधनी, साझेदार र शुभेच्छुकहरूलाई निरन्तर विश्वास र सहयोगका लागि हार्दिक धन्यवाद दिन चाहन्छु।',
    },
  ],
  approvalNote: {
    en: 'Draft for chairperson review and approval before publication.',
    ne: 'प्रकाशनअघि अध्यक्षबाट समीक्षा र स्वीकृतिका लागि तयार गरिएको मस्यौदा।',
  },
};

export type Person = {
  name: LocalizedText;
  role: LocalizedText;
  workplace: LocalizedText;
  profile: LocalizedText;
  photoSrc?: string;
};

export const boardMembers: Person[] = [
  {
    name: { en: 'Susil Pant', ne: 'सुशील पन्त' },
    role: { en: 'Chairperson', ne: 'अध्यक्ष' },
    workplace: {
      en: 'Gorkha International Travels Pvt. Ltd.; Precious National College & Higher Secondary School',
      ne: 'गोर्खा इन्टरनेशनल ट्राभल्स प्रा. लि.; प्रेसियस नेशनल कलेज एण्ड हायर सेकेन्डरी स्कूल',
    },
    profile: {
      en: 'Managing Director and education-sector leader with experience in tourism enterprise and institutional leadership.',
      ne: 'पर्यटन उद्यम र संस्थागत नेतृत्वमा अनुभव भएका प्रबन्ध निर्देशक तथा शिक्षा क्षेत्रका नेतृत्वकर्ता।',
    },
    photoSrc: chairpersonPhoto,
  },
  {
    name: { en: 'Bheshraj Pokharel', ne: 'भेषराज पोखरेल' },
    role: { en: 'Director', ne: 'सञ्चालक' },
    workplace: {
      en: 'Pandey Trade Concern',
      ne: 'पाण्डे ट्रेड कन्सर्न',
    },
    profile: {
      en: 'Managing Director with business leadership experience.',
      ne: 'व्यवसाय नेतृत्व अनुभव भएका प्रबन्ध निर्देशक।',
    },
  },
  {
    name: { en: 'Arjun Pandey', ne: 'अर्जुन पाण्डे' },
    role: { en: 'Director', ne: 'सञ्चालक' },
    workplace: {
      en: 'The Atlas Exports',
      ne: 'द एटलस एक्सपोर्ट्स',
    },
    profile: {
      en: 'Manager with professional experience in export operations.',
      ne: 'निर्यात सञ्चालनमा पेशागत अनुभव भएका प्रबन्धक।',
    },
  },
  {
    name: { en: 'Hari Bahadur Shrestha', ne: 'हरि बहादुर श्रेष्ठ' },
    role: { en: 'Director', ne: 'सञ्चालक' },
    workplace: {
      en: 'Lumbini Air Freight Pvt. Ltd.',
      ne: 'लुम्बिनी एयर फ्रेट प्रा. लि.',
    },
    profile: {
      en: 'Managing Director with air freight and logistics-sector leadership experience.',
      ne: 'एयर फ्रेट तथा लजिस्टिक्स क्षेत्रमा नेतृत्व अनुभव भएका प्रबन्ध निर्देशक।',
    },
  },
  {
    name: { en: 'Dal Prasad Ghimire', ne: 'दल प्रसाद घिमिरे' },
    role: { en: 'Director', ne: 'सञ्चालक' },
    workplace: {
      en: 'Moonlight Freight Pvt. Ltd.',
      ne: 'मूनलाइट फ्रेट प्रा. लि.',
    },
    profile: {
      en: 'Managing Director with freight and business operations experience.',
      ne: 'फ्रेट तथा व्यवसाय सञ्चालनमा अनुभव भएका प्रबन्ध निर्देशक।',
    },
  },
  {
    name: { en: 'Rita Lamichhane', ne: 'रिता लामिछाने' },
    role: { en: 'Director', ne: 'सञ्चालक' },
    workplace: {
      en: 'Professional profile to be provided by TDSCC',
      ne: 'पेशागत विवरण टिडिएससिसीबाट उपलब्ध गराइने',
    },
    profile: {
      en: 'Professional biography to be provided and approved by TDSCC.',
      ne: 'पेशागत जीवनी टिडिएससिसीबाट उपलब्ध र स्वीकृत भएपछि थपिनेछ।',
    },
  },
  {
    name: { en: 'Ganesh Bhakta Magar', ne: 'गणेश भक्त मगर' },
    role: { en: 'Director & Company Secretary', ne: 'सञ्चालक तथा कम्पनी सचिव' },
    workplace: {
      en: 'Social Voyage Nepal; Himalaya Chyngpa Treks and Expedition Pvt. Ltd.',
      ne: 'सोसियल भोयेज नेपाल; हिमालय च्यङ्पा ट्रेक्स एण्ड एक्सपेडिसन प्रा. लि.',
    },
    profile: {
      en: 'Chairperson and Managing Director with tourism and social-organization leadership experience.',
      ne: 'पर्यटन तथा सामाजिक संस्थागत नेतृत्व अनुभव भएका अध्यक्ष तथा प्रबन्ध निर्देशक।',
    },
  },
];

export const managementMembers: Person[] = [
  {
    name: { en: 'Rabi Bohara', ne: 'रबी बोहरा' },
    role: { en: 'Manager', ne: 'प्रबन्धक' },
    workplace: {
      en: 'Tourism Development Saving & Credit Cooperative Limited',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
    },
    profile: {
      en: 'Leads day-to-day management and supports financial administration, organizational objectives and customer-focused operations.',
      ne: 'दैनिक व्यवस्थापन, वित्तीय प्रशासन, संस्थागत उद्देश्य र ग्राहकमुखी सञ्चालनमा नेतृत्वदायी भूमिका निर्वाह गर्नुहुन्छ।',
    },
  },
  {
    name: { en: 'Ambika Bhatta', ne: 'अम्बिका भट्ट' },
    role: { en: 'Accountant', ne: 'लेखापाल' },
    workplace: {
      en: 'Tourism Development Saving & Credit Cooperative Limited',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
    },
    profile: {
      en: 'Supports accounting and financial record-keeping functions.',
      ne: 'लेखा तथा वित्तीय अभिलेख व्यवस्थापनमा सहयोग गर्नुहुन्छ।',
    },
  },
  {
    name: { en: 'Prabin Jung Basnet', ne: 'प्रबिन जंग बस्नेत' },
    role: { en: 'Loan Assistant', ne: 'कर्जा सहायक' },
    workplace: {
      en: 'Tourism Development Saving & Credit Cooperative Limited',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
    },
    profile: {
      en: 'Supports lending and credit-related activities.',
      ne: 'कर्जा तथा ऋणसम्बन्धी गतिविधिमा सहयोग गर्नुहुन्छ।',
    },
  },
  {
    name: { en: 'Laxmi Neupane', ne: 'लक्ष्मी न्यौपाने' },
    role: { en: 'Receptionist', ne: 'रिसेप्सनिस्ट' },
    workplace: {
      en: 'Tourism Development Saving & Credit Cooperative Limited',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
    },
    profile: {
      en: 'Supports front-desk operations, customer communication and member assistance.',
      ne: 'फ्रन्ट डेस्क सञ्चालन, ग्राहक सञ्चार र सदस्य सहयोगमा भूमिका निर्वाह गर्नुहुन्छ।',
    },
  },
  {
    name: { en: 'Rasmila Wagle', ne: 'रस्मिला वाग्ले' },
    role: { en: 'Marketing Representative', ne: 'मार्केटिङ प्रतिनिधि' },
    workplace: {
      en: 'Tourism Development Saving & Credit Cooperative Limited',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
    },
    profile: {
      en: 'Supports marketing, customer outreach and promotional activities.',
      ne: 'मार्केटिङ, ग्राहक पहुँच र प्रवर्द्धनात्मक गतिविधिमा सहयोग गर्नुहुन्छ।',
    },
  },
  {
    name: { en: 'Bina Bhatta', ne: 'बिना भट्ट' },
    role: { en: 'Marketing Representative', ne: 'मार्केटिङ प्रतिनिधि' },
    workplace: {
      en: 'Tourism Development Saving & Credit Cooperative Limited',
      ne: 'टुरिजम डेभलपमेन्ट सेभिङ एण्ड क्रेडिट को-अपरेटिभ लिमिटेड',
    },
    profile: {
      en: 'Supports member and customer outreach for TDSCC financial services.',
      ne: 'टिडिएससिसीका वित्तीय सेवाका लागि सदस्य तथा ग्राहक पहुँचमा सहयोग गर्नुहुन्छ।',
    },
  },
];

export const serviceFocus = [
  { label: { en: 'Savings', ne: 'बचत' }, icon: Banknote },
  { label: { en: 'Credit', ne: 'कर्जा' }, icon: TrendingUp },
  { label: { en: 'Tourism businesses', ne: 'पर्यटन व्यवसाय' }, icon: Compass },
  { label: { en: 'Member service', ne: 'सदस्य सेवा' }, icon: CheckCircle2 },
];
