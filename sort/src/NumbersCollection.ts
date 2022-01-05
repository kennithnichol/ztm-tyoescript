import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable {
	constructor(public data: number[]) { }

	// make this a property instead of a function call
	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftValue = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftValue;
	}

}