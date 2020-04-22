/**
 *
 */
export class Cell {
  northEdge: boolean = true;
  eastEdge: boolean = true;
  westEdge: boolean = true;
  southEdge: boolean = true;
  neighbors: Cell[] = [];

  /**
   * a flag used to indicate if the cell has been traversed or not when finding a maze path
   */
  traversed: boolean = false;

  /**
   * a flag used to indicate if the cell has been visited or not when hunt-and-kill
   */
  visited: boolean = false;

  /**
   * The number of Edges in this cell.
   * The nEdges counts all four edges. If an edge is false, then 0.
   */
  get nEdges(): number {
    return (
      (this.northEdge ? 1 : 0) +
      (this.southEdge ? 1 : 0) +
      (this.westEdge ? 1 : 0) +
      (this.eastEdge ? 1 : 0)
    );
  }

  /**
   * Create a cell in a maze.
   * @param row rowID of the cell in a maze. integer, row>=0
   * @param col colID of the cell in a maze. integer, col>=0
   */
  constructor(
    public readonly row: number = 0,
    public readonly col: number = 0
  ) {}

  connectTo(another: Cell) {
    if (this.row === another.row) {
      if (this.col - 1 === another.col) {
        this.westEdge = false;
        another.eastEdge = false;
      } else if (this.col + 1 === another.col) {
        this.eastEdge = false;
        another.westEdge = false;
      } else {
        return;
      }
    } else if (this.col === another.col) {
      if (this.row - 1 === another.row) {
        this.northEdge = false;
        another.southEdge = false;
      } else if (this.row + 1 === another.row) {
        this.southEdge = false;
        another.northEdge = false;
      } else {
        return;
      }
    } else {
      return;
    }
    this.visited = true;
    another.visited = true;
  }

  equals(another: Cell): boolean {
    return this.row === another.row && this.col === another.col;
  }

  isConnectedTo(another: Cell): boolean {
    if (this.row === another.row) {
      if (this.col - 1 === another.col) {
        if (this.westEdge === false && another.eastEdge === false) {
          return true;
        }
      }
      if (this.col + 1 === another.col) {
        if (this.eastEdge === false && another.westEdge === false) {
          return true;
        }
      }
    }
    if (this.col === another.col) {
      if (this.row - 1 === another.row) {
        if (this.northEdge === false && another.southEdge === false) {
          return true;
        }
      }
      if (this.row + 1 === another.row) {
        if (this.southEdge === false && another.northEdge === false) {
          return true;
        }
      }
    }
    return false;
  }
}
