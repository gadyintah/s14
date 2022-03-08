 	/*Demo*/
document.getElementById("btn-1").addEventListener('click', () => {
		alert("Add more!");
});

let paragraph = document.getElementById("paragraph-1");
let paragraph2 = document.getElementById("paragraph-2");

document.getElementById("btn-2").addEventListener('click', () => {
		paragraph.innerHTML = "I can even do this!";
});

document.getElementById("btn-3").addEventListener('click', () => {
		paragraph2.innerHTML = "Or this!";
		paragraph2.style.color = "red";
		paragraph2.style.fontSize = "50px";
});

/* Lesson Proper */
// Writing in Comments in Java:
// There are two ways of writing comments in JS:
	// single line comments - ctrl + /
	/*
		multiline comments - ctrl + shift + /

		Comments in JS, much like CSS and HTML is not read by the browser.
		So. these comments are often used to add notes and to add markers to your code.
	 */

console.log("Hello world!");

/*
	JavaScript
		- we see or log message in our console

		Consoles are part of our browser which will allow us to see/log messages, data or information from our programming language

		In fact, console can be accessed through its developer tools in console tab. For most browser allow us to add some JavaScript expression

		Statements
			- Statements are instructions, expression we add to out programming language which will then be communicated to our computers
			- Statements in JavaScript commonly ends in semicolon(;)
			- Semicolons in JavaScript are mostly used to mark the end of the statement

		Syntax
			- Syntax in programming, is a set of rules that describes how statements are properly made/constructed
			- Lines/blocks of code must follow a certain set of rules for it to work. Because remember, you are not merely communicating with another human, in fact you are communicating with a computer

 */

console.log("Thonie Fernandez");

// Variables
/* 
	In HTML, elements are container of other elements and text.
	In JavaScript, Variables are containers of data. A give name to describe a piece of data.

	Variable also allow us to use or refer to data multiple times.
*/

// num is our variable
// 10 being the value or data;
let num = 10;

console.log(6);
console.log(num);

let name1 = "Leonardo";

console.log("John");
console.log(name1);

/*
	Creating Variables
		To create a variable, there are two steps to be done:
			- Declaration which actually allows us to create the variable
			- Initialization which allows  to add an initial value to a variable.
		Variables in JS are declared with the use of let or const keyword

 */

let myVariable;
/*  var = scoping
		let
		const

	We can create variable without intial value. However, when  logged into the console, the variable will return a value of UNDEFINED.
	undefined
		- is a data type that indicates that variable does exist however there was no value.

	You can always initialize a variable after declaration by assigning a value to the variable with the use of assignment operator (=)
 */
console.log(myVariable);

myVariable = "New Initialized Value";
console.log(myVariable);

myVariable = "Another value";
console.log(myVariable);

myVariable = 7;
console.log(myVariable);
/*
	You cannot and should not access a variable before it's been created/declared.
 */
myVariable2 = "Initial Value 2";
// let myVariable2;
console.log(myVariable2);

myVariable3 = "hi";
console.log(myVariable3);

/*
	Can you use or refer to a varibale that has not been declared or created?
		- No. This will result in error. 

	Undefined vs Not Defined
	Undefined means a variable has been declared but there is no initial value.
		- undefined is a data type
	Not defined means that the variable you are trying to refer or access does NOT exist
		- not defined is an error.

	Note: Some errors in JS, will stop the program from further executing

 */
/*
	Let vs Const


	with the use of let, we can create variables that can be declared, intialized and re-assgined

	In fact, we can declare let variable and initialize after

 */

let bestFinalFantasy;
bestFinalFantasy = "Final Fantasy 6";
console.log(bestFinalFantasy);

// Re-assigning let  variables
bestFinalFantasy = "Final Fantasy 7";
console.log(bestFinalFantasy);

// Did the value change?
// Yes. We can re-assign values to let variables
/*
	What happens when declaring another variable with the same name?
	IT returns an error

	Can you and shoukd you create variables with the same name?
	No
 */
