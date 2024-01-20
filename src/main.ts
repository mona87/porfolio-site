import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class='wrapper'>
  <div class="container">
    <header id="home">
      <nav class="navbar">
        <h2 class='name'>Ramona Bellamy</h2>
        <ul class="navbar__ul">
          <li class='link'><a href="#home">Home</a></li>
          <li class='link'><a href="#portfolio">Projects</a></li>
          <li class='link'><a href="#skills">Skills</a></li>
          <li class='link'><a href="#contact">Contact</a></li>
          <li>
            <!-- Dark Theme Toggle  -->
            <button class='darkmode'><i class="fas fa-moon"></i></button>
          </li>
        </ul>
      </nav>
      <div class="header__container">
        <img src="https://avatars.githubusercontent.com/u/88958992?v=4" alt="profile-image">
        <div class="header__text__container">
          <p class="header__text">Hi! I am a front-end designer and developer. Here, I've created a simple beginner friendly portfolio template responsive across different browsers and devices. Feel free to use and make any changes as per your need.</p>
        </div>
      </div>
    </header>
  </div>

  <main class="portfolio" id='portfolio'>
    <h2 class='portfolio__header'>Projects</h2>
    <div class="portfolio__container">
    <a href="https://jqrj7j.csb.app/">
      <article class='card' >
        <img src='https://cdn-icons-png.flaticon.com/512/3437/3437297.png' alt="page">
        <div class="text-container">
          <h2>Movie App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </article>
      </a>

      <a href="https://qipvv5.csb.app/">
      <article class='card'>
        <img src='https://cdn-icons-png.flaticon.com/512/993/993725.png' alt="page">
        <div class="text-container">
          <h2>Trivia Game App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </article>
      </a>

      <a href="https://7cmcdj.csb.app/">
      <article class='card'>
        <img src='https://cdn-icons-png.flaticon.com/512/1055/1055645.png' alt="app">
        <div class="text-container">
          <h2>Design System: Table Component</h2>
          <p>Lor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </article>
      </a>


    </div>

    <section class='skills' id='skills'>
      <h2>Skills</h2>
      <article class="skills-container">
        <div class="skills__item" data-aos='fade-up'>
          <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="JS">
          <p>Javascript</p>
        </div>

        <div class="skills__item" data-aos='fade-up'>
          <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="HTML5">
          <p>HTML5</p>
        </div>

        <div class="skills__item" data-aos='fade-up'>
          <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css">
          <p>CSS3</p>
        </div>

        <div class="skills__item" data-aos='fade-up'>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma">
          <p>Figma</p>
        </div>

        <div class="skills__item" data-aos='fade-up'>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968559.png" alt="Github">
          <p>Github</p>
        </div>
      </article>
    </section>

    <footer>
      <div class="wrapper">
        <div class="footer__text-container" id='contact'>
          <h2>Contact</h2>
          <p>Lets connect if you want to collaborate...</p>
        </div>
        <div class="footer__text-container1">
          <p><span class='phone'>Phone</span> <strong>+1 (111) 222-3333</strong></p>
          <p><span class='email'>Email</span> <strong>123@gmail.com</strong></p>
        </div>
      </div>
      <hr class='footer__nav-hr'>
      <nav class="footer__nav">
        <h2>Sachin</h2>
        <ul class='footer__nav-links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li class='link'><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p class='to-top'><a href="#top"><strong>BACK TO TOP</strong></a></p>
      </nav>
    </footer>
  </main>
</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('.darkmode')!)
