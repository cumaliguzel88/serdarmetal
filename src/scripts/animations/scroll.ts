import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function isReducedMotionPreferred() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initScrollAnimations() {
  if (isReducedMotionPreferred()) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const groups = gsap.utils.toArray<HTMLElement>('[data-animate-group]');
  groups.forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-animate-item], [data-animate-title]');
    if (!items.length) {
      return;
    }

    gsap.from(items, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: group,
        start: 'top 80%'
      }
    });
  });
}
