import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
	constructor(public data: string) { }

	// make this a property instead of a function call
	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
	}

	swap(leftIndex: number, rightIndex: number): void {
		const caracters = this.data.split('');

		const leftValue = caracters[leftIndex];
		caracters[leftIndex] = caracters[rightIndex];
		caracters[rightIndex] = leftValue;

		this.data = caracters.join('');
	}

}