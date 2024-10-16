import { Table } from '../Table';

describe('Table', () => {
  const table = new Table();

  test('Valid position within bounds', () => {
    expect(table.isPositionValid(2, 3)).toBe(true);
  });

  test('Position out of bounds (negative)', () => {
    expect(table.isPositionValid(-1, 2)).toBe(false);
  });

  test('Position out of bounds (exceeds boundary)', () => {
    expect(table.isPositionValid(5, 5)).toBe(false);
  });
});
