const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== location.pathname) {
  history.replaceState(null, null, redirect);
}
import { initRouter } from "./router/router.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

initRouter();