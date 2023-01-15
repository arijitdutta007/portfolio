const body = document.querySelector("body");
const Navbar = document.querySelector(".navbar");
const scrollbtn = document.querySelector(".scroll-up-btn");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("scrolloff");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("scrolloff");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? Navbar.classList.add("puppy"):Navbar.classList.remove("puppy");
    this.scrollY > 500 ? scrollbtn.classList.add("show"):scrollbtn.classList.remove("show");
} 


var typed = new Typed(".auto-type", {
    strings: ["Web Developer","Developer ","Designer "],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true 
});