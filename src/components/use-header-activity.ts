"use client";

import { useEffect, useRef, useState } from 'react';

export function useHeaderActivity(idleMs: number = 3200) {
  const [isVisible, setIsVisible] = useState(true);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const resetIdleTimer = () => {
      setIsVisible(true);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, idleMs);
    };

    const events: Array<keyof WindowEventMap> = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'touchmove',
      'scroll',
      'wheel',
      'pointerdown'
    ];

    resetIdleTimer();

    events.forEach((eventName) => {
      window.addEventListener(eventName, resetIdleTimer, { passive: true });
    });

    return () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, resetIdleTimer);
      });

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [idleMs]);

  return isVisible;
}
