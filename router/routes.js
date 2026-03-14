//Views

import Home, {initHome} from "../pages/home.js";
import About , {initAboutPage} from "../pages/about.js";
import Portfolio from "../pages/portfolio.js";


const routes = [
    { path: "/", view: Home, init: initHome },
    { path: "/about", view: About, init: initAboutPage},
    { path: "/portfolio", view: Portfolio}
];

export default routes;