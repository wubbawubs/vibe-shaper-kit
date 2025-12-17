import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "candidate" | "vacancy";
  targetX?: number;
  targetY?: number;
  matched: boolean;
  opacity: number;
  pulsePhase: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  progress: number;
  opacity: number;
}

export function HiringFlowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const rect = canvas.getBoundingClientRect();

      // Candidates (left side, flowing in)
      for (let i = 0; i < 12; i++) {
        particles.push({
          x: -50 - Math.random() * 100,
          y: Math.random() * rect.height,
          vx: 0.8 + Math.random() * 0.5,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 4 + Math.random() * 3,
          type: "candidate",
          matched: false,
          opacity: 0.7 + Math.random() * 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Vacancies (right side, stationary targets)
      for (let i = 0; i < 6; i++) {
        particles.push({
          x: rect.width * 0.7 + Math.random() * (rect.width * 0.2),
          y: 60 + (i * (rect.height - 120)) / 5,
          vx: 0,
          vy: 0,
          radius: 8 + Math.random() * 4,
          type: "vacancy",
          matched: false,
          opacity: 0.9,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      return particles;
    };

    particlesRef.current = initParticles();

    // Colors
    const candidateColor = "168, 42%, 35%"; // Primary teal
    const vacancyColor = "38, 75%, 55%"; // Accent gold
    const matchColor = "168, 55%, 50%"; // Success

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const time = Date.now() * 0.001;

      // Update and draw connections
      connectionsRef.current = connectionsRef.current.filter((conn) => {
        conn.progress += 0.02;
        conn.opacity = Math.sin(conn.progress * Math.PI) * 0.6;

        if (conn.progress < 1) {
          const x1 = conn.from.x;
          const y1 = conn.from.y;
          const x2 = conn.to.x;
          const y2 = conn.to.y;

          // Draw flowing line
          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, `hsla(${candidateColor}, 0)`);
          gradient.addColorStop(conn.progress * 0.5, `hsla(${matchColor}, ${conn.opacity})`);
          gradient.addColorStop(conn.progress, `hsla(${vacancyColor}, ${conn.opacity})`);
          gradient.addColorStop(1, `hsla(${vacancyColor}, 0)`);

          ctx.beginPath();
          ctx.moveTo(x1, y1);

          // Bezier curve for smooth connection
          const cpX = (x1 + x2) / 2;
          const cpY1 = y1;
          const cpY2 = y2;
          ctx.bezierCurveTo(cpX, cpY1, cpX, cpY2, x2, y2);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw moving dot along the path
          const t = conn.progress;
          const dotX = Math.pow(1 - t, 3) * x1 + 3 * Math.pow(1 - t, 2) * t * cpX + 3 * (1 - t) * t * t * cpX + Math.pow(t, 3) * x2;
          const dotY = Math.pow(1 - t, 3) * y1 + 3 * Math.pow(1 - t, 2) * t * cpY1 + 3 * (1 - t) * t * t * cpY2 + Math.pow(t, 3) * y2;

          ctx.beginPath();
          ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${matchColor}, ${conn.opacity + 0.3})`;
          ctx.fill();

          return true;
        }
        return false;
      });

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulsePhase += 0.05;

        const pulse = Math.sin(particle.pulsePhase) * 0.2 + 1;

        if (particle.type === "candidate") {
          // Reset candidates that go off screen
          if (particle.x > rect.width + 50) {
            particle.x = -50 - Math.random() * 100;
            particle.y = Math.random() * rect.height;
            particle.matched = false;
          }

          // Check for matching with vacancies
          if (!particle.matched && Math.random() < 0.003) {
            const vacancies = particlesRef.current.filter((p) => p.type === "vacancy");
            const targetVacancy = vacancies[Math.floor(Math.random() * vacancies.length)];
            if (targetVacancy) {
              connectionsRef.current.push({
                from: particle,
                to: targetVacancy,
                progress: 0,
                opacity: 0,
              });
              particle.matched = true;
            }
          }

          // Draw candidate particle
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * pulse * 2
          );
          gradient.addColorStop(0, `hsla(${candidateColor}, ${particle.opacity})`);
          gradient.addColorStop(0.5, `hsla(${candidateColor}, ${particle.opacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${candidateColor}, 0)`);

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * pulse * 2, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * pulse * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${candidateColor}, ${particle.opacity})`;
          ctx.fill();
        } else {
          // Vacancy - pulsing target
          const vacancyPulse = Math.sin(time * 2 + index) * 0.15 + 1;

          // Outer glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * vacancyPulse * 3
          );
          gradient.addColorStop(0, `hsla(${vacancyColor}, 0.3)`);
          gradient.addColorStop(0.5, `hsla(${vacancyColor}, 0.1)`);
          gradient.addColorStop(1, `hsla(${vacancyColor}, 0)`);

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * vacancyPulse * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Ring
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * vacancyPulse * 1.5, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${vacancyColor}, 0.4)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Core
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * vacancyPulse * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${vacancyColor}, ${particle.opacity})`;
          ctx.fill();
        }
      });

      // Draw quality indicator - subtle grid lines
      ctx.strokeStyle = "hsla(200, 10%, 50%, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 0; i < rect.height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(rect.width, i);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}
