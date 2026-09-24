import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mousePos = useRef({ x: -300, y: -300 });
  const innerPos = useRef({ x: -300, y: -300 });
  const outerPos = useRef({ x: -300, y: -300 });
  const lightPos = useRef({ x: -300, y: -300 });

  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer-fine devices with hover support
    const isTouch = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest('button') ||
            target.closest('a') ||
            target.closest('nav') ||
            target.closest('article') ||
            target.closest('[data-cursor]') ||
            target.closest('.cursor-pointer') ||
            target.getAttribute('role') === 'button'
        );
        setIsHovered(interactive);
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth physics loop with liquid lag on outer ring and atmospheric lag on light
    const animate = () => {
      // 1. Inner cursor: fast, direct tracking (lerp factor 0.38)
      innerPos.current.x += (mousePos.current.x - innerPos.current.x) * 0.38;
      innerPos.current.y += (mousePos.current.y - innerPos.current.y) * 0.38;

      // 2. Outer glass circle: slight liquid movement delay (lerp factor 0.16)
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.16;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.16;

      // 3. Ambient reflected light: slow, soft atmospheric follower (lerp factor 0.075)
      lightPos.current.x += (mousePos.current.x - lightPos.current.x) * 0.075;
      lightPos.current.y += (mousePos.current.y - lightPos.current.y) * 0.075;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${innerPos.current.x}px, ${innerPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${lightPos.current.x}px, ${lightPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  return (
    <>
      {/* 1. Cursor Following Light: Burgundy/rose atmospheric light with soft blur (340px) */}
      <div
        ref={lightRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-20 w-[340px] sm:w-[360px] h-[340px] sm:h-[360px] rounded-full will-change-transform blur-[45px] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1.0 : 0.88,
          background:
            'radial-gradient(circle, rgba(214,106,137,0.20) 0%, rgba(165,42,82,0.16) 40%, rgba(110,23,53,0.09) 68%, transparent 78%)',
        }}
      />

      {/* 2. Outer Glass Circle: 46–50px translucent glass ring with smooth movement */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform"
      >
        <div
          className={`rounded-full backdrop-blur-[2px] transition-all duration-300 ease-out flex items-center justify-center ${
            isHovered
              ? 'w-[50px] h-[50px] bg-[rgba(165,42,82,0.16)] border border-[rgba(214,106,137,0.85)] shadow-[0_0_24px_rgba(214,106,137,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] scale-105'
              : 'w-[46px] h-[46px] bg-[rgba(165,42,82,0.08)] border border-[rgba(214,106,137,0.55)] shadow-[0_0_18px_rgba(165,42,82,0.30),inset_0_1px_0_rgba(255,255,255,0.10)]'
          }`}
        />
      </div>

      {/* 3. Inner Cursor: Small 8px Burgundy Dot Pointer */}
      <div
        ref={innerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform"
      >
        <div
          className={`rounded-full transition-transform duration-150 ${
            isHovered ? 'w-[9px] h-[9px] scale-110' : 'w-[8px] h-[8px]'
          } bg-[#A52A52] border border-[#D66A89] shadow-[0_0_10px_rgba(214,106,137,0.9)]`}
        />
      </div>
    </>
  );
};
