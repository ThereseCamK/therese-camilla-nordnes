export function setActiveNav(){
    const links = document.querySelectorAll(".navbar a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        link.classList.remove("active");  
     if( linkPath === currentPath){
        link.classList.add("active")
        }
    });
}
const scrollBtn = document.getElementById("scrollTopBtn");

if(scrollBtn){

scrollBtn.addEventListener("click", () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}