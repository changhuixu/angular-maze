import { Cell } from './cell';

/**
 * A 2-dimensional maze generated based on "hunt-and-kill" algorithm.
 */
export class Maze {
  public readonly cells: Array<Array<Cell>> = [];

  /**
   * Create a maze with <row> &times; <col> cells.
   * @param nRow number of rows
   * @param nCol number of columns
   */
  constructor(public nRow: number, public nCol: number) {
    // initialize cells
    for (let i = 0; i < nRow; i++) {
      this.cells[i] = [];
      for (let j = 0; j < nCol; j++) {
        this.cells[i][j] = new Cell(i, j);
      }
    }

    // generate maze
    const current = this.cells[RandomNumber.within(this.nRow)][
      RandomNumber.within(this.nCol)
    ];
    this.huntAndKill(current);
  }

  draw(canvas: HTMLCanvasElement, cellPixels: number, lineThickness = 2) {
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = lineThickness;
    this.cells.forEach(x =>
      x.forEach(c => {
        c.draw(ctx, cellPixels);
      })
    );
  }

  drawPath(canvas: HTMLCanvasElement, cellPixels: number, lineThickness = 4) {
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = lineThickness;
    ctx.strokeStyle = '#4080ff';
    ctx.beginPath();
    ctx.moveTo(0, cellPixels / 2);

    this.findPath().forEach(x =>
      ctx.lineTo((x.col + 0.5) * cellPixels, (x.row + 0.5) * cellPixels)
    );
    ctx.lineTo(this.nCol * cellPixels, (this.nRow - 0.5) * cellPixels);
    ctx.stroke();
  }

  findPath(): Array<Cell> {
    this.cells.forEach(x => x.forEach(c => (c.traversed = false)));
    const start = this.cells[0][0];
    const end = this.cells[this.nRow - 1][this.nCol - 1];
    const path: Array<Cell> = [];
    path.unshift(start);

    while (1) {
      let current = path[0];
      current.traversed = true;

      if (current.equals(end)) {
        break;
      }

      const traversableNeighbors = this.getNeighbors(current)
        .filter(c => c.hasConnectionWith(current))
        .filter(c => !c.traversed);
      if (traversableNeighbors.length === 0) {
        path.splice(0, 1);
      } else {
        path.unshift(traversableNeighbors[0]);
      }
    }
    return path.reverse();
  }

  private huntAndKill(current: Cell) {
    const unvisitedNeighbors = this.getNeighbors(current).filter(
      c => !c.hasVisited()
    );
    if (unvisitedNeighbors.length === 0) {
      // Hunt
      const randomRows = this.shufflearray([...Array(this.nRow).keys()]);
      for (let huntRow of randomRows) {
        const randomColumns = this.shufflearray([...Array(this.nCol).keys()]);
        for (let huntColumn of randomColumns) {
          current = this.cells[huntRow][huntColumn];
          if (current.hasVisited()) {
            continue;
          }
          const visitedNeighbors = this.getNeighbors(current).filter(c =>
            c.hasVisited()
          );
          if (visitedNeighbors.length < 1) {
            continue;
          }
          const nextCell =
            visitedNeighbors[RandomNumber.within(visitedNeighbors.length)];
          current.breakWallWith(nextCell);
          this.huntAndKill(nextCell);
        }
      }
    } else {
      // Kill
      const nextCell =
        unvisitedNeighbors[RandomNumber.within(unvisitedNeighbors.length)];
      current.breakWallWith(nextCell);
      this.huntAndKill(nextCell);
    }
  }

  private getNeighbors(cell: Cell): Array<Cell> {
    const neighbors = [];
    if (cell.row - 1 >= 0) {
      neighbors.push(this.cells[cell.row - 1][cell.col]);
    }
    if (cell.row + 1 < this.nRow) {
      neighbors.push(this.cells[cell.row + 1][cell.col]);
    }
    if (cell.col - 1 >= 0) {
      neighbors.push(this.cells[cell.row][cell.col - 1]);
    }
    if (cell.col + 1 < this.nCol) {
      neighbors.push(this.cells[cell.row][cell.col + 1]);
    }
    return neighbors;
  }

  //The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
  //See https://github.com/coolaj86/knuth-shuffle
  private shufflearray(array: number[]): number[] {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}

class RandomNumber {
  static within(n: number): number {
    return Math.floor(Math.random() * n);
  }
}
