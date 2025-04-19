//Primitives: number, string, boolean, null, undefined, symbol, bigint
// more complex types: arrays, objects, functions, classes, interfaces, enums

//Type inference:  TypeScript can automatically infer the type of a variable based on its value at the time of declaration.
let courseName = "TypeScript"; // inferred as string
let courseDuration = 3; // inferred as number

//union types:  allows a variable to hold multiple types of values
let courseDuration2: number | string = 3; // can be a number or string
let courseDuration3: number | string = "3 months"; // can be a number or string


//type alias:  allows you to create a new name for an existing type
type Course = {
    name: string;
    duration: number;
    isActive: boolean;
};

let course: Course = {
    name: "TypeScript",
    duration: 3,
    isActive: true,
};
//  Nullish Coalescing Operators
let val1: string | undefined;
let val2: string | undefined = "London";
let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
console.log(`Result 1: ${coalesced1}`);      //if undefined or null, fallback value will be used
console.log(`Result 2: ${coalesced2}`)

let count: number | undefined | null = 100;
let coalesced3 = count ?? 0; //if undefined or null, fallback value will be used

//array

let fruits:string []=["apple", "banana", "orange"] //string array
let fruitsExtension: (string | number)[] = ["apple", "banana", 1, 2] //string and number array
let fruitsExtension2: Array<string | number> = ["apple", "banana", 1, 2] //string and number array

let friends:string[] = new Array()

friends.push("Julian")
friends.unshift() //remove first element
friends.push("Julian")
friends[0] ="Mike" //update first element
friends =[...friends, "Harry"] //add new element at the end

//array functions   push, pop, shift, unshift, slice, splice, map, filter, reduce
for (let i = 0; i < friends.length; i++) {
    console.log("Index " + i + ": " + friends[i]);
    }


let myArray: (number | string | boolean)[] = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];
let sum: number = otherArray
.filter(val => typeof(val) == "number")
.reduce((total: number, val) => total + (val as number), 0)
console.log(`Sum: ${sum}`);
    


//Functions 
function add(a: number, b: number): number {
    return a + b;
}

//generic function:  allows you to create a function that can work with any data type
function genericFunction<T>(arg: T): T {
    return arg;
}
//must insert same type as the array type T===T
function insertAtBeginning<T>(arr: T[], value: T): T[] {
    return [value, ...arr]; //spread operator is used to copy the elements of an array into a new array
}
//  use any allow to add any type of value to the array
function insertAtBeginning2 (arr: any[], value: any): any[] {
  return [value, ...arr]; //spread operator is used to copy the elements of an array into a new array
}

let numbers = [1, 2, 3];
let newNumbers = insertAtBeginning(numbers, 0); // [0, 1, 2, 3] must use the same type as the array
let newNumbers2 = insertAtBeginning2(numbers, "0"); // [0, 1, 2, 3]


//callback function
//Callback function:  is function  passed as parameter to be called later
function addTwo(a:number, b:number){        //  callback function
    return a+b;
}

function minusTwo(a:number, b:number){      //  callback function
    return a-b;
}
 function getResult(a:number, b:number,  f: (x: number, y: number) => number) {    
        return f(a, b);
 }

 console.log(getResult(3,5,addTwo))

 console.log(getResult(3,5,minusTwo))


