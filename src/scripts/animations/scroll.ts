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

    gsap.set(items, { opacity: 0, y: 36 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: group,
        start: 'top 88%',
        once: true
      }
    });
  });
}
