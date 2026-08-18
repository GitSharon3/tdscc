import { Globe, ArrowDownToLine, ArrowUpDown, Building2, CheckCircle2, Shield, Heart, Users, Lock, HeartHandshake } from 'lucide-react';

export type Language = 'en' | 'ne';

export interface BilingualText {
  en: string;
  ne: string;
}

export const text = (language: Language, text: BilingualText): string => text[language];

export const whyChooseUsIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  convenient: Heart,
  reliable: Shield,
  accessible: Globe,
  customerFocused: Users,
  secure: Lock,
};

export const remittanceContent = {
  header: {
    eyebrow: {
      en: 'Remittance Service',
      ne: 'रेमिट्यान्स सेवा',
    },
    title: {
      en: 'Safe, Reliable and Convenient Money Transfer Services',
      ne: 'सुरक्षित, विश्वसनीय र सुविधाजनक मुद्रा हस्तान्तरण सेवाहरू',
    },
    description: {
      en: 'Remittance services play an important role in Nepal, as a large number of Nepalese citizens live and work abroad and regularly send money to their families and loved ones in Nepal. At TDSCC, we are committed to providing convenient, reliable, and customer-focused remittance services.',
      ne: 'रेमिट्यान्स सेवाहरू नेपालमा महत्त्वपूर्ण भूमिका खेल्छन्, किनकि ठूलो संख्यामा नेपाली नागरिकहरू विदेशमा बसोबास गर्छन् र नियमित रूपमा नेपालमा आफन्त परिवार र प्रियजनहरूलाई पैसा पठाउँछन्। TDSCC मा, हामी सुविधाजनक, विश्वसनीय, र ग्राहक-केन्द्रित रेमिट्यान्स सेवाहरू प्रदान गर्न प्रतिबद्ध छौं।',
    },
  },
  introduction: {
    title: {
      en: 'About Our Remittance Services',
      ne: 'हाम्रो रेमिट्यान्स सेवाको बारेमा',
    },
    description: {
      en: 'Whether you need to receive money from abroad, send money within Nepal, or deposit remitted funds directly into a bank account, TDSCC provides remittance solutions to meet your needs.',
      ne: 'चाहे तपाईंलाई विदेशबाट पैसा प्राप्त गर्नुपर्ने होस्, नेपाल भित्र पैसा पठाउनुपर्ने होस्, वा रेमिटेड कोष सिधै बैंक खातामा जम्मा गर्नुपर्ने होस्, TDSCC ले तपाईंको आवश्यकता पूरा गर्न रेमिट्यान्स समाधानहरू प्रदान गर्दछ।',
    },
  },
  partners: {
    title: {
      en: 'Our Remittance Partners',
      ne: 'हाम्रा रेमिट्यान्स साझेदारहरू',
    },
    description: {
      en: 'TDSCC provides remittance services through the following established remittance partners. Through our remittance network, customers can access convenient money transfer facilities while benefiting from the support and services provided by our authorized remittance partners and correspondents.',
      ne: 'TDSCC ले निम्न स्थापित रेमिट्यान्स साझेदारहरू मार्फत रेमिट्यान्स सेवाहरू प्रदान गर्दछ। हाम्रो रेमिट्यान्स सञ्जाल मार्फत, ग्राहकहरूले सुविधाजनक मुद्रा हस्तान्तरण सुविधाहरूमा पहुँच प्राप्त गर्न सक्छन् साथै हाम्रा अधिकृत रेमिट्यान्स साझेदार र प्रतिनिधिहरूद्वारा प्रदान गरिएको समर्थन र सेवाहरूबाट लाभ उठाउन सक्छन्।',
    },
  },
  facilities: {
    title: {
      en: 'Our Remittance Services & Facilities',
      ne: 'हाम्रो रेमिट्यान्स सेवा र सुविधाहरू',
    },
    description: {
      en: 'Comprehensive remittance solutions for your international and domestic money transfer needs.',
      ne: 'तपाईंको अन्तर्राष्ट्रिय र घरेलू मुद्रा हस्तान्तरणको लागि व्यापक रेमिट्यान्स समाधानहरू।',
    },
  },
  services: {
    foreignInward: {
      title: {
        en: 'Foreign Inward Remittance',
        ne: 'विदेशी आगत रेमिट्यान्स',
      },
      description: {
        en: 'Our Foreign Inward Remittance service enables Nepalese working and residing abroad to send money to their families, beneficiaries, or their own accounts in Nepal through established remittance channels.',
        ne: 'हाम्रो विदेशी आगत रेमिट्यान्स सेवाले विदेशमा काम गर्ने र बसोबास गर्ने नेपालीहरूलाई स्थापित रेमिट्यान्स च्यानलहरू मार्फत नेपालमा आफन्त परिवार, लाभग्राही, वा आफ्नै खातामा पैसा पठाउन सक्षम बनाउँछ।',
      },
    },
    domestic: {
      title: {
        en: 'Domestic Remittance',
        ne: 'घरेलू रेमिट्यान्स',
      },
      description: {
        en: 'Our Domestic Remittance service allows customers to transfer and receive money from different locations within Nepal.',
        ne: 'हाम्रो घरेलू रेमिट्यान्स सेवाले ग्राहकहरूलाई नेपाल भित्रको विभिन्न स्थानहरूबाट पैसा स्थानान्तरण गर्न र प्राप्त गर्न अनुमति दिन्छ।',
      },
    },
    directDeposit: {
      title: {
        en: 'Direct Account Deposit',
        ne: 'सिधै खाता जम्मा',
      },
      description: {
        en: 'Customers can deposit remitted funds directly into a bank account through available remittance channels.',
        ne: 'ग्राहकहरूले उपलब्ध रेमिट्यान्स च्यानलहरू मार्फत रेमिटेड कोष सिधै बैंक खातामा जम्मा गर्न सक्छन्।',
      },
    },
    inwardOutward: {
      title: {
        en: 'Inward and Outward Domestic Remittance',
        ne: 'आगत र निर्गत घरेलू रेमिट्यान्स',
      },
      description: {
        en: 'TDSCC facilitates both inward and outward domestic remittance services through our available remittance channels.',
        ne: 'TDSCC ले हाम्रा उपलब्ध रेमिट्यान्स च्यानलहरू मार्फत आगत र निर्गत दुवै घरेलू रेमिट्यान्स सेवाहरूलाई सुविधाजनक बनाउँछ।',
      },
    },
  },

  keyFeatures: {
    title: {
      en: 'Key Features of Our Remittance Service',
      ne: 'हाम्रो रेमिट्यान्स सेवाका मुख्य विशेषताहरू',
    },
    features: [
      {
        en: 'Foreign inward remittance facility',
        ne: 'विदेशी आगत रेमिट्यान्स सुविधा',
      },
      {
        en: 'Inward domestic remittance',
        ne: 'आगत घरेलू रेमिट्यान्स',
      },
      {
        en: 'Outward domestic remittance',
        ne: 'निर्गत घरेलू रेमिट्यान्स',
      },
      {
        en: 'Direct account deposit facility',
        ne: 'सिधै खाता जम्मा सुविधा',
      },
      {
        en: 'Convenient money transfer and receiving facilities',
        ne: 'सुविधाजनक मुद्रा हस्तान्तरण र प्राप्त गर्ने सुविधाहरू',
      },
      {
        en: 'Services through established remittance partners and correspondents',
        ne: 'स्थापित रेमिट्यान्स साझेदार र प्रतिनिधिहरू मार्फत सेवाहरू',
      },
      {
        en: 'Accessible and customer-focused service',
        ne: 'पहुँचयोग्य र ग्राहक-केन्द्रित सेवा',
      },
      {
        en: 'Reliable and secure transaction process',
        ne: 'विश्वसनीय र सुरक्षित कारोबार प्रक्रिया',
      },
      {
        en: 'Convenient access to remittance services for customers across different locations',
        ne: 'विभिन्न स्थानहरूका ग्राहकहरूका लागि रेमिट्यान्स सेवाहरूमा सुविधाजनक पहुँच',
      },
    ],
  },
  whyChooseUs: {
    title: {
      en: 'Why Choose TDSCC for Remittance Services?',
      ne: 'रेमिट्यान्स सेवाका लागि TDSCC किन रोज्नुहुन्छ?',
    },
    items: [
      {
        icon: 'convenient',
        title: {
          en: 'Convenient',
          ne: 'सुविधाजनक',
        },
        description: {
          en: 'We aim to make sending and receiving money as convenient as possible for our customers.',
          ne: 'हामी हाम्रा ग्राहकहरूका लागि पैसा पठाउन र प्राप्त गर्न जति सम्भव सुविधाजनक बनाउने लक्ष्य राख्छौं।',
        },
      },
      {
        icon: 'reliable',
        title: {
          en: 'Reliable',
          ne: 'विश्वसनीय',
        },
        description: {
          en: 'We provide remittance services through established partners and correspondents to facilitate dependable money transfer services.',
          ne: 'हामी निर्भरयोग्य मुद्रा हस्तान्तरण सेवाहरूलाई सुविधाजनक बनाउन स्थापित साझेदार र प्रतिनिधिहरू मार्फत रेमिट्यान्स सेवाहरू प्रदान गर्छौं।',
        },
      },
      {
        icon: 'accessible',
        title: {
          en: 'Accessible',
          ne: 'पहुँचयोग्य',
        },
        description: {
          en: 'Our remittance facilities help customers access money transfer services even when conventional banking facilities may not be readily available in their location.',
          ne: 'हाम्रो रेमिट्यान्स सुविधाहरूले ग्राहकहरूलाई उनीहरूको स्थानमा परम्परागत बैंकिङ सुविधाहरू सजिलै उपलब्ध नहुन सक्ने बेलामा पनि मुद्रा हस्तान्तरण सेवाहरूमा पहुँच गर्न मद्दत गर्छ।',
        },
      },
      {
        icon: 'customerFocused',
        title: {
          en: 'Customer Focused',
          ne: 'ग्राहक-केन्द्रित',
        },
        description: {
          en: 'We are committed to providing responsive and supportive services to meet the remittance needs of our valued customers.',
          ne: 'हामी हाम्रा मूल्यवान ग्राहकहरूको रेमिट्यान्स आवश्यकताहरू पूरा गर्न प्रतिक्रियाशील र सहयोगी सेवाहरू प्रदान गर्न प्रतिबद्ध छौं।',
        },
      },
      {
        icon: 'secure',
        title: {
          en: 'Secure',
          ne: 'सुरक्षित',
        },
        description: {
          en: 'Transactions are processed through established remittance channels and in accordance with applicable procedures and regulatory requirements.',
          ne: 'कारोबारहरू स्थापित रेमिट्यान्स च्यानलहरू मार्फत प्रक्रिया गरिन्छ र लागू हुने प्रक्रियाहरू र नियामक आवश्यकताहरू अनुसार हुन्छ।',
        },
      },
    ],
  },
  forNepaleseAbroad: {
    title: {
      en: 'Remittance for Nepalese Working Abroad',
      ne: 'विदेशमा काम गर्ने नेपालीहरूका लागि रेमिट्यान्स',
    },
    description: {
      en: 'For Nepalese citizens working and living abroad, remittance is an important means of supporting families and managing finances back home. TDSCC provides convenient remittance facilities to help customers send money to Nepal through established remittance channels. Where available, customers may also use direct account deposit facilities to transfer remitted funds into their own or their beneficiaries\' bank accounts, subject to applicable requirements.',
      ne: 'विदेशमा काम गर्ने र बसोबास गर्ने नेपाली नागरिकहरूका लागि, रेमिट्यान्स परिवारलाई समर्थन गर्न र घरको वित्त व्यवस्थापन गर्ने एक महत्त्वपूर्ण साधन हो। TDSCC ले ग्राहकहरूलाई स्थापित रेमिट्यान्स च्यानलहरू मार्फत नेपालमा पैसा पठाउन मद्दत गर्न सुविधाजनक रेमिट्यान्स सुविधाहरू प्रदान गर्दछ। जहाँ उपलब्ध छ, ग्राहकहरूले लागू आवश्यकताहरूको अधीनमा आफ्नै वा आफ्ना लाभग्राहीहरूको बैंक खातामा रेमिटेड कोष स्थानान्तरण गर्न सिधै खाता जम्मा सुविधाहरू पनि प्रयोग गर्न सक्छन्।',
    },
  },
  commitment: {
    title: {
      en: 'Our Commitment',
      ne: 'हाम्रो प्रतिबद्धता',
    },
    description: {
      en: 'At TDSCC, we understand the importance of every remittance transaction. Money sent by a customer may be essential for family expenses, education, healthcare, savings, and other financial needs. We therefore remain committed to providing reliable, convenient, secure, and customer-oriented remittance services through our established remittance network.',
      ne: 'TDSCC मा, हामी प्रत्येक रेमिट्यान्स कारोबारको महत्त्व बुझ्छौं। ग्राहकद्वारा पठाइएको पैसा परिवारको खर्च, शिक्षा, स्वास्थ्य सेवा, बचत, र अन्य वित्तीय आवश्यकताहरूका लागि आवश्यक हुन सक्छ। यसैले हामी हाम्रो स्थापित रेमिट्यान्स सञ्जाल मार्फत विश्वसनीय, सुविधाजनक, सुरक्षित, र ग्राहक-उन्मुख रेमिट्यान्स सेवाहरू प्रदान गर्न प्रतिबद्ध छौं।',
    },
    closing: {
      en: 'Whether you are sending money from abroad or transferring funds within Nepal, TDSCC is committed to helping you access convenient remittance solutions. TDSCC — Connecting you and your loved ones through reliable remittance services.',
      ne: 'चाहे तपाईं विदेशबाट पैसा पठाउनुहुन्छ वा नेपाल भित्र कोष स्थानान्तरण गर्नुहुन्छ, TDSCC ले तपाईंलाई सुविधाजनक रेमिट्यान्स समाधानहरूमा पहुँच गर्न मद्दत गर्न प्रतिबद्ध छ। TDSCC — विश्वसनीय रेमिट्यान्स सेवाहरू मार्फत तपाईं र तपाईंका प्रियजनहरूलाई जोड्दै।',
    },
  },
};

