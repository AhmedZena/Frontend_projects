let allPanels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");
let map = document.querySelector(".map");

for (let panel of allPanels) {
  panel.addEventListener("click", function () {
    active.classList.remove("active");
    panel.classList.add("active");
    active = panel;
  });
}
