export default function footer() {
  return `

<footer class="footer">
<div class="footer-logo">
<img src="./public/icons/tcn-icon-logo.png" alt="logo">
</div>
  <div class="footer-container">

    <div class="footer-brand">
    

      <h3>Therese Nordnes</h3>
      <p>Frontend Developer</p>
    </div>

    <div class="footer-links">

      <div class="footer-nav">
        <h4>Navigation</h4>
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
        <a href="/portfolio" data-link>Portfolio</a>
      </div>

      <div class="footer-contact">
        <h4>Contact</h4>
        <p>Email: theresecnord@gmail.com</p>
        <p>Tlf: 413 77 965</p>
        <a href="https://github.com/ThereseCamK">GitHub</a>
        <a href="https://www.linkedin.com/in/therese-camilla-nordnes-3a223420b/">LinkedIn</a>
      </div>

    </div>

  </div>

  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Therese Camilla Nordnes</p>
  </div>

</footer>

`;
}
