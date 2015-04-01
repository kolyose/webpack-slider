var Slider = require("./slider");

var title = document.createElement("div");
title.innerText = "I'm a Simple Slider Component";
document.body.appendChild(title);

var slider = new Slider();
document.body.appendChild(slider.getDOM());

slider.init();

var footer = document.createElement("div");
footer.innerText = "==================================="
document.body.appendChild(footer);