export const iconMap: Record<string, any> = {
  ArrowDownToLine,
  ArrowUpDown,
  Building2,
};

export const remittanceFacilities = [
  {
    id: 'foreign-inward',
    title: remittanceContent.services.foreignInward.title,
    description: remittanceContent.services.foreignInward.description,
    iconName: 'ArrowDownToLine',
  },
  {
    id: 'domestic-remittance',
    title: remittanceContent.services.domestic.title,
    description: remittanceContent.services.domestic.description,
    iconName: 'ArrowUpDown',
  },
  {
    id: 'direct-deposit',
    title: remittanceContent.services.directDeposit.title,
    description: remittanceContent.services.directDeposit.description,
    iconName: 'Building2',
  },
  {
    id: 'inward-outward',
    title: remittanceContent.services.inwardOutward.title,
    description: remittanceContent.services.inwardOutward.description,
    iconName: 'ArrowUpDown',
  },
];



export const remittancePartners = [
  {
    id: 'ime',
    name: {
      en: 'International Money Express (IME)',
      ne: 'इन्टरनेशनल मनी एक्सप्रेस (IME)',
    },
    type: {
      en: 'Domestic & International',
      ne: 'घरेलू र अन्तर्राष्ट्रिय',
    },
    logo: 'IME',
    icon: Globe,
  },
  {
    id: 'western-union',
    name: {
      en: 'Western Union',
      ne: 'वेस्टर्न युनियन',
    },
    type: {
      en: 'Global Money Transfer',
      ne: 'विश्वव्यापी मुद्रा हस्तान्तरण',
    },
    logo: 'WU',
    icon: Globe,
  },
];


