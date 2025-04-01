import { Component, HostListener, OnInit } from '@angular/core';
import { EightPuzzleService } from './services/eight-puzzle.services';

@Component({
  selector: 'app-eight-puzzle',
  standalone: false,
  templateUrl: './eight-puzzle.component.html',
  styleUrls: ['./eight-puzzle.component.css'],
})
export class EightPuzzleComponent implements OnInit {
  tileSize = 0;
  letters: string[] = [];
  constructor(private svc: EightPuzzleService) {}

  ngOnInit(): void {
    this.tileSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
    this.letters = this.svc.randomize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.ngOnInit();
  }
}
