import { Shape } from "./Shape";

export class Rectangle extends Shape {
    calculateArea(): number {
        return this._width * this._height;
    }
    constructor(theX: number, theY: number, private _width: number, private _height: number) {
        super(theX, theY)
    }

    public set width(value: number) {
        this._width = value;
    }
    public get width(): number {
        return this._width;
    }

    public set height(value: number) {
        this._height = value;
    }
    public get height(): number {
        return this._height;
    }

    getInfo(): string {
        return super.getInfo() + `, width = ${this._width}, height = ${this._height}`;
    }
}