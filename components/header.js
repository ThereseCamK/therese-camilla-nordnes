export default function Header(){
    return `
        <div class="header">
           <div class="logo">
                <img src="./public/icons/logo1.png" alt="logo">
             
            </div>

            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul class="nav-links" id="nav-links">

                <a href="/" data-link>Home</a>
                <a href="/about" data-link>About</a>
                <a href="/portfolio" data-link>Portfolio</a>

            </ul>
            
        </div>
    `;
}