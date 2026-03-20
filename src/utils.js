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
