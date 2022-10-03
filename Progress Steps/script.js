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

  //increase current step to go to the next step
  currentStep++;

  //when i reach final step disable next button and change background color
  // and disable next button coz no thing to do next
  if (currentStep == numbers.length) {
    next.style.backgroundColor = "#c3c5c7";
    prev.style.backgroundColor = "red";
    next.disabled = true;
    //disable next button
    prev.disabled = false;
  }
};

//prev button function

let prevFunc = function () {
  //make next button active when we click prev button
  next.style.backgroundColor = "#43d616";
  next.disabled = false;
  // decrease current step to go to the prev step
  currentStep--;
  numbers[currentStep].style.backgroundColor = "#fff";
  numbers[currentStep].style.color = "black";
  numbers[currentStep].style.border = " 4px solid #c3c5c7";
  lines[currentStep].style.backgroundColor = "#c3c5c7";

  //change background color when we click on prev button
  changeBackground(themes[currentStep - 1]);

  //disable prev button when we reach first step and reset background color
  if (currentStep == 0) {
    prev.style.backgroundColor = "#c3c5c7";
    prev.disabled = true;

    //return background color to the first shape
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
