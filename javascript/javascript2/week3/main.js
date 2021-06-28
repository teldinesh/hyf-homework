// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const delayTimer = setTimeout(function()
{
    console.log('Called after 2.5 seconds');
  }  , 2500
);

/* 
Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should log out the stringToLog after delay seconds. 
Call the function you have created with some different arguments
*/

function delayStringDisplay(delay,stringToLog){
    setTimeout(function(){
        console.log(`${stringToLog} after ${delay} seconds`);
    },delay)
};

delayStringDisplay(5000,'Invoked');


//Create a button in html. When clicking this button, 
//use the function you created in the previous task to log out the text: 
//Called after 5 seconds 5 seconds after the button is clicked

const button = document.querySelector('button');
button.addEventListener('click',() => {
    setTimeout(function(){
        console.log('called after 5 seconds');
    },5000)
});


//Create two functions and assign them to two different variables. 
//One function logs out Earth, the other function logs out Saturn. 
//Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.

const planetEarth = function(){
    console.log('Planet name is Earth');
}

const planetSaturn = function(){
    console.log('Planet name is Saturn');
}

function planetLogFunction(planet) {
    planet();
}

planetLogFunction(planetEarth);
planetLogFunction(planetSaturn);


//Create a button with the text called "Log location". 
//When this button is clicked the location (latitude, longitude) of the user should be 
//logged out using this browser api

var x = document.getElementById("location");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

//Create a function called runAfterDelay. It has two parameters: delay and callback. 
//When called the function should wait delay seconds and then call the provided callback function. 
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
  }
  
  runAfterDelay(3, function () {
    console.log("logged after 3 seconds");
  });

  //Check if we have double clicked on the page. 
  //A double click is defined by two clicks within 0.5 seconds. 
  //If a double click has been detected, log out the text: "double click!"

  document.getElementById("dblclick").addEventListener("dblclick", myFunction);

function myFunction() {
  document.getElementById("dblclck").innerHTML = "I was double-clicked!";
}

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
//logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true 
//it should call the logFunnyJoke function that should log out a funny joke. And vice versa

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    (shouldTellFunnyJoke === true) ? logFunnyJoke() : logBadJoke();
  }
  function funnyJokeFunc() {
    console.log("A funny joke")
  }
  function badJokeFunc() {
    console.log("A bad joke")
  }
  jokeCreator(true, funnyJokeFunc, badJokeFunc)
  jokeCreator(false, funnyJokeFunc, badJokeFunc)


  //Create funtions that are used in these different ways:

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
//Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested: https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
//Create an object that has a key whose value is a function. Try calling this function.

function function1() { return "calling function1"; }
function function2() { return "calling function2"; }
function function3() { return "calling function3"; }

const functionArray = [function1(), function2(), function3()]
functionArray.forEach(func => func)


//Function declaration
function normalFunction() { return "Normal function"; }

//Anonymous function expression
const noNameFunction = function () { return "Anonymous function"; }

normalFunction();
noNameFunction();

const functionWithObject = {
    caseObject: function () {
        return "This is a function call with a object";
    }
}
functionWithObject.caseObject()