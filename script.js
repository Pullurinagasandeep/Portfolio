
let hamLinks = document.querySelector(".ham__link-container");
let hamicons = document.querySelector(".hamicons");
let hamopen = document.querySelector("#ham-open");
let hamclose = document.querySelector("#ham-close");
let main = document.querySelector("main");

hamicons.addEventListener("click",() =>{
    hamLinks.classList.toggle("show");
    hamopen.classList.toggle("display");
    hamclose.classList.toggle("display");
});

hamLinks.addEventListener("click",() =>{
    
    hamLinks.classList.remove("show");
    hamopen.classList.toggle("display");
    hamclose.classList.toggle("display");
});

main.addEventListener("click",() =>{
    if(hamLinks.classList.contains("show"){     
        hamLinks.classList.remove("show");
        hamopen.classList.remove("display");
        hamclose.classList.add("display");
    }
});



window.addEventListener("scroll",() =>{
    if(hamLinks.classList.contains("show"){     
        hamLinks.classList.remove("show");
        hamopen.classList.remove("display");
        hamclose.classList.add("display");
    }
});



