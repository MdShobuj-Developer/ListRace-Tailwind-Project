const navLinks = document.querySelector('.nav-links');
let navLinkItems = document.querySelectorAll('.nav-items');
function onToggleMenu(e){
    // if (e.src = '/assets/images/toggle icons/burger-bar.png') {
    //     e.src = '/assets/images/toggle icons/close.png';
    //   } else {
    //     e.src = '/assets/images/toggle icons/burger-bar.png';
    //   }
    
    //   e.src = '/assets/images/toggle icons/burger-bar.png'? e.src = '/assets/images/toggle icons/close.png':e.src = '/assets/images/toggle icons/burger-bar.png';

    navLinks.classList.toggle('top-[50px]');
    
};

navLinkItems.forEach(navLinkItems => {
    navLinkItems.addEventListener('click', function() {
        navLinks.classList.toggle('top-[50px]');
    });
});