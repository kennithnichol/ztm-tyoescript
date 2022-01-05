import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter'

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XzCsmKknBa')
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(1000);
linkedList.add(5);
linkedList.add(-10);
linkedList.add(-21);
linkedList.add(91);
linkedList.add(1);
const listSorter = new Sorter(linkedList);
listSorter.sort();
console.log(linkedList.print())
