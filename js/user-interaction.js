"use strict"

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

let nameRequest = prompt("Please enter your name")
while (nameRequest.length < 1) {
  nameRequest = prompt("You have to enter your name.")
}

// TODO: Show an alert message that welcomes the user based on their input.
alert("Welcome to the page " + nameRequest)

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
let likePizza = prompt("Do you like pizza " + nameRequest + "?")
const correctAnswer = "yes"

while (likePizza.toLowerCase() !== correctAnswer) {
  alert("I'm sorry " + nameRequest + " but that is not allowed.  Please try again with the correct answer.")
  likePizza = prompt("Do you like pizza" + nameRequest + "?" + " Yes or no?")
}
alert("I'm glad that we could come to an agreement.")


