import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();

    window.addEventListener('resize', resize);

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    }

    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (
          p.x < 0 ||
          p.x > canvas.width
        )
          p.dx *= -1;

        if (
          p.y < 0 ||
          p.y > canvas.height
        )
          p.dy *= -1;

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          'rgba(99,102,241,0.25)';

        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () =>
      window.removeEventListener(
        'resize',
        resize
      );
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
      "
    />
  );
}