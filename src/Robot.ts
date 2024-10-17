import { Table } from './Table';

// Enum representing the four cardinal directions that the robot can face.
// Used to control the orientation of the robot and determine movement directions.
export enum Direction {
    NORTH = "NORTH",
    EAST = "EAST",
    SOUTH = "SOUTH",
    WEST = "WEST"
}

export class Robot {
    private x: number | null = null;
    private y: number | null = null;
    private direction: Direction | null = null;
    private readonly table: Table;
    private hasBeenPlaced: boolean = false; //  flag to see if PLACE is the first command

    constructor(table: Table) {
        this.table = table;
    }

    //place command
    place(x: number, y: number, direction: Direction): void {
        if (this.table.isPositionValid(x, y)) {
            this.x = x;
            this.y = y;
            this.direction = direction;
            this.hasBeenPlaced = true; // Set to true once placed
            console.log(`Placed at ${x},${y}, facing ${direction}`);
        } else {
            console.log("Invalid PLACE command: position out of bounds.");
        }
    }

    //move command
    move(): void {
        if (!this.hasBeenPlaced) {
            console.log("The robot has not been placed on the table.");
            return;
        }

        if (this.x !== null && this.y !== null && this.direction !== null) {
            let newX = this.x;
            let newY = this.y;

            switch (this.direction) {
                case Direction.NORTH: newY++; break;
                case Direction.EAST: newX++; break;
                case Direction.SOUTH: newY--; break;
                case Direction.WEST: newX--; break;
            }

            if (this.table.isPositionValid(newX, newY)) {
                this.x = newX;
                this.y = newY;
                console.log("Success: Moved forward one unit.");
            } else {
                console.log("Move ignored: Robot would fall off the table.");
            }
        }
    }

    //left command
    left(): void {
        if (!this.hasBeenPlaced) {
            console.log("The robot has not been placed on the table.");
            return;
        }

        if (this.direction !== null) {
            switch (this.direction) {
                case Direction.NORTH: this.direction = Direction.WEST; break;
                case Direction.WEST: this.direction = Direction.SOUTH; break;
                case Direction.SOUTH: this.direction = Direction.EAST; break;
                case Direction.EAST: this.direction = Direction.NORTH; break;
            }
            console.log("Turned "+this.direction);
        }
    }

    //right command
    right(): void {
        if (!this.hasBeenPlaced) {
            console.log("The robot has not been placed on the table.");
            return;
        }

        if (this.direction !== null) {
            switch (this.direction) {
                case Direction.NORTH: this.direction = Direction.EAST; break;
                case Direction.EAST: this.direction = Direction.SOUTH; break;
                case Direction.SOUTH: this.direction = Direction.WEST; break;
                case Direction.WEST: this.direction = Direction.NORTH; break;
            }
            console.log("Turned "+this.direction);
        }
    }

    //report command
    report(): string {
        if (!this.hasBeenPlaced) {
            return "The robot has not been placed on the table.";
        }

        if (this.x !== null && this.y !== null && this.direction !== null) {
            return `Robot is at ${this.x},${this.y} facing ${this.direction}`;
        } else {
            return "Robot is not yet placed on the table.";
        }
    }
}

