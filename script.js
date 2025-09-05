let hamLinks = document.querySelector(".ham__link-container");
let hamicons = document.querySelector(".hamicons");
let hamopen = document.querySelector("#ham-open");
let hamclose = document.querySelector("#ham-close");
let main = document.querySelector("main");

let removeHamLinks = () => {
  hamLinks.classList.remove("show");
  hamopen.classList.remove("display");
  hamclose.classList.remove("display");
};

hamicons.addEventListener("click", () => {
  hamLinks.classList.toggle("show");
  hamopen.classList.toggle("display");
  hamclose.classList.toggle("display");
});

hamLinks.addEventListener("click", removeHamLinks);
main.addEventListener("click", removeHamLinks);
window.addEventListener("scroll", removeHamLinks);

// form handling
let submitBtn = document.querySelector("#form-submit");
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
submitBtn.addEventListener("click", () => {
  alert("Form Submitted Successfully!");
  form.reset();
});
