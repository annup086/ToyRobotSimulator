# Toy Robot Simulator

This is a command-line application built in TypeScript that simulates a toy robot moving on a tabletop grid of 5x5 units. The robot can be placed, moved, and rotated in response to various commands while being prevented from falling off the edges of the table.

## Project Overview

The Toy Robot Simulator allows users to:
- Place a robot on a 5x5 tabletop.
- Move the robot in the direction it is facing.
- Rotate the robot 90 degrees left or right.
- Report the robot's current position and direction.

This project demonstrates fundamental programming concepts in TypeScript, including command-line interface (CLI) interaction, command parsing, and boundary validation.

## Installation and Setup

### Prerequisites
- **Node.js** (latest version recommended)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd ToyRobotProject

2. **Install Dependencies:**
    npm install

3. **Run the Application**
    npm run dev

4. **Run Tests: Run automated tests to verify the robot’s functionality:**
    npx jest

## Usage Instructions
After starting the program, you can enter the following commands:

- PLACE X,Y,F: Places the robot on the table at coordinates (X,Y), facing the specified direction F.

Example: PLACE 0,0,NORTH
Valid directions for F are NORTH, EAST, SOUTH, or WEST.
- MOVE: Moves the robot one unit forward in its current direction.

- LEFT: Rotates the robot 90 degrees counterclockwise.

- RIGHT: Rotates the robot 90 degrees clockwise.

- REPORT: Outputs the robot’s current position and direction.

## Example Command Sequences
Here are some examples to demonstrate how the commands work:

- Example A:

PLACE 0,0,NORTH<br>
MOVE<br>
REPORT<br>
Expected Output: 0,1,NORTH<br>

- Example B:

PLACE 0,0,NORTH<br>
LEFT<br>
REPORT<br>
Expected Output: 0,0,WEST<br>

- Example C:

PLACE 1,2,EAST<br>
MOVE<br>
MOVE<br>
LEFT<br>
MOVE<br>
REPORT<br>
Expected Output: 3,3,NORTH<br>

## Assumptions and Constraints
- The first command must be PLACE. Any other commands issued before PLACE are ignored.
- The robot will ignore MOVE commands that would cause it to fall off the table.
- Invalid commands (e.g., malformed PLACE inputs or unknown commands) are safely ignored, and the simulation continues without interruption.

## Project Structure

ToyRobotProject/
├── src/
│   ├── Table.ts         # Handles table boundaries
│   ├── Robot.ts         # Contains robot movement and commands
│   └── index.ts         # CLI interface and command parsing
├── __tests__/           # Automated tests for robot behavior and table boundaries
├── README.md            # Project documentation
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└──jest.config.js        # test configuration


## Technologies Used
- TypeScript: Provides type safety and structured code.
- Node.js: Executes the command-line application.
- Jest: Facilitates automated testing to verify command functionality and edge cases.

## Testing
- The project includes unit tests to verify that:

1. The robot follows boundaries and does not move outside the 5x5 table.
2. Commands like LEFT and RIGHT rotate the robot correctly.
3. Invalid commands or commands issued before PLACE are handled gracefully.

- Run the tests using:
 npx jest
