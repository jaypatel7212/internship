
//--------- Aysnc function------------------------------//

// async function test(){
//     return "Hello";
// }

// test().then((result)=> {
//     console.log(result);
// });


//----------------->>>>>>>>>>>> await <<<<<----------------------------------

// async function test(){
//     console.log("2:msg");
//    await console.log("3:msg");
//     console.log("4:msg");
//     console.log("5:msg");
// }

// console.log("1:msg");
// test();
// console.log("6:msg");




//-------->>>>>>>>> iterators---->>>>>>>>>>>>>>>>--------------


// let numbers = [100,2000,300];
// let iters = numbers[Symbol.iterator]();

// console.log(iters.next());
// console.log(iters.next());
// console.log(iters.next());
// console.log(iters.next());


//-------->>>  generators  ---<<<<<<<<<<<<<<<-----------


// function *generateit(){
//     console.log("first  msg");
//     console.log("second msg");
// }

// let g = generateit();
// console.log(g.next());  //  output: first msg  second msg




// function *generateit(){
//     console.log("first  msg");
//     yield 'yield  no.1';
//     console.log("second msg");
//     yield 'yield no.2';
// }

// let g = generateit();
// console.log(g.next());      //output :    First msg





function *generateit(){
    yield 'yield no. 1';
    yield 'yield no. 2';
    yield 'yield no. 3';
}                          // yield no 2 print na thay e mate

let g = generateit();
console.log(g.next());
g.next();                          //output : yield 1    yield  3
console.log(g.next().value); // aama khali value j print thay