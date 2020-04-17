import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';
import { Position, Particle, CandyText } from '../models';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements OnInit, AfterViewInit {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private candy: CandyText;
  private particles: Particle[] = [];
  private mousePosition = new Position(-100, -100);
  private raf: number;
  private continueAnimating = true;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.canvas = <HTMLCanvasElement>document.getElementById('candy-text');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.candy = new CandyText(this.canvas);
    this.draw('Candy');
  }

  draw(name: string) {
    this.particles.length = 0;
    this.particles = this.candy.getParticles(name);
    this.drawBackground();
    this.particles.forEach(p => {
      p.draw(this.ctx);
    });
  }

  @HostListener('mousemove', ['$event'])
  calculateMouseRelativePositionInCanvas(e: MouseEvent) {
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

  @HostListener('mouseenter', ['$event'])
  startAnimation(e: MouseEvent) {
    this.raf = window.requestAnimationFrame(() => this.animate());
    this.continueAnimating = true;
  }

  // @HostListener('mouseout', ['$event'])
  // stopAnimation(e: MouseEvent) {
  //   window.cancelAnimationFrame(this.raf);
  //   this.continueAnimating = false; // stop animation when mouse out.
  // }

  animate() {
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

  private drawBackground(bgColor = '#333') {
    this.ctx.fillStyle = bgColor;
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
  }
}
