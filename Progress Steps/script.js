// let themee = (document.body.style.background =
//   "#f3f3f3 url('img_tree.png') no-repeat right top");

//theme of the background
// let theme1 =
//   " linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12) ";
// let theme1 = "linear-gradient(to right, #43d616, #43d616)";
//  linear-gradient(to right, #031a3d, #002949, #003541, #003f2a, #1a4508);
// background-image: linear-gradient(to right, #07285a, #004577, #005f74, #007551, #378517);
let theme1 =
  " linear-gradient(to right, #031a3d, #002949, #003541, #003f2a, #1a4508)";

let theme2 =
  " linear-gradient(to right, #07285a, #004577, #005f74, #007551, #378517)";

// background-image: linear-gradient(to right, #2b456d, #005c85, #00727f, #00845b, #408f1f);
// background-image: linear-gradient(to right, #34527f, #006f9d, #008a99, #00a06f, #4eaf26);
let theme3 =
  "linear-gradient(to right, #34527f, #006f9d, #008a99, #00a06f, #4eaf26)";
// let theme1 = "#43d616",
//   theme2 = "#d6d6d6",
//   theme3 = "#d6d6d6";

let themes = [theme1, theme2, theme3];

//call numbers
let number1 = document.getElementsByClassName("first")[0];
let number2 = document.getElementsByClassName("second")[0];
let number3 = document.getElementsByClassName("third")[0];
let number4 = document.getElementsByClassName("fourth")[0];
let numbers = [number2, number3, number4];

//call lines
let line1 = document.getElementsByClassName("firstLine")[0];
let line2 = document.getElementsByClassName("secondLine")[0];
let line3 = document.getElementsByClassName("thirdLine")[0];
let lines = [line1, line2, line3];

//call buttons
let next = document.getElementsByClassName("next")[0];
let prev = document.getElementsByClassName("prev")[0];

let currentStep = 0;
// let currentStep = 0;

//function of next button

//function of next button
// document.body.style.backgroundColor = "red";
function changeBackground(color) {
  document.body.style.background = color;
}
let nextFunc = function () {
  prev.disabled = false;
  //   for (let currentStep = 0; currentStep < numbers.length - 1; currentStep++) {
  //   numbers[currentStep].style.backgroundColor = "#43d616";
  //   numbers[currentStep].style.color = "white";
  //   numbers[currentStep].style.border = " 4px solid #36cb09";
  numbers[currentStep].style.backgroundColor = "#43d616";
  numbers[currentStep].style.color = "white";
  numbers[currentStep].style.border = " 4px solid #36cb09";
  lines[currentStep].style.backgroundColor = "#43d616";
  lines[currentStep].style.transition = "all 0.5s ease";

  changeBackground(themes[currentStep]);

  //change background color

  prev.style.backgroundColor = "red";

  currentStep++;
  currentStep = currentStep;
  console.log(currentStep);
  if (currentStep == numbers.length) {
    next.style.backgroundColor = "#c3c5c7";
    prev.style.backgroundColor = "red";
    next.disabled = true;
    //disable next button
    prev.disabled = false;
  }

  // break;
};
// if (currentStep == numbers.length) {
//   break;
//   }
// };

//function of prev button

let prevFunc = function () {
  next.style.backgroundColor = "#43d616";
  next.disabled = false;
  //   for (let currentStep = currentStep; currentStep >= 0; currentStep--) {
  console.log(currentStep);
  currentStep--;
  numbers[currentStep].style.backgroundColor = "#fff";
  numbers[currentStep].style.color = "black";
  numbers[currentStep].style.border = " 4px solid #c3c5c7";
  lines[currentStep].style.backgroundColor = "#c3c5c7";

  changeBackground(themes[currentStep - 1]);

  //   currentStep = currentStep;
  console.log(currentStep);
  //   if (currentStep == 0) {
  //       prev.style.backgroundColor = "#c3c5c7";
  //     }
  // break;

  //disable prev button
  if (currentStep == 0) {
    prev.style.backgroundColor = "#c3c5c7";
    prev.disabled = true;

    // linear-gradient(to right, #020c1b, #001d2a, #002a2b, #00371c, #2c3f01);

    document.body.style.background =
      " linear-gradient(to right,#020c1b, #001d2a, #002a2b, #00371c, #2c3f01)";
  }
};
// };
next.addEventListener("click", nextFunc);
prev.addEventListener("click", prevFunc);

// window.addEventListener("load", function () {
//   changeBackground(themes[3]);
// });
