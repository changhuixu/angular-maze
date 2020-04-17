import { Cell } from './cell';

/**
 * A 2-dimensional maze generated based on "hunt-and-kill" algorithm.
 */
export class Maze {
  public readonly cells: Array<Array<Cell>> = [];
  private readonly cellBackground = '#FFFFFF';
  private readonly randomRowNumbers: number[];
  private readonly randomColNumbers: number[];

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
    const current = this.cells[Utils.randomIndex(this.nRow)][
      Utils.randomIndex(this.nCol)
    ];
    this.randomRowNumbers = Utils.shuffleArray([...Array(this.nRow).keys()]);
    this.randomColNumbers = Utils.shuffleArray([...Array(this.nCol).keys()]);
    this.huntAndKill(current);
  }

  draw(lineThickness = 2) {
    // open the beginning and ending cells
    const start = this.cells[0][0];
    const end = this.cells[this.nRow - 1][this.nCol - 1];
    start.westEdge = false;
    end.eastEdge = false;

    // draw the cells
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
        .filter(c => c.isConnectedTo(current))
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
      c => !c.visited
    );
    if (unvisitedNeighbors.length === 0) {
      // Hunt
      for (let huntRow of this.randomRowNumbers) {
        for (let huntColumn of this.randomColNumbers) {
          current = this.cells[huntRow][huntColumn];
          if (current.visited) {
            continue;
          }
          const visitedNeighbors = this.getNeighbors(current).filter(
            c => c.visited
          );
          if (visitedNeighbors.length < 1) {
            continue;
          }
          const nextCell =
            visitedNeighbors[Utils.randomIndex(visitedNeighbors.length)];
          current.connectTo(nextCell);
          this.huntAndKill(nextCell);
        }
      }
    } else {
      // Kill
      const nextCell =
        unvisitedNeighbors[Utils.randomIndex(unvisitedNeighbors.length)];
      current.connectTo(nextCell);
      this.huntAndKill(nextCell);
    }
  }

  private getNeighbors(cell: Cell): Cell[] {
    const neighbors: Cell[] = [];
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
}

class Utils {
  /**
   * The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
   */
  static shuffleArray(array: number[]): number[] {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      const temp = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[temp]] = [array[temp], array[currentIndex]];
    }
    return array;
  }

  /**
   * Generate a random index within a number `n`
   */
  static randomIndex(n: number): number {
    return Math.floor(Math.random() * n);
  }
}
