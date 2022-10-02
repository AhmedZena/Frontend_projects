let allPanels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");
let map = document.querySelector(".map");

for (let panel of allPanels) {
  panel.addEventListener("click", function () {
    active.classList.remove("active");
    panel.classList.add("active");
    active = panel;

    //show map when active
    //     if (panel.classList.contains("london")) {
    //       map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1270518.0611301179!2d-0.274579!3d51.541086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1664641992654!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    //       console.log("london");
    //     } else if (panel.classList.contains("paris")) {
    //       map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.36504112784!2d2.2066047600383456!3d48.85899547696482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2seg!4v1664642515829!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    //       console.log("paris");
    //     } else if (panel.classList.contains("Cairo")) {
    //       map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.749782485504!2d31.23571131518253!3d30.04441998187666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581f3f0b91f8d7%3A0x7b0e4c2f4f4b0c7!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1664642571009!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    //       console.log("cairo");
    //     } else if (panel.classList.contains("Abu_Dhabi")) {
    //       map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14449.29878195374!2d54.36666997647439!3d24.466666666666665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c1f0b5b0a7b%3A0x2a2e0b0f6b1c8c0!2sAbu%20Dhabi%2C%20UAE!5e0!3m2!1sen!2seg!4v1664642618899!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    //       console.log("abu_dhabi");
    //     } else if (panel.classList.contains("washington")) {
    //       map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.979672740713!2d-77.1197596845805!3d38.90719237956256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b77a5b4c7b0d%3A0x4f4c1c45a3b8a1d1!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2seg!4v1664642658033!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    //       console.log("washington");
    //     }
  });
}
