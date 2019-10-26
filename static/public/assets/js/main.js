var vknc = document.querySelector(`main > .vknc`);
var sqr_blue = document.querySelector(`main > .square`);

function onloaded() {
    function loaded() {
        Array.prototype.forEach.call(document.querySelectorAll("[loaded]"), (el) => {
            el.classList.add("onview");
        });
    }
    setTimeout(loaded, 1000);
}

document.addEventListener('DOMContentLoaded', onloaded);
