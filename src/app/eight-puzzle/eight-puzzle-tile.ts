import { Component, Input } from '@angular/core';
import { EightPuzzleService } from './eight-puzzle.service';

@Component({
  selector: 'app-eight-puzzle-tile',
  imports: [],
  template: `
    <div class="tile" [class.empty]="!letter.trim()">
      {{ letter }}
    </div>
  `,
  styles: `
  :host {
  display: flex;
  height: 100%;
  width: 100%;
}

.tile {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-family: sans-serif;
  font-weight: bold;
  user-select: none;
  color: #dad4ef;
  background: #456990;
  border: 1px solid #028090;
  cursor: pointer;
}

.empty {
  background: #dad4ef;
  border: 2px solid #114b5f;
}

  `,
  host: {
    '(click)': 'move($event)',
  },
})
export class EightPuzzleTile {
  @Input() id = 0;
  @Input() letter = '';

  constructor(private svc: EightPuzzleService) {}

  move(event: Event) {
    this.svc.move(this.id);

    if (this.svc.isWinning()) {
      setTimeout(() => {
        alert('Success');
      }, 500);
    }
  }
}
