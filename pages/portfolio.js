export default function Portfolio(){

return `

<section class="portfolio-page">

<h1>Prosjekter</h1>

<p class="portfolio-intro">
Her er noen prosjekter jeg har jobbet med hvor jeg har fokusert på
frontendutvikling, JavaScript og API-integrasjoner.
</p>

<div class="portfolio-grid">

${projectCard(
"Community Science Museum - nettside",
"Skoleprosjekt fra Noroff i HTML og CSS.",
"./public/images/museum.png",
"HTML, CSS",
"https://theresecamk.github.io/community-science-museum-sp/",
"https://github.com/ThereseCamK/community-science-museum-sp"
)}

${projectCard(
"Game Hub - online spill butikk",
"Fiktiv Webapp som henter data fra et API og viser det i et responsivt grensesnitt. Skolesprosjekt i javascript",
"./public/images/gamehub.png",
"JavaScript, REST API",
"https://theresecamk.github.io/game-hub-js/",
"https://github.com/ThereseCamK/game-hub-js"
)}

${projectCard(
"Game Hub - online spill butikk uten javascript",
"Første Design prosjekt på Noroff. hvor jeg brukte figma først før kode i HTML og CSS",
"./public/images/gamhubDesign.png",
"Figma, HTML, CSS",
"https://theresecamk.github.io/game-hub/",
"https://github.com/ThereseCamK/game-hub"
)}
${projectCard(
"Webinar -christmasgame",
"Ett lite javascript spill jeg gjorde med en venninne, vi brukte til ett webinar",
"./public/images/christmas-webinar.png",
"javascript, HTML, CSS",
"https://theresecamk.github.io/Webinar/",
"https://github.com/ThereseCamK/Webinar"
)}


</div>

</section>

`

}
function projectCard(title, description, image, tech, iolink, github){

return `

<div class="project-card ">

<img src="${image}" alt="${title}">

<h3>${title}</h3>

<p>${description}</p>

<span class="project-tech">${tech}</span>

<div class="project-links">
<a href="${iolink}" target="_blank">Project Link</a>
<a href="${github}" target="_blank">GitHub</a>

</div>

</div>

`

}