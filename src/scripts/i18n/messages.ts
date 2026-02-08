import tr from '../../content/i18n/tr.json';

export type Language = 'tr';

type Dictionary = typeof tr;

export const dictionaries: Record<Language, Dictionary> = {
  tr
};
