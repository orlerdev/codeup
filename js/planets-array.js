(function () {
  "use strict";

  // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
  let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Uranus"];

  // function for logging the planets array
  function logPlanets() {
    console.log("Here is the list of planets:");
    console.log(planets);
    console.log("---- ---- ---- ----");
  }

  logPlanets();

  console.log("Adding \"The Sun\" to the beginning of the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  planets.unshift("The Sun");
  logPlanets();

  console.log("Adding \"Pluto\" to the end of the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  planets.push("Pluto");
  logPlanets();

  console.log("Removing \"The Sun\" from the beginning of the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  planets.slice(0, 1);
  logPlanets();

  console.log("Removing \"Pluto\" from the end of the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  planets.slice(0, -1);
  logPlanets();

  console.log("Finding and logging the index of \"Earth\" in the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  console.log(planets.indexOf("Earth"));

  console.log("Using splice to remove the planet after \"Earth\".");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  planets.splice(3, 1);
  logPlanets();

  console.log("Using splice to add back the planet after \"Earth\".");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  planets.splice(3, 0, "Mars");
  logPlanets();

  console.log("Reversing the order of the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  Array.reverse(planets);
  logPlanets();

  console.log("Sorting the planets array.");
  // TODO: Read the console.log() statement above. Write code to perform the step it describes.
  Array.sort(planets);
  logPlanets();
})();
