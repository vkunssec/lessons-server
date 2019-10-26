document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll(`[fade-in]`);
    elems.forEach((el) => { el.classList.add('onview'); });
});
