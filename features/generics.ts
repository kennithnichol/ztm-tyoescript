class ArrayOfNumbers {
	constructor(public collection: number[]) { }

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfString {
	constructor(public collection: string[]) { }

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOf<T> {
	constructor(public collection: T[]) { }

	get(index: number): T {
		return this.collection[index];
	}

}

const arr = new ArrayOf(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printGeneric<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

printGeneric<boolean>([true, false, true, true, false]);

// Generic Constraints

class Car {
	print() {
		console.log('I am a car');
	}
}

class House {
	print() {
		console.log('I am a house');
	}
}

interface Printable {
	print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHousesOrCars<Car>([new House(), new House()]);
printHousesOrCars<House>([new Car(), new Car()]);
printHousesOrCars<Printable>([new House(), new Car()]);