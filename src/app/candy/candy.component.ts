import { Component, OnInit, ViewChild } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-candy',
  standalone: false,
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css'],
})
export class CandyComponent implements OnInit {
  name = 'Candy';
  @ViewChild(CanvasComponent, { static: true }) c!: CanvasComponent;
  constructor() {}

  ngOnInit(): void {}

  draw() {
    this.c.draw(this.name);
  }
}
