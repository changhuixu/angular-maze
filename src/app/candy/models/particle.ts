import { Position } from './position';

export class Particle {
  public readonly color: string;
  private flying = false;
  public vx = 0;
  public vy = 0;

  constructor(public x: number, public y: number, public readonly radius = 4) {
    this.color = '#' + ((Math.random() * 0x949494 + 0xaaaaaa) | 0).toString(16);
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.flying) {
      this.x += this.vx;
      this.y += this.vy;
    }
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  flyAwayWhenMouseOver(mousePosition: Position, mouseAffectRange = 20) {
    const dx = this.x - mousePosition.x;
    const dy = this.y - mousePosition.y;
    const isInRange = dx * dx + dy * dy < mouseAffectRange * mouseAffectRange;
    if (isInRange && !this.flying) {
      this.flying = true;
      this.vx = (Math.random() - 0.5) * mouseAffectRange * 2;
      this.vy = (Math.random() - 0.5) * mouseAffectRange * 2;
    }
  }

  isInCanvas(canvasWidth: number, canvasHeight: number) {
    return !(
      this.x < -this.radius ||
      this.y < -this.radius ||
      this.x > canvasWidth + this.radius ||
      this.y > canvasHeight + this.radius
    );
  }
}
