import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EightPuzzleService {
  private readonly _letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
  private readonly _win = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
  private readonly n = this._letters.length;
  private readonly rows = Math.sqrt(this.n);
  constructor() {}

  getLetter(i: number) {
    return i < this.n ? this._letters[i] : '';
  }

  getCoordinate(i: number): [x: number, y: number] {
    const x = Math.floor(i / this.rows);
    const y = i - this.rows * x;
    return [x, y];
  }

  randomize(): string[] {
    let currentIndex = this.n;
    while (currentIndex != 0) {
      const i = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this._letters[currentIndex], this._letters[i]] = [
        this._letters[i],
        this._letters[currentIndex],
      ];
    }
    return this._letters;
  }
  canMove(i: number): boolean {
    const [x, y] = this.getCoordinate(i);
    if (x >= this.rows || y >= this.rows || !this._letters[i]?.trim()) {
      return false;
    }
    // down
    if (x < this.rows - 1 && !this._letters[(x + 1) * this.rows + y]?.trim()) {
      return true;
    }
    // up
    if (x > 0 && !this._letters[(x - 1) * this.rows + y]?.trim()) {
      return true;
    }
    // left
    if (y > 0 && !this._letters[x * this.rows + y - 1]?.trim()) {
      return true;
    } // right
    if (y < this.rows - 1 && !this._letters[x * this.rows + y + 1]?.trim()) {
      return true;
    }
    return false;
  }

  move(i: number) {
    if (this.isWinning()) {
      return;
    }

    const [x, y] = this.getCoordinate(i);

    // down
    if (x < this.rows - 1 && !this._letters[(x + 1) * this.rows + y]?.trim()) {
      [this._letters[i], this._letters[(x + 1) * this.rows + y]] = [
        this._letters[(x + 1) * this.rows + y],
        this._letters[i],
      ];
    }
    // up
    if (x > 0 && !this._letters[(x - 1) * this.rows + y]?.trim()) {
      [this._letters[i], this._letters[(x - 1) * this.rows + y]] = [
        this._letters[(x - 1) * this.rows + y],
        this._letters[i],
      ];
    }
    // left
    if (y > 0 && !this._letters[x * this.rows + y - 1]?.trim()) {
      [this._letters[i], this._letters[x * this.rows + y - 1]] = [
        this._letters[x * this.rows + y - 1],
        this._letters[i],
      ];
    }
    // right
    if (y < this.rows - 1 && !this._letters[x * this.rows + y + 1]?.trim()) {
      [this._letters[i], this._letters[x * this.rows + y + 1]] = [
        this._letters[x * this.rows + y + 1],
        this._letters[i],
      ];
    }
  }

  isWinning(): boolean {
    return this._letters.every((e, i) => e === this._win[i]);
  }
}
