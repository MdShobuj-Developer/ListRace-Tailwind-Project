const navLinks = document.querySelector('.nav-links');
let navLinkItems = document.querySelectorAll('.nav-items');
function onToggleMenu(e){
    

    navLinks.classList.toggle('top-[50px]');
    
};

navLinkItems.forEach(navLinkItems => {
    navLinkItems.addEventListener('click', function() {
        navLinks.classList.toggle('top-[50px]');
    });
});