// let bestFinalFantasy = "Final Fantasy 10";
// console.log(bestFinalFantasy);

/* Const - const variable are variables with constant data. Therefore we should not re-declare, re-assign or declare a const variable without initialization*/

const pi = 3.1416;
console.log(pi);

const mvp = "Michael Jordan";
console.log(mvp);

mvp1 = "Lebron James";
console.log(mvp1);

mvp1 = "ako";
console.log(mvp1);
/*
	Re-assigning value to a const variable results to an error.

	Const variables are used for data that we expect or do not want its value to change.

 */
/*
	Guides on Variable Names
	1. When naming variables, it is important to create variables that are descriptive and indicative of the the data it contains.
		let firstName = "Michael"; - good variable name
		let pokemon = 25000; - bad variable name
	2. When naming variables, it is better to start with lower case letter. we usually avoid creating variable names that starts with capital letters. Because there are several keywords in JS that start in capital letter.
		let firstName = "Juan"; - good variable name
		let FirstName = "Juan"; - bad variable name
	3. Do not add spaces to your variable names. Use camelCase for multiple words or underscore
		let firstName = "Juan";
		let _start - class

		RegExp
		break
		goto
	
 */

let numSum = 5000;
let num_sum = 6000;
console.log(numSum);
console.log(num_sum);

// Declare Multiple variables
	let brand = "Toyota", model = "Vios", type = "Sedan";
	console.log(brand);
	console.log(model);
	console.log(type);
	// console logging multiple variables: use commas to separate each variable.
	console.log(brand, model, type);
// Number (Data Type)
	// integers (whole numbers) and float (decimals). There are our nuber data which can be used for mathematical operation
	let numString1 = "5";
	let numString2 = "6";
	let num1 = 5;
	let num2 = 6;
	console.log(numString1 + numString2);//56 strings were concatenated.
	console.log(num1 + num2);// 11 both operands, both argumetn in the operaion are number
	let num3 = 5.5;
	let num4 = .5;
	console.log(num1 + num3);//10.5
	console.log(num3 + num4);//6

/*
	When the + or additional operator is used on numbers, it will do proper mathematical operation. However, when we used on string, it will concatenate. 

	forced coercion 
		- When one's data type is force to change to complete an operation

		ex.	string + num = concatenation

 */

 	console.log(numString1 + num1);//55 result
 	typeof(numString1);
 	// parseInt() - this can change the type of a numeric string to a proper number
 	console.log(num4 + parseInt(numString1));

 	let sum1 = num1 + parseInt(numString2);
 	console.log(sum1);//11 - numString2 was properly converted into a number

 // Mathematical Operators (-, *, /, %)
 // Subtraction
 	console.log(num1 - num3);//-0.5 results in proper mathematical operation
 	console.log(num3 - num4);//5 results in proper mathematical operation
 	console.log(numString1 - num2);//-1 results proper mathematical operation, in subtraction, numeric string will not concatenate and instead will be forcibly change the type and subtract properly
 	let sample = "Thonie";
 	console.log(sample - numString2);//NaN - results in not a number. When trying to perform subtraction between the alphanumeric string and numeric string, the result NaN
// Multiplication
	console.log(num1 * num2);//30
	console.log(numString1 * num1);//25
	console.log(numString1 * numString2);//30

	let product = num1 * num2;
	let product2 = numString1 * num1;
	let product3 = numString1 * numString2;

	// Division
	console.log(product / num2);//5
	console.log(product2);
	console.log(product2 / 5);//5
	console.log(numString2 / numString1);//1.2

	// note Division and multiplication by 0
	console.log(product2 * 0); //0
	console.log(product3 / 0); 
	// division by 0 is not accurately and should not be done it results to infinity

	// % Modulo - remainer of a divison operation
	console.log(product2 % num2);//remainder - 1
	console.log(product2 % num1);//remainder - 0

