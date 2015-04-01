import Slider from "./slider";

var title = document.createElement("div");
title.innerText = "I'm a Slider written on ES6 module";
document.body.appendChild(title);

var slider = new Slider();
document.body.appendChild(slider.getDOM());

slider.init();

var footer = document.createElement("div");
footer.innerText = "==================================="
document.body.appendChild(footer);