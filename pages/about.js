export default function about() {

return `
<div class="profile-card ">

    <img 
        src="./public/images/profile.jpg" 
        alt="Therese Camilla Nordnes"
        class="profile-image"
    >

    <div class="profile-info">

        <h2>Therese Camilla Nordnes</h2>

        <p class="profile-role">
            Frontend Developer
        </p>

        <p class="profile-description">
            Jeg bygger brukervennlige og tilgjengelige webgrensesnitt med fokus på
            strukturert kode, god brukeropplevelse og moderne webteknologi.
        </p>

        <div class="profile-links">

            <a href="mailto:theresecnord@gmail.com">
                Email
            </a>

            <a href="https://github.com/ThereseCamK">
                GitHub
            </a>

            <a href="https://www.linkedin.com/in/therese-camilla-nordnes-3a223420b/">
                LinkedIn
            </a>

        </div>

    </div>

</div>
<section class="about-page">

<div class="about-hero reveal">

<h1>Om meg</h1>

<h2 class="typing">
<span id="typing-text"></span>
</h2>

<p>
Hei! Jeg heter Therese og er frontendutvikler med stor interesse for
å bygge brukervennlige og tilgjengelige webgrensesnitt.
</p>

</div>


<div class="about-content reveal">

<h2>Min bakgrunn</h2>

<p>
Jeg arbeider i dag som IT-lærer ved GET Academy hvor jeg underviser i
HTML, CSS, JavaScript, C# og SQL.
</p>

<p>
Her veileder jeg studenter i programmering, problemløsning og utviklingsprosjekter,
og jeg har utviklet en sterk forståelse for strukturert kode og gode utviklingsprinsipper.
</p>

<p>
Jeg studerer også frontendutvikling ved Noroff hvor jeg videreutvikler
kompetansen min innen moderne webutvikling.
</p>

</div>


<div class="developer-values reveal">

<h2>Hvordan jeg jobber</h2>

<ul>

<li>Semantisk HTML</li>
<li>Responsivt design</li>
<li>Tilgjengelige grensesnitt</li>
<li>Tydelig separasjon mellom HTML, CSS og JavaScript</li>
<li>Ren og vedlikeholdbar kode</li>

</ul>

</div>


<div class="technologies reveal">

<h2>Teknologier</h2>

<div class="tech-grid">

<span class="tech-card">HTML</span>
<span class="tech-card">CSS</span>
<span class="tech-card">JavaScript</span>
<span class="tech-card">Git</span>
<span class="tech-card">GitHub</span>
<span class="tech-card">REST API</span>
<span class="tech-card">SQL</span>
<span class="tech-card">C#</span>

</div>

</div>


<div class="personal reveal">

<h2>Litt om meg</h2>

<p>
Jeg liker å bygge små prosjekter for å lære nye teknologier og
utvikle ferdighetene mine innen frontend.
</p>

<p>
Jeg er spesielt interessert i frontend-arkitektur, brukeropplevelse
og hvordan godt design kan gjøre komplekse systemer enklere å bruke.
</p>

</div>


<div class="contact reveal">

<h2>Kontakt</h2>

<p>Email: theresecnord@gmail.com</p>
<p>Tlf: 413 77 965</p>

<p>
<a href="https://github.com/ThereseCamK" target="_blank">GitHub</a>
</p>

<p>
<a href="https://www.linkedin.com/in/therese-camilla-nordnes-3a223420b/" target="_blank">LinkedIn</a>
</p>

</div>

</section>

`;

}
export function initAboutPage(){

startTypingEffect();
initRevealAnimation();
initTechHover();

}
function startTypingEffect(){

const words = [
"Frontend Developer",
"JavaScript Developer",
"UI / UX Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const element = document.getElementById("typing-text");

if(!element) return;

function type(){

const current = words[wordIndex];

if(!deleting){

element.textContent = current.substring(0,charIndex+1);
charIndex++;

if(charIndex === current.length){

deleting = true;
setTimeout(type,1500);
return;

}

}else{

element.textContent = current.substring(0,charIndex-1);
charIndex--;

if(charIndex === 0){

deleting = false;
wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

}

}

setTimeout(type,100);

}

type();

}




// Scroll animation


function initRevealAnimation(){

function reveal(){

const elements = document.querySelectorAll(".reveal");

elements.forEach(el => {

const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
const visiblePoint = 150;

if(elementTop < windowHeight - visiblePoint){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);

reveal();

}




// Tech hover


function initTechHover(){

const cards = document.querySelectorAll(".tech-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "scale(1.05)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "scale(1)";
});

});

}