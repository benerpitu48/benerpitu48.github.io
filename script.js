document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    };

    const sr = ScrollReveal({
        distance: '50px',
        duration: 2600,
        delay: 450,
        reset: true
    });

    sr.reveal('.kata-kata', { delay: 200, origin: 'top' });
    sr.reveal('.icon', { delay: 666, origin: 'left' });
});
