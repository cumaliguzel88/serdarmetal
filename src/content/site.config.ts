export const siteConfig = {
  defaultLang: 'tr',
  languages: ['tr', 'en'] as const,
  contact: {
    phone: '+90 (539) 811 89 10',
    phoneHref: 'tel:+905398118910',
    whatsapp: '+90 (539) 811 89 10',
    whatsappPhone: '905398118910',
    email: 'info@serdarmetal.com',
    hours: 'Hafta içi 08:30 - 18:00',
    locations: [
      {
        id: 'istanbul',
        label: 'Istanbul / Hadimkoy',
        address: 'Istanbul/Hadimkoy',
        mapOpenUrl:
          'https://www.google.com/maps/search/?api=1&query=Istanbul+Hadimkoy',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=Istanbul%20Hadimkoy&t=&z=13&ie=UTF8&iwloc=&output=embed'
      },
      {
        id: 'tekirdag',
        label: 'Velimese Yulafli OSB',
        address: 'Velimese Yulafli OSB Tekirdag/Ergene',
        mapOpenUrl:
          'https://www.google.com/maps/search/?api=1&query=Velimese+Yulafli+OSB+Tekirdag+Ergene',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=Velimese%20Yulafli%20OSB%20Tekirdag%20Ergene&t=&z=13&ie=UTF8&iwloc=&output=embed'
      }
    ]
  },
  canonicalBase: 'https://cumaliguzel88.github.io/serdarmetal/'
};

export type SiteConfig = typeof siteConfig;
export type SupportedLanguage = (typeof siteConfig.languages)[number];
