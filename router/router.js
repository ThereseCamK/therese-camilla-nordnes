const basePath = "/therese-camilla-nordnes";
import routes from "./routes.js";
import { setActiveNav } from "../src/utils.js";

const NotFound = () => `
    <div>
        <h1>404 - Page Not Found</h1>
        <a href="/" data-link>Home</a>
    </div>
`;

function router(){

    let path = window.location.pathname;

    
    if(path.startsWith(basePath)){
        path = path.replace(basePath, "");
    }

    if(path === "" || path === "/index.html"){
        path = "/";
    }

    const route = routes.find(r => r.path === path);

    const view = route ? route.view : NotFound;

    document.querySelector("#app").innerHTML = view();

    if(route && route.init){
        route.init();
    }

    setActiveNav();
}

function navigateTo(url){

    const fullUrl = basePath + url;

    history.pushState(null, null, fullUrl);

    router();

}

export function initRouter(){

    document.addEventListener("click", (e) => {

        const link = e.target.closest("a[data-link]");

        if(link){

            e.preventDefault();

            navigateTo(link.pathname);

        }

    });

    window.addEventListener("popstate", router);

    document.addEventListener("DOMContentLoaded", router);

}