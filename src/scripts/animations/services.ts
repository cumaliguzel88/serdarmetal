import { gsap } from 'gsap';

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
      card.classList.toggle('ring-2', isActive);
      card.classList.toggle('ring-[var(--color-accent)]', isActive);
      card.classList.toggle('border-[var(--color-accent)]', isActive);
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
    gsap.fromTo(
      panel,
      { height: currentHeight },
      { height: targetHeight, duration: 0.28, ease: 'power2.out', onComplete: () => (panel.style.height = 'auto') }
    );

    gsap.fromTo(content, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.24, ease: 'power2.out' });
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      setActiveCard(card);
      renderPanel(card);
    });
  });

  const hasFinePointer = window.matchMedia('(pointer:fine)').matches;
  if (hasFinePointer && !reducedMotion) {
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -4, boxShadow: '0 18px 40px rgba(148, 163, 184, 0.25)', duration: 0.2, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: '0 8px 20px rgba(148, 163, 184, 0.14)', duration: 0.2, ease: 'power2.out' });
      });
    });
  }
}
