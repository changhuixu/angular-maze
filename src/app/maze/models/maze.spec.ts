import { Maze } from './maze';
import { Cell } from './cell';

describe('Maze', () => {
  it('should create a maze that all cells are visited', () => {
    const row = 40,
      col = 45;
    const m = new Maze(row, col);
    const visitedCells: Array<Cell> = [];
    m.cells.forEach(x =>
      x.forEach(c => {
        if (c.hasVisited()) {
          visitedCells.push(c);
        }
      })
    );
    expect(visitedCells.length).toBe(row * col);
  });

  it('should find a path in a maze', () => {
    const m = new Maze(3, 3);
    const path = m.findPath();
    expect(path[0].equals(m.cells[0][0])).toBeTruthy();
    expect(path[path.length - 1].equals(m.cells[2][2])).toBeTruthy();
    expect(path.length).toBeLessThan(9);
    expect(path.length).toBeGreaterThanOrEqual(5);
  });
});
