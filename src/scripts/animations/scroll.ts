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

    if (group.getBoundingClientRect().top < window.innerHeight * 0.75) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: group,
        start: 'top 90%',
        once: true
      }
    });
  });
}