// boolean(true or false)
/*
	Boolean is usually used for logic operatiopns for if-else conditions
	When creating a variable which will contain boolean, the variable name is usually a yes or no question,
 */
 	let isAdmin = true;
 	let isMarried = false;
 	let isMVP = true;
 	let isfinancialAdviser = true;

 	// you can concatenate string and boolean
 	console.log("Is she married?" + isMarried);
 	console.log("Is Jimmu married?" + isMarried);
 	console.log("Is Mon the MVP?" + isMVP);
 	console.log("Is Clifford is the current admin? " + isAdmin);
 	console.log("Is Nika is a best financial adviser? " + isfinancialAdviser);

 // Arrays
 	/*
 		Arrays are special kind of data type used to store multiple values.
 		Arrays can actually store data with different types BUT as the best practice, arrays are used to contain multiple values with same types of data
 		Values in an array are separated by commas
 		an array is created with an Array Literal = []

 		Array are better though of as groups of data
 	 */
 	let array1 = ["Goku", "Picolo", "Gohan", "Vegeta"];
 	console.log(array1);

 	let array2 = ["One Punch Man", true, 500, "Saitama"];
 	console.log(array2);
 	console.log(array1[0]);

 // Objects
 /*
 	Objects are another special kind of data type used to mimic real world
 		- used to create complex data that contain pieces of information that is relevant to each other 
 		- object are created with object literals = {}
 		- each data/value are paired with a key
 		- each field is called property
 		- each field is separated by commas
 	mobilePhone =
 				color: "red"
 				model: 2022
 				brand: iPhone
  */
 
 	let hero = {
 		heroName: "Once Punch Man",
 		isActive: true,
 		salary: 500,
 		realName: "Saitama",
 		height: 200
 	};
 	console.log(hero.height);
 	console.log(hero);

 	/*
 		Mini-Activity

 		Create a variable with a group of data
 			- The group of data should contain names from your favorite band.

 		Create a variable which contain multiple values of differing types amd describes a single person
 			- This data type should be able to contain multiple key value pairs:
 				firstName: <Value>
 				lastName: <Value>
 				isDeveloper: <Value>
 				hasPortfolio: <Value>
 				age: <Value>

 	*/

 	let myBand = {
 		firstBand: "Queen",
 		secondBand: "Band Aid",
 		thirdBand: "December Avenue"
 	};

 	let myGirlfriend = {
 		firstName: "Rizza",
 		lastName: "Orejo",
 		isDeveloper: true,
 		hasPortfolio: true,
 		age: 22
 	};

 	console.log(myBand);
 	console.log(myGirlfriend);
 	
 	let beatles = ["Ringo", "Paul", "John", "George"];
 	let person = {
 		firstName: "Paul",
 		lastName: "Martin",
 		isDeveloper: true,
 		hasPortfolio: true,
 		age: 25
 	};

 	console.log(beatles);
 	console.log(person);

 // In strings, spaces count as characters
 let state = "Texas";
 let country = "USA";

 let address = state + ',' + ' ' + country;
 console.log(address);

// Null vs Undefined
/*
	Null is the explicit absence of data/value. This is done to show that a variable contains nothing as opposed to undefined which means that the variable is created but there is not initial value
 */
// use cases of null
// when doing query or search, there of course might be a 0 result.
let foundResult = null;
console.log(foundResult);

// undefined - is a representation that a variable has been created/declared but there is no initial value, so we can't quite say, what the value is, thus it is undefined.
let sampleVariable;
console.log(sampleVariable);

let person1 = {
	name: "Peter",
	age: 42
};

// we use dot notation to select or displya the values of property of an object
console.log(person1.isAdmin);
/*
	For undefined, this is normally caused by developers when creating variables that have no data/value associated/initialized with them.

	undefined, because person1 variable does exist, however, there is no property in the object called isAdmin 

 
 	Functions
 		- Function in JS, are lines/blocks of code that tell our device/application to perform certain task when called or invoked

 		- function are reusable pieces of code with instructions which can be used over and over again just so long as we can call or invoke
 */
