//1. String
const a: string = '123456789';

function getFirstWord(a: string) {
	return a.split(/ +/)[0].length;
}
console.log(getFirstWord(a));

//2. Object

// class Person{
//     constructor(n:string, sn:string){
//         this.name = n;
//         this.surname = sn;
//     }
//     name : string;
//     surname:string
// }
// const person1 = new Person('max', 'maxsimenko');

// function getUserNamings(a: Person){
//   return { 
// 		fullname: a.name + " " + a.surname,
// 		initials: a.name[0] + "." + a.surname[0] 
// 	};
// }
// const p = getUserNamings(person1);
// console.log(typeof p);
// console.log(getUserNamings(person1));
// console.log(getUserNamings(person1).fullname);
// console.log(getUserNamings(person1).initials);

// //3. an object obj which has a nested structure
// //<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
// const a: { products: string[] } = {
//     products: ['one', 'two', 'three']
// }

// const a1: { products: object[] } = {
//     products: [{ name: 'telephone' }, { name: 'tv' }, { name: 'mouse' }]
// }
// function getAllProductNames(a: any) {
//     return a?.products?.map((prod: { name: any; }) => prod?.name) || [];
// }
// console.log(getAllProductNames(a));   // [ undefined, undefined, undefined ]
// console.log(getAllProductNames(a1));  // [ 'telephone', 'tv', 'mouse' ]

// // 4.1
// // easy way is using 'as' keyword
// // hard way is ?...  I dont know ((((

// interface User {
//     coolness?: number,
//     cuteness?: number,
//     name(): string,
// };
// type  User = {
//     coolness?: number,
//     cuteness?: number,
//     name(): string,
// };
// function hey(a: User): string {
//     return "hey! i'm " + a.name();
// }
// console.log(hey({ name: () => "roma", cuteness: 100 }));
// console.log(hey({ name: () => "vasya", coolness: 100 }));

// 4.2
// abstract class AbstractAnimal {
//     protected nameAnimal :string;
//     constructor(name:string){
//         this.nameAnimal = name;
//     }
//     abstract name(): string;
// }

// class Cat extends AbstractAnimal {
//     isCat: boolean;
//     constructor(name:string, isCat: boolean) {
//         super(name);
//         this.isCat = isCat;
//     }
//     name(): string {
//         return this.nameAnimal;
//     }
// }
// class Dog extends AbstractAnimal {
//     stepsCount : number;
//     constructor(name:string, steps: number) {
//         super(name);
//         this.stepsCount = steps;
//     }
//     name(): string {
//         return this.nameAnimal;
//     }
// }
// function hey(abstractPet: AbstractAnimal): string {
//     return "hey! i'm " + abstractPet.name();
// }
// let a = new Cat("myavchik", true)
// let b = new Dog("gavchik", 333)
// console.log(hey(a));
// console.log(hey(b));

// 4.3
// abstract class AbstractAnimal {
//     nameAnimal: string;
//     type: string;
//     constructor(name: string, type: string) {
//         this.nameAnimal = name;
//         this.type = type;
//     }
//     abstract name(): string;
// }

// class Cat extends AbstractAnimal {
//     cuteness: number;
//     constructor(name: string, type: string, cuteness: number) {
//         super(name, type);
//         this.cuteness = cuteness;
//     }
//     name(): string {
//         return this.nameAnimal;
//     }
// }
// class Dog extends AbstractAnimal {
//     coolness: number;
//     constructor(name: string, type: string, coolness: number) {
//         super(name, type);
//         this.coolness = coolness;
//     }
//     name(): string {
//         return this.nameAnimal;
//     }
// }
// type Amimal = {
//     type:string;
//     coolness?: number,
//     cuteness?: number,
//     name(): string,
// };
// function hey(a: Amimal): string {
//     return "hey! i'm " + a.name()
//         + (a.type === "cat" ? (" cuteness: " + a.cuteness) : (" coolness: " + a.coolness))
// }
// console.log(hey({ name: () => "roma", type: "cat", cuteness: 100 }));
// console.log(hey({ name: () => "vasya", type: "dog", coolness: 100 }));

// // 5.
// // google for Record type
// // first test case
// type rec = Record<number | string | symbol, string>;
// const record: rec = {
//     1: 'one',
//     'two': 'second',
// }
// //second test case
// type CatName = "miffy" | "boris" | "mordred";
// const cats: Record<CatName, string> = {
//     "miffy": 'first',
//     "boris": 'second',
//     "mordred": 'third',
// }
// //third test case - array for testing
// const arr: string[] = ['one', 'two', 'three'];
// function stringEntries(a: Object) {
//     return Array.isArray(a) ? a : Object.keys(a);
// }
// console.log(stringEntries(record));

// // 6.

// // you don't know Promises and async/await yet. Or do you?
// // ....can be hard, don't worry and SKIP if you do not know how to do it

// async function world(a : number) {
//     return "*".repeat(a)
// }
// // const hello = async () => {
// //    return await world(10)
// // }
// async function hello (){
//    return await world(10)
// }
// hello()
// .then(r => console.log(r))
// .catch(e => console.log("fail"))