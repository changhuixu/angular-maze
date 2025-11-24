import { Component, OnInit } from '@angular/core';
import { EightPuzzleTile } from './eight-puzzle-tile';
import { EightPuzzleService } from './eight-puzzle.service';

@Component({
  selector: 'app-eight-puzzle',
  imports: [EightPuzzleTile],
  templateUrl: './eight-puzzle.html',
  styleUrl: './eight-puzzle.css',
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class EightPuzzle implements OnInit {
  tileSize = 0;
  letters: string[] = [];
  constructor(private svc: EightPuzzleService) {}

  ngOnInit(): void {
    this.tileSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
    this.letters = this.svc.randomize();
  }

  onResize(event: Event) {
    this.ngOnInit();
  }
}
