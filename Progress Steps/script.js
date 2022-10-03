//themes of the background
let theme1 =
  " linear-gradient(to right, #031a3d, #002949, #003541, #003f2a, #1a4508)";
let theme2 =
  " linear-gradient(to right, #07285a, #004577, #005f74, #007551, #378517)";
let theme3 =
  "linear-gradient(to right, #34527f, #006f9d, #008a99, #00a06f, #4eaf26)";
let themes = [theme1, theme2, theme3];

//call numbers
let number1 = document.getElementsByClassName("first")[0]; //not used , always on
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

//current step of the progress bar
let currentStep = 0;

//function to change background color when we call it
function changeBackground(color) {
  document.body.style.background = color;
}

//function of next button
let nextFunc = function () {
  //make prev button active when we click next button
  prev.disabled = false;
  prev.style.backgroundColor = "red";

  numbers[currentStep].style.backgroundColor = "#43d616";
  numbers[currentStep].style.color = "white";
  numbers[currentStep].style.border = " 4px solid #36cb09";
  lines[currentStep].style.backgroundColor = "#43d616";
  lines[currentStep].style.transition = "all 0.5s ease";

  //change background color when we click on next button
  changeBackground(themes[currentStep]);

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
