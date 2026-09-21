import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.gsap-fade-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.gsap-scale-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        );
      });

      const staggerContainers = gsap.utils.toArray<HTMLElement>('[data-gsap-stagger]');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll<HTMLElement>('[data-gsap-item]');
        if (items.length === 0) return;
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: { trigger: container, start: 'top 80%', once: true },
          },
        );
      });

      const counters = gsap.utils.toArray<HTMLElement>('[data-counter]');
      counters.forEach((el) => {
        const target = Number(el.dataset.counter || '0');
        const suffix = el.dataset.suffix || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return rootRef;
}
