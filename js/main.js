/*variables globals*/
let toggle = document.getElementsByClassName('toggle');
let navItems = document.getElementById('nav-items');


/*Active toggle */
toggle[0].addEventListener('click', e => {
    navItems.classList.toggle('show')
})

/* Dark mode */
