//call all filters on the page
let saturation = document.getElementById("saturation");
let contrast = document.getElementById("contraste");
let brightness = document.getElementById("brightness");
let hue = document.getElementById("hue-rotate");
let sepia = document.getElementById("sepia");
let greyscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");

//call download
let download = document.getElementById("download");

//call reset
let reset = document.querySelector("span");

//call upload
let upload = document.getElementById("upload");

//call img
let img = document.getElementById("img");

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
});

//make the filters work
// saturation.addEventListener("change", function () {
//   img.style.filter = `saturate(${this.value}%)`;
// });

let filters = document.querySelectorAll("ul li input");
filters.forEach(function (filter) {
  filter.addEventListener("change", function () {
    img.style.filter = `
    saturate(${saturation.value}%)
    contrast(${contraste.value}%)
    brightness(${brightness.value}%)
    hue-rotate(${hue.value}deg)
    sepia(${sepia.value}%)
    grayscale(${greyscale.value})
    blur(${blur.value}px)

    `;
    console.log(filter.value);
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

//make the download button work
download.addEventListener("click", function () {
  let a = document.createElement("a");
  a.href = img.src;
  a.download = "image.png";
  a.click();
  
});
