function startAnimations() {
  window.setTimeout(() => {
    document.body.classList.add('runtime-ready');
  }, 1800);

  const hasServiceCards = document.querySelector('[data-service-card]');
  const hasScrollGroups = document.querySelector('[data-animate-group]');

  if (hasServiceCards) {
    void import('./animations/services').then(({ initServiceAnimations }) => {
      initServiceAnimations();
    });
  }

  if (!hasScrollGroups || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const loadScrollAnimations = () => {
    void import('./animations/scroll').then(({ initScrollAnimations }) => {
      initScrollAnimations();
    });
  };

  const scheduleScrollAnimations = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadScrollAnimations, { timeout: 4500 });
      return;
    }

    window.setTimeout(loadScrollAnimations, 2200);
  };

  if (document.readyState === 'complete') {
    scheduleScrollAnimations();
    return;
  }

  window.addEventListener('load', scheduleScrollAnimations, { once: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startAnimations, { once: true });
} else {
  startAnimations();
}
