//call all filters on the page
let saturation = document.getElementById("saturation");
let contrast = document.getElementById("contraste");
let brightness = document.getElementById("brightness");
let hue = document.getElementById("hue-rotate");
let sepia = document.getElementById("sepia");
let greyscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");

//make canvas to save img in it and download it
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//call download
let download = document.getElementById("download");

//call reset
let reset = document.querySelector("span");

//call upload
let upload = document.getElementById("upload");

//call img
let img = document.getElementById("img");
let imgg = img;
//call img box
let imgBox = document.querySelector(".img-box");

//make the imgbox download and reset button none visible when the page loads
window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
};

//make the imgbox download and reset button visible when the user uploads an image
//make the function to upload the image too
upload.addEventListener("change", function () {
  resetValues();
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";
  //   img.src = URL.createObjectURL(this.files[0]);
  let file = new FileReader();
  file.readAsDataURL(this.files[0]);
  file.onload = function () {
    img.src = this.result;
  };
  //function to download the image to canvas
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
});

//make the filters work
// saturation.addEventListener("change", function () {
//   img.style.filter = `saturate(${this.value}%)`;
// });

let filters = document.querySelectorAll("ul li input");
filters.forEach(function (filter) {
  filter.addEventListener("change", function () {
    //hide img and show canvas when the user changes the filter any time
    //i do that coz reset make the img visible and the canvas hidden
    img.style.display = "none";
    canvas.style.display = "block";

    ctx.filter = `
    saturate(${saturation.value}%)
    contrast(${contraste.value}%)
    brightness(${brightness.value}%)
    hue-rotate(${hue.value}deg)
    sepia(${sepia.value}%)
    grayscale(${greyscale.value})
    blur(${blur.value}px)

    `;
    // console.log(filter.value);
    //make the canvas work that ctx do that
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

//reset values
function resetValues() {
  img.style.filter = "none";
  saturation.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  hue.value = 0;
  sepia.value = 0;
  greyscale.value = 0;
  blur.value = 0;
}

function resetValue() {
  img.style.filter = "block";
  saturation.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  hue.value = 0;
  sepia.value = 0;
  greyscale.value = 0;
  blur.value = 0;
  //   ctx = "none";
  //   img.style.display = "block";
  //clear canvas and ctx and make the img visible
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  img.style.display = "block";
  canvas.style.display = "none";
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

//make the download button work
//that way makes the image download as the original image so it is awful
download.addEventListener("click", function () {
  //   let a = document.createElement("a");
  //   a.href = img.src;
  //   a.download = "image.png";
  //   a.click();

  //this way makes the image download as the canvas image so it is better
  download.href = canvas.toDataURL("image/png");
});
