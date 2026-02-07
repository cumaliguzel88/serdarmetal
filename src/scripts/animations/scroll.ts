import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function isReducedMotionPreferred() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealWithoutMotion() {
  const items = document.querySelectorAll<HTMLElement>('[data-animate-item], [data-animate-title]');
  items.forEach((item) => {
    item.style.opacity = '1';
    item.style.transform = 'none';
    item.style.filter = 'none';
  });
}

export function initScrollAnimations() {
  if (isReducedMotionPreferred()) {
    revealWithoutMotion();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const groups = gsap.utils.toArray<HTMLElement>('[data-animate-group]');
  groups.forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-animate-item], [data-animate-title]');
    if (!items.length) {
      return;
    }

    gsap.set(items, { opacity: 0, y: 48, filter: 'blur(6px)' });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.95,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: group,
        start: 'top 92%',
        once: true
      }
    });
  });

  ScrollTrigger.refresh();
}
