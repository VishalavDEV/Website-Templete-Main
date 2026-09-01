/**
 * Procedural High-Aesthetic Visual Engine
 * Renders an art-directed 3D fluid & typography geometry world in warm ivory, coral, and lavender
 * perfectly mapped to the scroll progress (0 -> 1).
 */
export class ProceduralVisualEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;
  private dpr: number = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) throw new Error('Canvas 2D context not supported');
    this.ctx = context;
    this.resize();
  }

  public resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  public render(progress: number, time: number) {
    const { ctx, width, height } = this;
    ctx.clearRect(0, 0, width, height);

    // Dynamic color shifts across story progression:
    // 0.0 - 0.2: Abstract Space (Ivory & Coral aura)
    // 0.2 - 0.4: Material & Architecture (Lavender glass monoliths)
    // 0.4 - 0.6: Creative Process & Kinetics (Dynamic orbiting rings & grids)
    // 0.6 - 0.8: Digital Interface & Topology (Harmonic wave mesh)
    // 0.8 - 1.0: Brand World & Final Harmony (Luminous sphere & cosmic dust)

    const centerX = width * 0.5 + Math.sin(time * 0.0005 + progress * 2) * (width * 0.04);
    const centerY = height * 0.45 + Math.cos(time * 0.0007 + progress * 2) * (height * 0.04);

    // 1. Soft atmospheric background gradient
    const bgGrad = ctx.createRadialGradient(
      centerX,
      centerY,
      width * 0.1,
      centerX,
      centerY,
      Math.max(width, height) * 0.85
    );

    // Warm ivory / coral / lavender palette
    const coralAlpha = 0.07 + Math.sin(progress * Math.PI) * 0.06;
    const lavenderAlpha = 0.09 + Math.cos(progress * Math.PI) * 0.06;

    bgGrad.addColorStop(0, `rgba(232, 111, 81, ${coralAlpha})`);
    bgGrad.addColorStop(0.45, `rgba(200, 182, 255, ${lavenderAlpha})`);
    bgGrad.addColorStop(0.8, 'rgba(241, 216, 207, 0.04)');
    bgGrad.addColorStop(1, 'rgba(247, 244, 238, 0)');

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Editorial Architectural Grid Lines (subtle ink)
    ctx.save();
    ctx.strokeStyle = 'rgba(24, 24, 24, 0.035)';
    ctx.lineWidth = 1;
    const gridSpacing = Math.max(60, Math.floor(width / 18));
    const offsetGrid = (progress * 120) % gridSpacing;

    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = offsetGrid; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();

    // 3. 3D Floating Geometry & Kinetic Monoliths
    const angle = progress * Math.PI * 2 + time * 0.0003;
    const numRings = 5;
    const baseRadius = Math.min(width, height) * (0.22 + progress * 0.12);

    ctx.save();
    ctx.translate(centerX, centerY);

    for (let i = 0; i < numRings; i++) {
      const ringOffset = (i / numRings) * Math.PI;
      const rx = baseRadius * (0.6 + i * 0.22);
      const ry = rx * (0.35 + Math.sin(progress * Math.PI + ringOffset) * 0.2);

      ctx.save();
      ctx.rotate(angle * (i % 2 === 0 ? 1 : -0.7) + ringOffset * 0.5);

      // Gradient stroke
      const strokeGrad = ctx.createLinearGradient(-rx, -ry, rx, ry);
      strokeGrad.addColorStop(0, `rgba(232, 111, 81, ${0.18 - i * 0.025})`);
      strokeGrad.addColorStop(0.5, `rgba(200, 182, 255, ${0.25 - i * 0.03})`);
      strokeGrad.addColorStop(1, `rgba(24, 24, 24, ${0.06 - i * 0.01})`);

      ctx.strokeStyle = strokeGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Satellite orbital dots
      const satAngle = time * 0.001 * (i + 1) + progress * 4;
      const satX = Math.cos(satAngle) * rx;
      const satY = Math.sin(satAngle) * ry;

      ctx.fillStyle = i % 2 === 0 ? '#E86F51' : '#C8B6FF';
      ctx.beginPath();
      ctx.arc(satX, satY, 2.5 + (i % 2), 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // 4. Central Frosted Spherical Core
    const coreGrad = ctx.createRadialGradient(
      -baseRadius * 0.15,
      -baseRadius * 0.15,
      10,
      0,
      0,
      baseRadius * 0.55
    );
    coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    coreGrad.addColorStop(0.5, 'rgba(241, 216, 207, 0.25)');
    coreGrad.addColorStop(0.85, 'rgba(200, 182, 255, 0.12)');
    coreGrad.addColorStop(1, 'rgba(232, 111, 81, 0)');

    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(0, 0, baseRadius * 0.55, 0, Math.PI * 2);
    ctx.fill();

    // Subtle core boundary
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();

    // 5. Kinetic Waveform across Bottom
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(232, 111, 81, 0.09)';
    ctx.lineWidth = 1.5;

    const waveY = height * 0.78;
    for (let x = 0; x <= width; x += 15) {
      const y =
        waveY +
        Math.sin(x * 0.005 + time * 0.0008 + progress * 4) * 25 +
        Math.cos(x * 0.012 + progress * 2) * 15;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
  }
}
