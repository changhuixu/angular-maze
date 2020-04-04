import { Component, OnInit } from '@angular/core';
import { CandyText } from './models/candy-text';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const canvas5 = <HTMLCanvasElement>document.getElementById('candy-text');
    const candy = new CandyText(canvas5);
    candy.draw();
  }
}
