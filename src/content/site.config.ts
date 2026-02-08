export const siteConfig = {
  defaultLang: 'tr',
  languages: ['tr'] as const,
  contact: {
    phone: '+90 (539) 811 89 10',
    phoneHref: 'tel:+905398118910',
    whatsapp: '+90 (539) 811 89 10',
    whatsappPhone: '905398118910',
    email: 'info@serdarmetal.com',
    hours: 'Pazartesi - Cumartesi 08:30 - 18:00 (Pazar kapalı)',
    locations: [
      {
        id: 'tekirdag-ergene',
        label: 'Yulaflı Mahallesi Hasan Tahsin Cad. 70/1 Ergene Tekirdağ',
        address: 'Yulaflı Mahallesi Hasan Tahsin Cad. 70/1 Ergene Tekirdağ',
        mapOpenUrl:
          'https://www.google.com/maps/search/?api=1&query=Yulafl%C4%B1+Mahallesi+Hasan+Tahsin+Cad.+70%2F1+Ergene+Tekirda%C4%9F',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=Yulafl%C4%B1%20Mahallesi%20Hasan%20Tahsin%20Cad.%2070%2F1%20Ergene%20Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed'
      }
    ]
  },
  canonicalBase: 'https://cumaliguzel88.github.io/serdarmetal/'
};

export type SiteConfig = typeof siteConfig;
export type SupportedLanguage = (typeof siteConfig.languages)[number];
