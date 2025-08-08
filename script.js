
let hamLinks = document.querySelector(".ham__link-container");
let hamicons = document.querySelector(".hamicons");
let hamopen = document.querySelector("#ham-open");
let hamclose = document.querySelector("#ham-close");
let main = document.querySelector("main");

let removeHamLinks = () =>{
    hamLinks.classList.remove("show");
    hamopen.classList.remove("display");
    hamclose.classList.remove("display");
};

hamicons.addEventListener("click",() =>{
    hamLinks.classList.toggle("show");
    hamopen.classList.toggle("display");
    hamclose.classList.toggle("display");
});

hamLinks.addEventListener("click",removeHamLinks);
main.addEventListener("click",removeHamLinks);
window.addEventListener("scroll",removeHamLinks);






