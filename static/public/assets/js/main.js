document.addEventListener('DOMContentLoaded', () => {
    var vknc = document.querySelector(`main > .vknc[fade-in]`);
    var square = document.querySelector(`main > .square[fade-in]`);

    function fadeInAnimVknc() {

        var positionTop = 0;
        var paddingLeft = 0;
        var opacity = 0.0;

        function anim() {
            vknc.style.top = `${positionTop*2.5}px`;
            vknc.style.opacity = `${opacity}`;
            vknc.style.paddingLeft = `${paddingLeft}%`;
            positionTop++;
            paddingLeft = paddingLeft + 0.07;
            opacity = opacity + 0.01;
            if (positionTop > 100) cancelAnimationFrame(idAFVknc);
            else idAFVknc = requestAnimationFrame(anim);
        }

        var idAFVknc = requestAnimationFrame(anim);

    }
    
    function fadeInAnimSquare() {

        var positionRight = -363;
        var opacity = 0.0;

        function anim() {
            square.style.right = `${positionRight}px`;
            square.style.opacity = `${opacity}`;
            positionRight++;
            opacity = opacity + 0.01;
            if (positionRight === -121 || opacity > 1) cancelAnimationFrame(idAFSquare);
            else idAFSquare = requestAnimationFrame(anim);
        }

        var idAFSquare = requestAnimationFrame(anim);
    }

    fadeInAnimVknc();
    fadeInAnimSquare();

});

document.addEventListener('scroll', () => {
    let body = document.querySelector('body');
    let bodyRect = body.getBoundingClientRect();

    let vknc = document.querySelector(`main > .vknc`);
    vknc.style.top = `${250 - bodyRect.y + (bodyRect.y*0.5)}px`;

    let square = document.querySelector(`main > .square`);
    square.style.top = `${128 + (bodyRect.y*0.1)}px`;
});
