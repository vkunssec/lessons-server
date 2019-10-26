document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const elems = document.querySelectorAll(`[fade-in]`);
        elems.forEach((el) => { 
            el.classList.add('onview'); 
        });
    })(setTimeout(1000));
});

document.addEventListener('scroll', (e) => {
    var body = document.querySelector('body');
    var bodyRect = body.getBoundingClientRect();

    var el = document.querySelector(`main > .vknc`);
    el.style.top = `${200 - bodyRect.y + (bodyRect.y)*0.5}px`;
});
