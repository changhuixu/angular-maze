import { Cell } from './cell';

/**
 * A rectangle maze generated based on "hunt-and-kill" algorithm.
 */
export class Maze {
  public readonly cells: Cell[][] = [];
  private readonly randomRowNumbers: number[];
  private readonly randomColNumbers: number[];

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
    this.randomRowNumbers = Utils.shuffleArray([...Array(this.nRow).keys()]);
    this.randomColNumbers = Utils.shuffleArray([...Array(this.nCol).keys()]);
    this.huntAndKill(this.randomCell); // hunt-and-kill starting with a random Cell
  }

  get firstCell(): Cell {
    return this.cells[0][0];
  }

  get lastCell(): Cell {
    return this.cells[this.nRow - 1][this.nCol - 1];
  }

  get randomCell(): Cell {
    return this.cells[Utils.random(this.nRow)][Utils.random(this.nCol)];
  }

  /**
   * traverse the maze using depth-first algorithm
   */
  findPath(): Cell[] {
    this.cells.forEach(x => x.forEach(c => (c.traversed = false)));
    const path: Cell[] = [];
    path.unshift(this.firstCell);

    while (1) {
      let current = path[0];
      current.traversed = true;

      if (current.equals(this.lastCell)) {
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
            visitedNeighbors[Utils.random(visitedNeighbors.length)];
          current.connectTo(nextCell);
          this.huntAndKill(nextCell);
        }
      }
    } else {
      // Kill
      const nextCell =
        unvisitedNeighbors[Utils.random(unvisitedNeighbors.length)];
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
    while (currentIndex !== 0) {
      const temp = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[temp]] = [array[temp], array[currentIndex]];
    }
    return array;
  }

  /**
   * Generate a random index within a number `n`
   */
  static random(n: number): number {
    return Math.floor(Math.random() * n);
  }
}
