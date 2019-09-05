// if ( 1 === "1"){
//     console.log (true);
// }
// else {
//     console.log (false);
// }
// //the values are in data and in type
// if ( 1 == "1"){
//     console.log (true);
// }
// else {
//     console.log (false);
// }
// //== check data type

// if ( 1 != "1"){
//     console.log (true);
// }
// else {
//     console.log (false);
// }
// //check if there not equal regardless of type

// let age = 18;

// if (age > 17){
//     console.log("How about a Cocktail?")
// }
// else {
//     console.log("Maybe a Mocktail!")
// }
// // changing the let age = to a different number changes the outcome of the else or if

// let day = "monday"

// if (day == "saturday" || day == "sunday"){
//     console.log ("its the weekend!");
// }
// else {console.log("almost there...whens the weekend?")}

// let password = "kiwilliams".length;

// if (password == password){
//     console.log ("access granted miss")
// }
// else
//     console.log ("not quite.two short");
// //chalenge 1

// let num2 = "50"

// if (num2 % 3 == 0 && num2 % 5 == 0 ){
//     console.log ("this number is a multiple of both 3 & 5")
// }
// else if (num2 % 3 == 0|| num2 % 5 == 0){
//     console.log ("this divides by either 3 or 5")
// }
// else
//     console.log("sorry this dosen't compute");
// //challenge 2

// let num3 = 49

// if (num3 % 3 == 0 && num3 % 5 == 0 ){
//     console.log ("fizz buzz")
// }
// else if (num3 % 5 == 0){
//     console.log ("Buzz")
// }
// else if (num3 % 3 == 0){
//     console.log ("Fizz")
// }
// else
//     console.log("sorry this dosen't compute");


    let s1 = "x";
    let s2 = "o";
    let s3 = "x";
    let s4 = "x";
    let s5 = " ";
    let s6 = "x";
    let s7 = " ";
    let s8 = " ";
    let s9 = " ";
    
    console.log("    |    |");
    console.log(` ${s1}  |  ${s2} | ${s3}`);
    console.log("    |    |");
    console.log("---------------");
    console.log("    |    |");
    console.log(` ${s4}  |  ${s5} | ${s6}`);
    console.log("    |    |");
    console.log("---------------");
    console.log("    |    |");
    console.log(` ${s7}  |  ${s8} | ${s9}`);
    console.log("    |    |");

    if (s1 == "0" && s2 == "o" && s3 == "o"){
        console.log ("noughts win!")
    } 
    else if(s1 == "x" && s2 == "x" && s3 == "x" ){
        console.log ("crosses win!")
    }
    else if (s4 == "o" && s5 == "o" && s6 == "o"){
        console.log ("noughts win!")
    } 
    else if(s4 == "x" && s5 == "x" && s6 == "x" ){
        console.log ("crosses win!")
    }   
    else if (s7 == "o" && s8 == "o" && s9 == "o"){
        console.log ("noughts win!")
    } 
    else if(s7 == "x" && s8 == "x" && s9 == "x" ){
        console.log ("crosses win!")
    }
    else if (s1 == "o" && s4 == "o" && s7 == "o"){
        console.log ("noughts win!")
    } 
    else if(s1 == "x" && s4 == "x" && s7 == "x" ){
        console.log ("crosses win!")
    }
    else if (s2 == "o" && s5 == "o" && s8 == "o"){
        console.log ("noughts win!")
    } 
    else if(s2 == "x" && s5 == "x" && s8 == "x" ){
        console.log ("crosses win!")
    }
    else if (s3 == "o" && s6 == "o" && s9 == "o"){
        console.log ("noughts win!")
    } 
    else if(s3 == "x" && s6 == "x" && s9 == "x" ){
        console.log ("crosses win!")
    }
    else if (s1 == "o" && s5 == "o" && s9 == "o"){
        console.log ("noughts win!")
    } 
    else if(s1 == "x" && s5 == "x" && s9 == "x" ){
        console.log ("crosses win!")
    }
    else if (s3 == "o" && s5 == "o" && s7 == "o"){
        console.log ("noughts win!")
    } 
    else if(s3 == "x" && s5 == "x" && s7 == "x" ){
        console.log ("crosses win!")
    }
    else console.log("no winners here")