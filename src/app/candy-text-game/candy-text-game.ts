import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CandyTextCanvas } from './candy-text-canvas/candy-text-canvas';

@Component({
  selector: 'app-candy-text-game',
  imports: [CandyTextCanvas, FormsModule],
  templateUrl: './candy-text-game.html',
  styleUrl: './candy-text-game.css',
})
export class CandyTextGame {
  name = 'Candy';
  @ViewChild(CandyTextCanvas, { static: true }) c!: CandyTextCanvas;
  draw() {
    this.c.draw(this.name);
  }
}
