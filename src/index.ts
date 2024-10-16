import { Table } from './Table';
import { Robot, Direction } from './Robot';
import * as readline from 'readline';

// Initialize Table and Robot
const table = new Table();
const robot = new Robot(table);

// Set up readline interface for CLI
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

// Command parser
function executeCommand(command: string) {
    const cmd = command.split(" ")[0].toUpperCase();
    const args = command.slice(cmd.length).trim();
    
    switch (cmd.toUpperCase()) {
        case 'PLACE':
            const cleanArgs = args.replace(/\s+/g, "");
            const [xStr, yStr, directionStr] = cleanArgs.split(",");
            const x = parseInt(xStr, 10);
            const y = parseInt(yStr, 10);
            const direction = directionStr as Direction;

            if (!isNaN(x) && !isNaN(y) && direction in Direction) {
                robot.place(x, y, direction);
            } else {
                console.log("Invalid PLACE command format.");
            }
            break;

        case 'MOVE':
            robot.move();
            break;

        case 'LEFT':
            robot.left();
            break;

        case 'RIGHT':
            robot.right();
            break;

        case 'REPORT':
            console.log(robot.report());
            break;

        default:
            console.log("Unknown command.");
    }
}

// Start CLI prompt
console.log("Toy Robot Simulator");
console.log("Enter commands (e.g., 'PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT')");
rl.prompt();

rl.on('line', (input: string) => {
    executeCommand(input);
    rl.prompt();
}).on('close', () => {
    console.log('Exiting the Toy Robot Simulator');
    process.exit(0);
});
