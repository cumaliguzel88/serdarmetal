const STORAGE_KEY = 'serdarmetal-lang';

function isLang(value: string | null): value is 'tr' | 'en' {
  return value === 'tr' || value === 'en';
}

export function initBrowserLanguageSync() {
  const storedLang = window.localStorage.getItem(STORAGE_KEY);
  const path = window.location.pathname;
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  const isEnPath = normalizedPath.includes('/en/');

  if (!isEnPath && storedLang === 'en') {
    window.location.replace(new URL('en/', window.location.href).toString());
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, isEnPath ? 'en' : 'tr');

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
