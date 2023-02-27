
// let admin ="jay";

// let name ="name";

// admin=name;

// alert(admin);


// let apple ="2";

// let orange = "3";

// alert(apple+orange); //output : 23  the binary plus concatenates strings

// alert(+apple + +orange);  // : 5  both values converted to numbers before the binary plus

// alert( Number(apple) + Number(orange)); // 5

// let a=2;
// let x=1+(a*=2);       
// alert(x);

// "" - 1 + 0
// true + false   // 1
// 6 / "3"       // 2
// "2" * "3"       // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5   -> $45
// "4" - 2       ->// 2
// "4px" - 2     ->// Nan
// "  -9  " + 5       //  -9  5
// "  -9  " - 5       //   -14
// null + 1           //   1
// undefined + 1      //    Nan
// " \t \n" - 2       //   -2

//alert("" + 1 + 0); // 10

// alert(""-1+0);
// alert("2"*"3");
// alert(4+5+"px");
// alert("$"+4+5);
// alert("4"-2);
// //alert("4px"-2);
// alert("  -9  " + 5);
// alert("  -9  " - 5);
// alert(null+1);
// alert(undefined+1);
// alert(" \t \n" - 2);



// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// alert(null > 0);  // false

// alert(null == 0);  //false

// alert(null >=0);  //true

// let date = prompt("your bday date is:?",'');

// if(date==2)
// alert("You are right");

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }


// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let age = prompt('age?',18);

// let mgs = (age < 3) ? 'hi':
// (age<18)? 'Hello';

// alert(msg);

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


let i=0;

while(i<3)
{
    alert(i);
    i++;
}