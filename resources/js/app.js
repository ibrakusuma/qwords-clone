import './bootstrap';
import 'flowbite';

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navbar-menu');

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


// MENU
// Cloud Hosting
const cloudHosting = document.querySelector('#cloud-hosting');
const cloudHostingMenu = document.querySelector('#cloud-hosting-menu');

cloudHosting.addEventListener("click", function() {
    cloudHostingMenu.classList.toggle('hidden');
})


// SCROLL UP
window.onscroll = function() {
    const scrollUp = document.querySelector('#scroll-up');
    const searchDomain = document.querySelector('#search-domain');
    const scrollUpAppear = searchDomain.offsetTop;

    if (window.scrollY <= scrollUpAppear) {
        scrollUp.classList.add('hidden');
    } else {
        scrollUp.classList.remove('hidden');
    }
}