import { Cell } from './cell';

/**
 * A 2-dimensional maze generated based on "hunt-and-kill" algorithm.
 */
export class Maze {
  public readonly cells: Array<Array<Cell>> = [];
  private readonly cellBackground = '#FFFFFF';

  /**
   * Create a maze with <row> &times; <col> cells.
   * @param nRow number of rows
   * @param nCol number of columns
   */
  constructor(
    public nRow: number,
    public nCol: number,
    public cellSize: number,
    public ctx: CanvasRenderingContext2D
  ) {
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

  draw(lineThickness = 2) {
    this.ctx.lineWidth = lineThickness;
    this.cells.forEach(x =>
      x.forEach(c => {
        c.draw(this.ctx, this.cellSize, this.cellBackground);
      })
    );
  }

  drawPath(
    path: Cell[],
    color = '#4080ff',
    lineThickness = 10,
    drawSolution = false
  ) {
    this.ctx.lineWidth = lineThickness;
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.cellSize / 2);

    path.forEach(x =>
      this.ctx.lineTo(
        (x.col + 0.5) * this.cellSize,
        (x.row + 0.5) * this.cellSize
      )
    );
    if (drawSolution) {
      this.ctx.lineTo(
        this.nCol * this.cellSize,
        (this.nRow - 0.5) * this.cellSize
      );
    }
    this.ctx.stroke();
  }

  erasePath(path: Cell[]) {
    this.drawPath(path, this.cellBackground);
  }

  drawSolution(color = '#ff7575', lineThickness = 10) {
    this.drawPath(this.findPath(), color, lineThickness, true);
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
    let currentIndex = array.length,
      temporaryValue = 0,
      randomIndex = 0;

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
