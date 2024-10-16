import { Table } from '../Table';
import { Robot, Direction } from '../Robot';

describe('Robot', () => {
  let table: Table;
  let robot: Robot;

  beforeEach(() => {
    table = new Table();
    robot = new Robot(table);
  });

  test('PLACE command positions robot correctly', () => {
    robot.place(0, 0, Direction.NORTH);
    expect(robot.report()).toBe('Robot is at 0,0 facing NORTH');
  });

  test('MOVE command moves robot in the current direction', () => {
    robot.place(1, 1, Direction.NORTH);
    robot.move();
    expect(robot.report()).toBe('Robot is at 1,2 facing NORTH');
  });

  test('LEFT command rotates robot counterclockwise', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.left();
    expect(robot.report()).toBe('Robot is at 0,0 facing WEST');
  });

  test('RIGHT command rotates robot clockwise', () => {
    robot.place(0, 0, Direction.NORTH);
    robot.right();
    expect(robot.report()).toBe('Robot is at 0,0 facing EAST');
  });

  test('Prevent MOVE if robot would fall off the table', () => {
    robot.place(0, 0, Direction.WEST);
    robot.move();
    expect(robot.report()).toBe('Robot is at 0,0 facing WEST');
  });

  test('Unknown initial state if PLACE was not the first command', () => {
    robot.move();
    expect(robot.report()).toBe('The robot has not been placed on the table.');
  });
});
