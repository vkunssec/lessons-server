var vknc = document.querySelector(`main > .vknc`);
var sqr_blue = document.querySelector(`main > .square`);

function onloaded() {
    function loaded() {
        Array.prototype.forEach.call(document.querySelectorAll("[fade-in]"), (el) => {
            el.classList.add("onview");
        });
    }
    setTimeout(loaded, 100);
}

document.addEventListener('DOMContentLoaded', onloaded);
