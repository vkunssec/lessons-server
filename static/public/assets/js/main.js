var vknc = document.querySelector(`main > .vknc`);
var sqr_blue = document.querySelector(`main > .square`);

function onload() {
    Array.prototype.forEach.call(document.querySelectorAll("[loaded]"), (el) => {
        el.classList.add("onview");
    });
}

document.addEventListener('DOMContentLoaded', onload);
