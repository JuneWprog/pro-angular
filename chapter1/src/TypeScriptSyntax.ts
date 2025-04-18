//  Nullish Coalescing Operators
let val1: string | undefined;
let val2: string | undefined = "London";
let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
console.log(`Result 1: ${coalesced1}`);      //if undefined or null, fallback value will be used
console.log(`Result 2: ${coalesced2}`)

let count: number | undefined | null = 100;
let coalesced3 = count ?? 0; //if undefined or null, fallback value will be used

//Functions 


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
  