let name2 = "Bruno";
console.log(name2);
console.log(name2);
console.log(name2);

// functions are created by declaring the function using the function keyword
function showLeo(){
	console.log("Leo");
	console.log("Leo");
	console.log("Leo");
};

// function invocation/call is when use the function
showLeo();
showLeo();
/*
	Function Declaration is when we create the function
	Function Invocation is when we call/use the function
 */

/*Arguments vs Parameters
	- declared a function using function keyword
	- name - parameters are representation of the argument from an invocation

	- we can use the parameter within the function

	- we can also pass data into the function through our invocation.
	- Data added into the parethesis of a function invocation will be or can be passed into our function, this is called argument

*/
 function greet(name) {
 	// console.log("name");
 	console.log("Hello!" + name + "," + "how are you doing?")
 };

 greet("Jake");
 greet("Pat");

 /*
 	Mini-Activity
 	Create a function which is able to display data by passing an argument. The data will be displayed in the console.
 		Data is fun!
 		JavaScript is fun!
 		Reading is fun!

 		Name your function as displayMsg()
  */
 
 function displayMsg(data){
 	console.log(data + " is fun!");
 };

 displayMsg("Data");
 displayMsg("JavaScript");
 displayMsg("Reading");

 /* Multiple Arguments
	A function can also receive multiple arguments and therefore, to be able to use and access these arguments we're also going to need multiple parameters
 */

 function displayFullName(firstName1,lastName1,age){
 	console.log(firstName1 + " " + lastName1);
 	console.log("You are " + age + " years old.");
 };

// The number of arguments should be match the number of parameters
 displayFullName("Jeff", "Bezos", 25);
// Note: Order matters in your argument and parameters
 displayFullName("Cena", "John",32);
 displayFullName(32, "John", "Cena");

function showSum(n1,n2){
	console.log("The sum is: ");
	console.log(n1 + n2);
};

showSum(15, 10);

// You can pass variables as arguments
let sampleNumber1 = 30;
let sampleNumber2 = 25;

showSum(sampleNumber1, sampleNumber2);

/*Variable Scopes

	Variables and constant have scopes.
	meaning if a variable or constant is declared outside of a function, any function succeeding it will be able to have access to that variable.

	However, any variable or constant declared inside a function can only be used within that function or code block

	Function scoped variables and constants can only be accessed within the function where they are declared.
*/

	let sample1 = "This is a sample.";
	const sampleConst = "Sample Constant.";

	function sampleFunc(){
		console.log(sample1);
		console.log(sampleConst);
	};

	sampleFunc();

	function sampleFunc2(){
		console.log(sample1);
	};

	sampleFunc2();

	function sampleFunc3(){
		let sample2 = "This is inside a function.";
		const sampleConst2 = "This is in a function.";

		console.log(sample2);
		console.log(sampleConst2);
	};

	sampleFunc3();

	// function sampleFunc4(){
	// 	console.log(sampleConst2);
	// };

	// sampleFunc4();

/* 
	Return keyword allows to return a value
	This also stops the process of the function and any statement after the return should not or will not be processed
	
*/
	function addNum(x,y){
		return x + y;
	};

	// with the return keyword you can return a value and save that value in a variable
	let sampleSum = addNum(2, 3);
	console.log(sampleSum);

	let sampleSum1 = showSum(5, 10);
	console.log(sampleSum1);

	function returnFullName(firstName, middleName, lastName){
		return firstName + middleName + lastName;
	}

	let fullName = returnFullName("Michael", "John", "Smith");
	console.log("My full name is " + fullName);

	function completeDetails(fullName, age, role){
		return {
			fullName: fullName,
			age: age,
			role: role
		}
		// you can return any data type (string, number, boolean, array, object)
		// you can also return a variable created inside a function
	}

	let userName = completeDetails(fullName, 35, "Developer");
	console.log(userName);