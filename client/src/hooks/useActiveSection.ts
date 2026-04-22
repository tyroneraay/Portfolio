import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibility = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(id, entry.intersectionRatio);
          });
          let bestId = ids[0];
          let bestRatio = 0;
          for (const [key, ratio] of visibility) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = key;
            }
          }
          if (bestRatio > 0) setActive(bestId);
        },
        { threshold: [0.2, 0.4, 0.6], rootMargin: '-80px 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join(',')]);

  return active;
}
