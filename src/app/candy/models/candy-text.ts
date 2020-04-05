import { Particle } from './particle';
import { Position } from './position';

export class CandyText {
  private readonly ctx: CanvasRenderingContext2D;
  private raf: number;
  private continueAnimating = true;
  private mousePosition = new Position(-100, -100);
  private particles: Particle[] = [];
  private readonly denseness = 10;
  private readonly textFont = '200px impact';
  private readonly textBackgroundColor = '#333';
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.canvas.addEventListener('mousemove', e => {
      this.calculateMouseRelativePositionInCanvas(e);
    });
    this.canvas.addEventListener('mouseenter', () => {
      this.raf = window.requestAnimationFrame(() => this.animate());
      this.continueAnimating = true;
    });
    this.canvas.addEventListener('mouseout', () => {
      window.cancelAnimationFrame(this.raf);
      this.continueAnimating = false; // stop animation when mouse out.
    });
  }

  draw(word: string = 'Candy') {
    this.ctx.font = this.textFont;
    this.ctx.fillStyle = '#000000';
    const starting = this.canvasWidth / 2 - 50 * word.length;
    if (starting) this.ctx.fillText(word, starting, 220);
    const imageData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.drawBackground();

    // iterate over all pixels - leaving density gaps
    for (let py = 0; py < this.canvas.height; py += this.denseness) {
      for (let px = 0; px < this.canvas.width; px += this.denseness) {
        const pixel = imageData.data[(px + py * this.canvas.width) * 4 - 1];
        //Pixel is black from being drawn on.
        if (pixel == 255) {
          const p = new Particle(px, py);
          this.particles.push(p);
        }
      }
    }
  }

  private drawBackground() {
    this.ctx.fillStyle = this.textBackgroundColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }

  private animate() {
    if (!this.particles.length || !this.continueAnimating) {
      return; // return when nothing needs to animate
    }

    this.drawBackground();
    // clean particles are not in canvas to reduce computation
    this.particles = this.particles.filter(p =>
      p.isInCanvas(this.canvas.width, this.canvas.height)
    );
    this.particles.forEach(p => {
      p.flyAwayWhenMouseOver(this.mousePosition);
      p.draw(this.ctx);
    });

    window.requestAnimationFrame(() => this.animate());
  }

  private calculateMouseRelativePositionInCanvas(e: MouseEvent) {
    // Note: I have handled scroll effect
    this.mousePosition.x =
      e.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft) -
      this.canvas.offsetLeft;
    this.mousePosition.y =
      e.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop) -
      this.canvas.offsetTop;
  }
}
