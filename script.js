const ulNavbar = document.querySelector('.content-bar');
const humburgerNav = document.querySelector('.humburger-nav input');

humburgerNav.addEventListener("click",() => {
    ulNavbar.classList.toggle('active');
})