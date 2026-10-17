/**
 * Ethereal snowfall and sparkling stars canvas animation.
 * Optimized for 60fps performance and mobile battery efficiency.
 */

export class SnowfallEffect {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animationFrameId = null;
    this.isRunning = false;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Check prefers-reduced-motion
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.createParticles();
    this.start();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticles() {
    // Fewer particles on mobile for performance; even fewer if reduced motion
    const isMobile = this.width < 768;
    const count = this.reducedMotion ? 15 : isMobile ? 35 : 75;

    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.5 + 0.8,
        density: Math.random() * 1,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.6 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        isStar: Math.random() > 0.65
      });
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Twinkle calculation
      p.twinklePhase += p.twinkleSpeed;
      const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.twinklePhase));

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1, currentOpacity));

      if (p.isStar) {
        // Draw 4-point magical star
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = '#CDEBFA';

        const size = p.radius * 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y - size);
        this.ctx.quadraticCurveTo(p.x, p.y, p.x + size, p.y);
        this.ctx.quadraticCurveTo(p.x, p.y, p.x, p.y + size);
        this.ctx.quadraticCurveTo(p.x, p.y, p.x - size, p.y);
        this.ctx.quadraticCurveTo(p.x, p.y, p.x, p.y - size);
        this.ctx.fill();
      } else {
        // Soft glowing snowflake
        const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 1.8);
        gradient.addColorStop(0, '#FFFFFF');
        gradient.addColorStop(0.5, 'rgba(230, 221, 248, 0.8)');
        gradient.addColorStop(1, 'rgba(205, 235, 250, 0)');

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();

      // Motion update
      if (!this.reducedMotion) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.twinklePhase) * 0.2;

        if (p.y > this.height + 10) {
          p.y = -10;
          p.x = Math.random() * this.width;
        }
        if (p.x > this.width + 10) {
          p.x = -10;
        } else if (p.x < -10) {
          p.x = this.width + 10;
        }
      }
    }

    if (this.isRunning) {
      this.animationFrameId = requestAnimationFrame(() => this.draw());
    }
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.draw();
    }
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
