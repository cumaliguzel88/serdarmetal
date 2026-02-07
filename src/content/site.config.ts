export const siteConfig = {
  defaultLang: 'tr',
  languages: ['tr', 'en'] as const,
  contact: {
    phone: '+90 (539) 811 89 10',
    phoneHref: 'tel:+905398118910',
    whatsapp: '+90 (539) 811 89 10',
    whatsappPhone: '905398118910',
    addressLines: ['İstanbul/Hadımköy', 'Velimeşe Yulaflı OSB Tekirdağ/Ergene'],
    email: 'info@serdarmetal.com',
    hours: 'Hafta içi 08:30 - 18:00'
  },
  canonicalBase: 'https://cumaliguzel88.github.io/serdarmetal/'
};

export type SiteConfig = typeof siteConfig;
export type SupportedLanguage = (typeof siteConfig.languages)[number];
