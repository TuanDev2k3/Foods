const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});




let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    navlist.classList.toggle('open');
    boxSearch.classList.remove('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
let boxSearch = document.querySelector('.box-search');
document.querySelector('#search').onclick = ()=>{
    boxSearch.classList.toggle('active');
    navlist.classList.remove('open');
};