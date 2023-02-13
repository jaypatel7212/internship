// let user = {
//     name: "jay",
//     age: 21
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // Jay (if enter "name")


  //-----> in  operation

//   let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist


let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }



//-----> for(let key in obj)


  let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }

//------> object copy
  
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" 


//------>  cloning and merging



let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user.name ); // still John in the original object


// -----> this in method

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John