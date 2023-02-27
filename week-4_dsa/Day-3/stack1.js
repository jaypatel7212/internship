//stack 

//palindrome using stack (push,pop,peek,length)

var letter = []; //stack 

var  word = "jay"

var rword = ""

for(var i=0;i<word.length;i++){
letter.push(word[i]);
}

for(var i=0;i<word.length;i++){
   rword +=letter.pop(); 
}

if(rword===word){
    console.log(word +" is a palindrome");
}

else{
    console.log(word + " is a not palindrome");
}