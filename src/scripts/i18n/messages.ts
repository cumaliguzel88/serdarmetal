import en from '../../content/i18n/en.json';
import tr from '../../content/i18n/tr.json';

export type Language = 'tr' | 'en';

type Dictionary = typeof tr;

export const dictionaries: Record<Language, Dictionary> = {
  tr,
  en: en as Dictionary
};
