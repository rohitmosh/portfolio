import React, { useEffect, useRef } from 'react';

interface Point {
  ox: number; // original X
  oy: number; // original Y
  x: number;  // current X
  y: number;  // current Y
  vx: number; // velocity X
  vy: number; // velocity Y
}

const MagneticGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Configuration Constants
  const spacing = 27;          // Spacing between grid dots
  const influenceRadius = 220; // 3-row influence radius (~120px)
  const maxDisplacement = 14;  // Subtler displacement (14px) to prevent clumping
  const springK = 0.05;        // Spring stiffness coefficient for satisfying elastic return
  const damping = 0.82;        // Motion damping
  const baseDotSize = 2;       // Base dot diameter
  const activeDotSize = 3;   // Spotlight dot diameter

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Track touch coordinates for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Set canvas dimensions and populate grid points
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Re-populate coordinates
      const points: Point[] = [];
      const cols = Math.ceil(window.innerWidth / spacing) + 1;
      const rows = Math.ceil(window.innerHeight / spacing) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * spacing;
          const y = r * spacing;
          points.push({
            ox: x,
            oy: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
          });
        }
      }
      pointsRef.current = points;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial setup

    // Animation loop
    const tick = () => {
      const mouse = mouseRef.current;
      const points = pointsRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 1. Physics Calculations
        let targetX = p.ox;
        let targetY = p.oy;
        let distOrigin = 0;
        let proximityRatio = 0;

        if (mouse.active) {
          const dx = mouse.x - p.ox;
          const dy = mouse.y - p.oy;
          distOrigin = Math.sqrt(dx * dx + dy * dy);

          // Within magnetic field influence
          if (distOrigin < influenceRadius) {
            proximityRatio = 1 - distOrigin / influenceRadius; // 1 at cursor, 0 at boundary
            const pullStrength = proximityRatio * proximityRatio * maxDisplacement; // Quadratic displacement

            // Unit vector towards mouse
            const angle = Math.atan2(dy, dx);
            targetX = p.ox + Math.cos(angle) * pullStrength;
            targetY = p.oy + Math.sin(angle) * pullStrength;
          }
        }

        // Spring force towards target (original location + displacement offset)
        const springForceX = (targetX - p.x) * springK;
        const springForceY = (targetY - p.y) * springK;

        // Physics update loop
        p.vx = (p.vx + springForceX) * damping;
        p.vy = (p.vy + springForceY) * damping;

        p.x += p.vx;
        p.y += p.vy;

        // 2. Rendering Customizations
        // Calculate spotlight size & opacity based on current distance
        let dotSize = baseDotSize;
        let opacity = 0.15; // High visibility base opacity

        if (mouse.active) {
          const currentDx = mouse.x - p.x;
          const currentDy = mouse.y - p.y;
          const currentDist = Math.sqrt(currentDx * currentDx + currentDy * currentDy);

          if (currentDist < influenceRadius) {
            const r = 1 - currentDist / influenceRadius;
            dotSize = baseDotSize + (activeDotSize - baseDotSize) * r;
            opacity = 0.15 + (0.35 - 0.15) * r; // Highlight up to 35% opacity
          }
        }

        // Draw grid circle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 244, 245, ${opacity})`; // zinc-100 equivalent with opacity
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    // Cleanup listeners and callbacks
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none block"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default MagneticGrid;
