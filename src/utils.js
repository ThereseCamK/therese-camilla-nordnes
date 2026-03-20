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

let startX = 0;
let currentX = 0;
let isDragging = false;


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});


document.querySelectorAll("[data-link]").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


navLinks.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

navLinks.addEventListener("touchmove", (e) => {

  if(!isDragging) return;

  currentX = e.touches[0].clientX;
  let diff = currentX - startX;


  if(diff > 0){
    navLinks.style.transform = `translateX(${diff}px)`;
  }

});

navLinks.addEventListener("touchend", () => {

  isDragging = false;

  let diff = currentX - startX;

  if(diff > 100){
    closeMenu();
  } else {
    navLinks.style.transform = "translateX(0)";
  }

});


document.addEventListener("touchstart", (e) => {


  if(e.touches[0].clientX > window.innerWidth - 30){
    startX = e.touches[0].clientX;
    isDragging = true;
  }

});

document.addEventListener("touchmove", (e) => {

  if(!isDragging) return;

  currentX = e.touches[0].clientX;
  let diff = startX - currentX;

  if(diff > 0){
    navLinks.classList.add("active");
    hamburger.classList.add("active");

    navLinks.style.transform = `translateX(${Math.max(70 - diff, 0)}%)`;
  }

});

document.addEventListener("touchend", () => {
  isDragging = false;
  navLinks.style.transform = "";
});



function closeMenu(){
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
  navLinks.style.transform = "";
}



}