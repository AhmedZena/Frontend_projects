//call all pictures that will change themes on click
let redTheme = document.getElementById("redTheme");
let blackTheme = document.getElementById("blackTheme");
let greyTheme = document.getElementById("greyTheme");
console.log(redTheme);

//call container
let container = document.getElementsByClassName("container");

//call image
let image = document.getElementsByClassName("imagePic");

//call all a inside nav
let nav = document.querySelectorAll("nav ul li a");
console.log(nav);

//call allProducts
let allProducts = document.getElementsByClassName("allProducts");

//red theme
redTheme.addEventListener("click", function () {
  console.log("red theme");
  document.body.style.background =
    " linear-gradient(to right, #000000, #c40000)";
  container[0].style.background = "rgba(255, 255, 255, 0.1)";
  image[0].src = "images/red_iphone.png ";

  //chnage nav color on hover
  for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function () {
      nav[i].style.color = "red";
    });
    nav[i].addEventListener("mouseout", function () {
      nav[i].style.color = "white";
    });
  }
});

//black theme
blackTheme.addEventListener("click", function () {
  console.log("black theme");
  document.body.style.background =
    "linear-gradient(to right, #000000, #14000b, #1a0019, #180528, #000e39)";
  container[0].style.background = "rgba(0, 0, 0, 0.3)";
  image[0].src = "images/black_iphone.png";

  //change color of nav on hover
  for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function () {
      nav[i].style.color = "blue";
    });
    nav[i].addEventListener("mouseout", function () {
      nav[i].style.color = "white";
    });
  }
});

//grey theme
greyTheme.addEventListener("click", function () {
  console.log("grey theme");
  document.body.style.background =
    "  linear-gradient(to right, #000000, #1f1f1f, #373737, #525252, #6e6e6e, #818181, #949494, #a8a8a8, #b6b6b6, #c4c4c4, #d2d2d2, #e0e0e0)";
  container[0].style.background = "rgba(0, 0, 0, 0.1)";
  image[0].src = "images/grey_iphone.png";

  //change color of nav on hover
  for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("mouseover", function () {
      nav[i].style.color = "grey";
    });
    nav[i].addEventListener("mouseout", function () {
      nav[i].style.color = "white";
    });
  }
});
