const STORAGE_KEY = 'serdarmetal-lang';

function isLang(value: string | null): value is 'tr' | 'en' {
  return value === 'tr' || value === 'en';
}

export function initBrowserLanguageSync() {
  const url = new URL(window.location.href);
  const queryLang = url.searchParams.get('lang');
  const storedLang = window.localStorage.getItem(STORAGE_KEY);

  if (!isLang(queryLang) && storedLang === 'en') {
    url.searchParams.set('lang', 'en');
    window.location.replace(url.toString());
    return;
  }

  if (isLang(queryLang)) {
    window.localStorage.setItem(STORAGE_KEY, queryLang);
  }

  const switches = document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]');
  switches.forEach((switchLink) => {
    switchLink.addEventListener('click', () => {
      const nextLang = switchLink.dataset.langSwitch;
      if (isLang(nextLang)) {
        window.localStorage.setItem(STORAGE_KEY, nextLang);
      }
    });
  });
}
