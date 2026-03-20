export default function Header(){
    return `
        <div class="header">
            <ul class="navbar">
                <li><a href="/" data-link class="active"> Hjem </a></li>
                <li><a href="/about" data-link> Om/Kontakt  </a></li>
                <li><a href="/portfolio" data-link> Portfolio </a></li>
            </ul>
            
        </div>
    `;
}