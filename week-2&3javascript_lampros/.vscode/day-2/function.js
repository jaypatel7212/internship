// function showMsg() {
//     alert("hello:");
// }

// showMsg();

// let username = "jay";

// function showMsg() {
//     let msg = "Hello," + username;
//     alert(msg);                   // hello jay
// }
// showMsg();



// let userName = 'John';
// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// alert( userName ); // John before the function call
// showMessage();
// alert( userName ); // Bob, the value was modified by the function



// function showMsg(from , text){
//     alert(from+':'+text);
// }
// showMsg("jay","patel");


// function showMessage(text) {

//     if(text=== undefined)
//     {
//         text = "no text given";
//     }
//     alert(text);
// }
// showMessage("jay");


// function sum(a,b) {
//     return a+b;
// }

// let result = sum(3,2);
// alert(result);         //5


//return value and check
// function checkAge(age) {
//     if(age>=18){
//         return true;
//     }
//     else{
//         return confirm("do you have a permission from your parent:")
//     }
// }

// let age = prompt("How old you?",18);

// if(checkAge(age)){
//     alert("access granted");
// }
// else{
//     alert("access denied");
// }



//--->> copy fuction

// function sayHi(){
//     alert("Hello");
// }
// let fun=sayHi;  //copy function
// fun();
// sayHi();



//----> callback function

// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no();
// }
// function showOk(){
//     alert("You agreed.");
// }
// function showCancel(){
//     alert("you cancel program");
// }
// ask("do you agree?",showOk,showCancel);

//same 

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );




//  ---->>>> arrow function

//let sum=(a,b) => a+b;  //shorter form of arrow function
//alert(sum(2,3)); //5

// let sum =function(a,b) {
//     return a+b;
// };
// alert(sum(2,3)) //5


let double = n =>n*2;
alert(double(3));    //6

let sayHi=()=>alert("hello");

sayHi();


//---> multiline Arrow function

let sum=(a,b)=> {
    let result=a+b;
    return result;
};
alert(sum(2,3));  //5