// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
  
//   rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal


//   let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
  
//   rabbit.__proto__ = animal; // (*)
  
//   // we can find both properties in rabbit now:
//   alert( rabbit.eats ); // true (**)
//   alert( rabbit.jumps ); // true

//   let animal = {
//     eats:true,
//     walk(){
//         alert("animal walk");
//     }
//   }; 

//   let rabbit = {
//     jumps:true,
//     __proto__:animal
//   };

//   rabbit.walk(); // Animal walk




//   let animal = {
//     eats: true,
//     walk() {
//       alert("Animal walk");
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };
  
//   // walk is taken from the prototype chain
//   longEar.walk(); // Animal walk
//   alert(longEar.jumps); // true (from rabbit)
  
  

//   let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }




  //---->>>>   class and oject


//   class hello{
//     msg(){
//         alert("Hello");
//     }
//     sorry(){
//         alert("sorry everyone")
//     }
//   }

//   let a = new hello();
//   a.msg();
//   a.sorry();

  //

//   //--->>>types of methods
//   1.constructor
//   2.prototypes
//   3.static



///    1.constructor

// class student{
//     constructor(){
//         alert("constructor function")
//     }

// }
// let a = new student();


//----------inheritance -----------//

// class employee{
//     constructor(name){
//         alert("constructor: employee "+name)
//     }
// }

// class manager extends employee{
//     constructor(name){
//         super();
//         alert("constructor: manager "+name)
//     }
// }
// let a = new manager("jay");



///----- expection handing


// try{
//     setTimeout(function(){
//         blabl;
//     },1000)
// }catch(error){
//     console.log(error);
// }


// try {
//     let json = '{"jay":21}';
//     let user=JSON.parse(json);

//     if(!user.name){
//         throw new Error("incompleted data:");
//     }

//     console.log(user.name);
//     console.log(user.age);
// }
// catch(error){
//     console.log("error");
// }finally{
//     console.log("Finally");
// }


//------>>> promise ----------

// let complete = true;

// let prom = new Promise((resolve, reject) => {
//     if(complete){
//         resolve("I am sucessfull.");
//     }
//     else{
//         reject("I am failed");
//     }
// });
// console.log(prom);


//-------------------------------------------------------------------------------------

// function prom(complete){
//     return new Promise(function(resolve,reject){
//         if(complete){
//             resolve("I am sucessfull");
//         }
//         else{
//             reject("I am failed");
//         }
//     });
// }

// let onfulfilment = (result) =>{
//     console.log(result);
// }
// let onRejection = (error)=>{
//     console.log(error);
// }
// prom(true).then(onfulfilment);
// prom(false).catch(onRejection);




//-------------------------------------------------------------------------------




//----->>>>>>>>>>>>>>>  promise.all   <<<<<<<<<<<-----------------------------------



// let p1 =  new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("first  promise  has resolved");
//         resolve(10);
//     },1*1000);
// });

// let p2 =  new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("second  promise  has resolved");
//         resolve(20);
//     },2*1000);
// });

// let p3 =  new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("third  promise  has resolved");
//         resolve(30);
//     },3*1000);
// });

// Promise.all([p1,p2,p3]).then((result) =>{
//     console.log(`Result:${result}`);
// }).catch((error) =>{
//     console.log(`Error:${error}`);
// });


//------------ short ma promise function banana mate:----------------------//



let promiseCall = function(returnData,message) {
   return function(resolve,reject){
        setTimeout(() => {
            console.log(`the ${message} promise has resolved`);
            resolve(returnData);
        },returnData*100);
    }
};

let p1 = new Promise(promiseCall(10,"first"));
let p2 = new Promise(promiseCall(20,"second"));
let p3 = new Promise(promiseCall(30,"third"));

Promise.all([p1,p2,p3]).then((result) =>{
    console.log(`Result:${result}`);
}).catch((error) =>{
    console.log(`Error:${error}`);
});