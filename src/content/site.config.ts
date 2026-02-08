export const siteConfig = {
  defaultLang: 'tr',
  languages: ['tr'] as const,
  contact: {
    phone: '+90 (539) 811 89 10',
    phoneHref: 'tel:+905398118910',
    whatsapp: '+90 (539) 811 89 10',
    whatsappPhone: '905398118910',
    email: 'info@serdarmetal.com',
    hours: 'Cumartesi 08:30 - 18:00',
    locations: [
      {
        id: 'tekirdag-ergene',
        label: 'Velimeşe Yulaflı OSB Tekirdağ/Ergene',
        address: 'Velimeşe Yulaflı OSB Tekirdağ/Ergene',
        mapOpenUrl:
          'https://www.google.com/maps/search/?api=1&query=Velime%C5%9Fe+Yulafl%C4%B1+OSB+Tekirda%C4%9F%2FErgene',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=Velime%C5%9Fe%20Yulafl%C4%B1%20OSB%20Tekirda%C4%9F%2FErgene&t=&z=13&ie=UTF8&iwloc=&output=embed'
      }
    ]
  },
  canonicalBase: 'https://cumaliguzel88.github.io/serdarmetal/'
};

export type SiteConfig = typeof siteConfig;
export type SupportedLanguage = (typeof siteConfig.languages)[number];
