import { Particle } from './particle';

export class CandyText {
  private readonly ctx: CanvasRenderingContext2D;

  private readonly denseness = 10;
  private readonly textFont = '200px impact';
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })!;
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
  }

  getParticles(word: string): Particle[] {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = this.textFont;
    this.ctx.fillStyle = '#000000';
    const starting = this.canvasWidth / 2 - 50 * word.length;
    this.ctx.fillText(word, starting, 220);
    const imageData = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    // iterate over all pixels - leaving density gaps
    const particles: Particle[] = [];
    for (let py = 0; py < this.canvas.height; py += this.denseness) {
      for (let px = 0; px < this.canvas.width; px += this.denseness) {
        const pixel = imageData.data[(px + py * this.canvas.width) * 4 - 1];
        //Pixel is black from being drawn on.
        if (pixel == 255) {
          const p = new Particle(px, py);
          particles.push(p);
        }
      }
    }
    return particles;
  }
}
