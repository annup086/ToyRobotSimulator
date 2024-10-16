export class Table {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number = 5, height: number = 5) {
        this.width = width;
        this.height = height;
    }

    isPositionValid(x: number, y: number): boolean {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
}
