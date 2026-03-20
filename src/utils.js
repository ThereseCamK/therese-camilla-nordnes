export function setActiveNav(){

  const basePath = window.location.hostname.includes("github.io")
    ? "/therese-camilla-nordnes"
    : "";

  let path = window.location.pathname;

  if(path.startsWith(basePath)){
    path = path.replace(basePath, "");
  }

  if(path === "") path = "/";

  document.querySelectorAll("[data-link]").forEach(link => {

    link.classList.remove("active");

    if(link.pathname === path){
      link.classList.add("active");
    }

  });

}

export function initHamburger(){

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navLinks.classList.toggle("active");

});



document.querySelectorAll("[data-link]").forEach(link => {

link.addEventListener("click", () => {

hamburger.classList.remove("active");
navLinks.classList.remove("active");

});

});

}