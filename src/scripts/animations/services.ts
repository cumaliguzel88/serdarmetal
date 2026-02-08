type DetailPayload = {
  title: string;
  summary: string;
  detail: string[];
};

function parseDetailPayload(card: HTMLButtonElement): DetailPayload {
  const rawDetail = card.dataset.serviceDetail ?? '[]';
  let detail: string[] = [];

  try {
    const parsed = JSON.parse(rawDetail);
    if (Array.isArray(parsed)) {
      detail = parsed.filter((line): line is string => typeof line === 'string');
    }
  } catch {
    detail = [];
  }

  return {
    title: card.dataset.serviceTitle ?? '',
    summary: card.dataset.serviceSummary ?? '',
    detail
  };
}

function isReducedMotionPreferred() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function createParagraphs(lines: string[]) {
  return lines.map((line) => `<p class=\"text-sm leading-7 text-slate-700 sm:text-base\">${line}</p>`).join('');
}

function animateHeight(panel: HTMLElement, fromHeight: number, toHeight: number) {
  const animation = panel.animate(
    [{ height: `${fromHeight}px` }, { height: `${toHeight}px` }],
    { duration: 260, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
  );

  animation.onfinish = () => {
    panel.style.height = 'auto';
  };
}

function animateContent(content: HTMLElement) {
  content.animate(
    [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 220, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
  );
}

export function initServiceAnimations() {
  const cards = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-service-card]'));
  const panel = document.querySelector<HTMLElement>('[data-service-panel]');
  const title = document.querySelector<HTMLElement>('[data-service-detail-title]');
  const summary = document.querySelector<HTMLElement>('[data-service-detail-summary]');
  const content = document.querySelector<HTMLElement>('[data-service-detail-content]');

  if (!cards.length || !panel || !title || !summary || !content) {
    return;
  }

  const reducedMotion = isReducedMotionPreferred();

  const setActiveCard = (activeCard: HTMLButtonElement) => {
    cards.forEach((card) => {
      const isActive = card === activeCard;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-pressed', String(isActive));
    });
  };

  const renderPanel = (activeCard: HTMLButtonElement) => {
    const payload = parseDetailPayload(activeCard);
    const currentHeight = panel.offsetHeight;

    title.textContent = payload.title;
    summary.textContent = payload.summary;
    content.innerHTML = createParagraphs(payload.detail);

    if (reducedMotion) {
      panel.style.height = 'auto';
      return;
    }

    const targetHeight = panel.scrollHeight;
    animateHeight(panel, currentHeight, targetHeight);
    animateContent(content);
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      setActiveCard(card);
      renderPanel(card);
    });
  });
}
