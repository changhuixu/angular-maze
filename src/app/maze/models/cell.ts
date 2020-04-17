/**
 *
 */
export class Cell {
  /**
   * if false: connect to a neighbor cell above itself.
   */
  public northEdge: boolean = true;

  /**
   * if false: connect to a neighbor cell right to itself.
   */
  public eastEdge: boolean = true;

  /**
   * if false: connect to a neighbor cell under itself.
   */
  public westEdge: boolean = true;

  /**
   * if false: connect to a neighbor cell left to itself.
   */
  public southEdge: boolean = true;

  /**
   * a flag used to indicate if the cell has been traversed or not when finding a maze path
   */
  public traversed: boolean = false;

  /**
   * a flag used to indicate if the cell has been visited or not when hunt-and-kill
   */
  public visited: boolean = false;

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

  draw(
    ctx: CanvasRenderingContext2D,
    length: number,
    cellBackground = '#FFFFFF'
  ) {
    ctx.fillStyle = cellBackground;
    ctx.fillRect(
      this.col * length,
      this.row * length,
      (this.col + 1) * length,
      (this.row + 1) * length
    );
    if (this.northEdge) {
      ctx.beginPath();
      ctx.moveTo(this.col * length, this.row * length);
      ctx.lineTo((this.col + 1) * length, this.row * length);
      ctx.stroke();
    }
    if (this.eastEdge) {
      ctx.beginPath();
      ctx.moveTo((this.col + 1) * length, this.row * length);
      ctx.lineTo((this.col + 1) * length, (this.row + 1) * length);
      ctx.stroke();
    }
    if (this.southEdge) {
      ctx.beginPath();
      ctx.moveTo((this.col + 1) * length, (this.row + 1) * length);
      ctx.lineTo(this.col * length, (this.row + 1) * length);
      ctx.stroke();
    }
    if (this.westEdge) {
      ctx.beginPath();
      ctx.moveTo(this.col * length, (this.row + 1) * length);
      ctx.lineTo(this.col * length, this.row * length);
      ctx.stroke();
    }
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
