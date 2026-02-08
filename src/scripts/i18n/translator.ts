import { siteConfig } from '../../content/site.config';
import { dictionaries, type Language } from './messages';

function getByPath(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((accumulator, segment) => {
    if (accumulator && typeof accumulator === 'object' && segment in accumulator) {
      return (accumulator as Record<string, unknown>)[segment];
    }
    return undefined;
  }, source);
}

export function isLanguage(value: string | null): value is Language {
  return value === 'tr';
}

export function resolveLanguageFromUrl(url: URL): Language {
  const queryLanguage = url.searchParams.get('lang');
  if (isLanguage(queryLanguage)) {
    return queryLanguage;
  }
  return siteConfig.defaultLang;
}

export function createTranslator(language: Language) {
  return function t<T = string>(key: string): T {
    const localizedValue = getByPath(dictionaries[language], key);
    if (localizedValue !== undefined) {
      return localizedValue as T;
    }

    const fallbackValue = getByPath(dictionaries.tr, key);
    if (fallbackValue !== undefined) {
      return fallbackValue as T;
    }

    throw new Error(`Missing i18n key: ${key}`);
  };
}
