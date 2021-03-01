var menu = document.querySelector(".menu-list")
var menuBtn = document.querySelector(".menu-btn")
var cancelBtn = document.querySelector(".cancel-btn")
var navbar = document.querySelector('.navbar')
var body = document.querySelector('body')

menuBtn.onclick = () =>{
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}

cancelBtn.onclick = () =>{
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")
}

window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}
