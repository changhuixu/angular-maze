import { Component, OnInit, ViewChild } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {
  name = 'Candy';
  @ViewChild(CanvasComponent) c: CanvasComponent;
  constructor() {}

  ngOnInit(): void {}

  draw() {
    this.c.draw(this.name);
  }
}