//closure
//closure is a function that has access to the parent scope, even after the parent function has closed
function outer() {
    let count = 0;
  
   function incre() {
      count++;
      console.log('Increment:', count);
      
    }
  
    function decre() {
       count--;
      console.log('Decrement:', count);
     
    }
  
    return [incre, decre]; 
  }
  
  let [increase, decrease] = outer();     //return inner function
  increase() //1
  increase() //2
  increase() //3
  decrease() //2
  
  
  //object 
  let jand ={
      name: "jason",
      age: 25,
      occupation: "manager"
  }
  
  console.log(jand.age)
  //person:{name:string, age:number, occupation?:string}
  //occupation? is optional property
  //? is used to define optional property /parameter
  function printDetail(person:{name:string, age:number, occupation?:string}){
      console.log(person.age)
     
      console.log(person.occupation?? "occupation not provided")
      if(person.occupation){
          console.log(person.occupation)
      }
  }
  
  let rosy ={
      name: "rosy",
      age: 15,
  }
  
  printDetail(rosy)
  printDetail(jand)
  

  // class 
   class Product {
   public name: string;
   public price: number;
   public category?: string;

   constructor(name: string,  price: number, category?: string) {
   this.name = name;
   this.price = price;
   this.category = category;
   }
  
   public callMe():void{
      console.log("calling")
      this.callTrump()
   }
   private callTrump():void{
      console.log("Trump Who")
   }

   get getName():string{
      return this.name
    }
   }

   
  
  let iphone15 = new Product("iphone15", 2563, "mobile")
  console.log(iphone15.name)
  iphone15.callMe()
  // iphone15.callTrump()
  
  console.log( iphone15 instanceof Product)



  class Human{
    //can be public, private, protected and readonly
    //the properties can be omitted from the constructor
      // name:string
      // age:number
      constructor(public name:string, public age:number){
          // this.name = name
          // this.age = age
         
      }
      get getName():string{
          return this.name
      }
     
  }

  //inheritance
  class Student extends Human{
      constructor(name:string, age:number, public courses:string[]){
          super(name, age) //call parent constructor
      }
      get courseList():string []{
          return this.courses
      }

      set enroll(course:string){
          this.courses.push(course)
      }
  }


  //interface

interface Employee {
    name: string;
    age: number;
    position?: string; //optional property
    department: string;
    getDetails(): string; //method signature
  }
//implement an interface
//interface vs abstract class:  interface is a contract that a class must follow
//abstract class can have implementation and can have constructor
//interface can only have method signature and properties

let Josh:Employee = {
  name:"Josh",
  age: 25, 
  department: "IT", 
  position: "Manager",
  getDetails: function (): string {
    return `${this.name}, ${this.age}, ${this.department}, ${this.position?? "N/A"}`;
  },
}

console.log(Josh.getDetails())

// interface is a contract that a class must follow
// multiple classes can implement the same interface
// provide flexibility to the code than types

class Manager implements Employee {
  name: string;
  age: number;
  position?: string; //optional property
  department: string;

  constructor(name: string, age: number, department: string, position?: string) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.position = position;
  }
  //override the method signature of the interface
  getDetails(): string {
    return `${this.name}, ${this.age}, ${this.department}, ${this.position?? "N/A"}`;
  }
}
  

  // Each TypeScript or JavaScript file that you add to a project is treated as a module.


  //Observable
  /**
   * use case：
前端监听用户输入（如 keyup, click 等 DOM 事件）

HTTP 请求的数据响应

WebSocket 实时消息推送

表单变化的追踪（Angular 中用得很多）

异步数据流的处理（比如多步数据合并、节流、防抖）
你可以把 Observable 想象成一个“广播电台”📻，它会不断地发送（广播）信息，而你（Observer）可以“订阅”它来接收这些信息。


   * 
   */

import { Observable, Observer, Subject } from 'rxjs';

function recieveEvents(observable: Observable<string>) {
    observable.subscribe({
      next: str => {
        console.log(`Event received: ${str}`); // 每次接收到一个事件就打印
      },
      complete: () => console.log("Sequence ended") // 所有事件发送完成后打印
    });
  }

  function sendEvents(observer: Observer<string>) {
    let count = 5;
    for (let i = 0; i < count; i++) {
      observer.next(`${i + 1} of ${count}`); // 发送事件
    }
    observer.complete(); // 发送完成信号
  }
  


// const observable = new Observable<string>(observer => {
//   sendEvents(observer);
// });


let subject = new Subject<string>();
recieveEvents(subject);
sendEvents(subject);

// Event received: 1 of 5
// Event received: 2 of 5
// Event received: 3 of 5
// Event received: 4 of 5
// Event received: 5 of 5
//Sequence ended