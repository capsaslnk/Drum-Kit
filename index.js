//Detecting button press

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
  });
}

//Detecting key press

document.addEventListener("keypress", function (e) {
  makeSound(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("/sounds/kick.mp3");
      kick.play();
      break;

    default:
      console.log("Not inlcuded");
  }
}

//Constructor Functions
/*
function HouseKeeper(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

let houseKeeper1 = new HouseKeeper("Timmy", 19, true, ["French", "English"]);
*/
