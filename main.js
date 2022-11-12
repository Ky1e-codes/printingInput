import Person from "./Person.js";

// create variable for button
// add event listener to button that runs function
// create function that declares variable for input vaulues
// create new instance of Person 
// push new Person to empty array (newPeople) 
// interpolate input into Div with id out

const newPeople = [];


let button = document.getElementById('submit');

button.addEventListener("click",input)

function input() {
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;
  let nAge = document.getElementById("age").value;   
  
  const newPerson = new Person(
    fName,lName,nAge
  );
  newPeople.push(newPerson);

  document.getElementById("out").innerHTML = `Hello, ${fName} ${lName}! You are ${nAge} years old.`;
  console.log(newPeople)
}

/*
  Here you will write your the functionality for your webpage

  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/

