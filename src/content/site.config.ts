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
          'https://www.google.com/maps/search/?api=1&query=41.211351412913%2C27.823096433572',
        mapEmbedUrl:
          'https://maps.google.com/maps?q=41.211351412913%2C27.823096433572&t=&z=17&ie=UTF8&iwloc=&output=embed'
      }
    ]
  },
  canonicalBase: 'https://serdarmetal.com/'
};

export type SiteConfig = typeof siteConfig;
export type SupportedLanguage = (typeof siteConfig.languages)[number];
