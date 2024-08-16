// Chapter 36: functions: passing them data


// Parameter vs Argument
// The data inside the paranthesis in a function statment is known as a parameter
// The data inside the paranthesis in a function call is known as an argument.

// function statment
// function printNumber(num){   //num is a parameter
//   alert(num);
// }

// // function call
// printNumber(4);   //4 is an argument

// function without passing it data 
// function greetUser(){
//     alert("Hello");
// }

// greetUser();

// passing Data to a function
// function greetUser(greeting){
//     alert(greeting);
// }

// greetUser("hello");
// greetUser("welcome");

// // passing data using a variable
// function greetTheUser(greeting){
//   alert(greeting);
// }

// const greetingMessage = "hello";
// greetTheUser(greetingMessage);

// A function can take any Number of parameters
// function printUserDetails(userName , age ,ismarried){
//   console.log(
//     `your name is ${userName} , you are ${age} years old and your marital status is  = ${ismarried}.`
//   );
// }

// printUserDetails("ducket" , 40 , true);



// Arugument order does matter 
// function printUserDetails(userName , age ,ismarried){
//     console.log(
//       `your name is ${userName} , you are ${age} years old and your marital status is  = ${ismarried}.`
//     );
//   }
  
//   printUserDetails(40 , true , "ducket");



// //   if nothing is provided to parameter then it will be undefined
// function printUserDetails(userName , age ,ismarried){
//     console.log(
//       `your name is ${userName} , you are ${age} years old and your marital status is  = ${ismarried}.`
//     );
//   }
  
//   printUserDetails("ducket", 40);
  
  