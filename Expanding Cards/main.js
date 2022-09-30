let allPanels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");

for (let panel of allPanels) {
  panel.addEventListener("click", function () {
    active.classList.remove("active");
    panel.classList.add("active");
    active = panel;
    console.log(allPanels);
    //add to local storage
    // localStorage.setItem("active", panel);
  });
}
