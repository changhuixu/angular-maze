import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CandyText } from './models/candy-text';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit, AfterViewInit {
  private canvas: HTMLCanvasElement;
  name = 'Candy';
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.canvas = <HTMLCanvasElement>document.getElementById('candy-text');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.draw();
  }

  draw() {
    const candy = new CandyText(this.canvas);
    candy.draw(this.name);
  }
}
