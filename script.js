
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
     if(hamLinks.classList.contains("show")){
       hamLinks.classList.remove("show");
   }
});

main.addEventListener("click",() =>{
   if(hamLinks.classList.contains("show")){
       hamLinks.classList.remove("show");
   }
    
});



window.addEventListener("scroll",() =>{
   if(hamLinks.classList.contains("show")){
       hamLinks.classList.remove("show");
   }
    
});



