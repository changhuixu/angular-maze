import { Component, HostListener, Input, OnInit } from '@angular/core';
import { EightPuzzleService } from '../services/eight-puzzle.services';

@Component({
  selector: 'app-eight-puzzle-tile',
  templateUrl: './eight-puzzle-tile.component.html',
  styleUrls: ['./eight-puzzle-tile.component.css'],
})
export class EightPuzzleTileComponent implements OnInit {
  @Input() id = 0;
  @Input() letter = '';

  constructor(private svc: EightPuzzleService) {}

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  move() {
    this.svc.move(this.id);

    if (this.svc.isWinning()) {
      alert('Success');
    }
  }
}
