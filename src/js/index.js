import '../sass/main.scss';


import 'bootstrap';


import './components/app-header.js';
import './components/story-list.js';
import './components/add-story-form.js';
import './components/profile-card.js';
import './components/app-footer.js';


import storyData from '../data/story-dummy.json';


function renderPage() {
  const app = document.getElementById('app');
  const hash = window.location.hash || '#home';

  
  const stories = storyData.listStory || [];

  let pageContent = '';
  switch (hash) {
    case '#home':
      pageContent = `
        <div class="home-page">
          <div class="hero text-center">
            <div class="container">
              <h1>Welcome to Story App</h1>
              <p class="lead">Share your moments with the world</p>
            </div>
          </div>
          <div class="container">
            <story-list stories='${JSON.stringify(stories)}'></story-list>
          </div>
        </div>
      `;
      break;
    case '#add':
      pageContent = `
        <div class="add-page">
          <div class="container">
            <div class="form-container">
              <h2 class="text-center mb-4">Add New Story</h2>
              <add-story-form></add-story-form>
            </div>
          </div>
        </div>
      `;
      break;
    case '#profile':
      pageContent = `
        <div class="profile-page">
          <div class="container">
            <profile-card></profile-card>
          </div>
        </div>
      `;
      break;
    default:
      pageContent = `<h2>Page not found</h2>`;
  }

  app.innerHTML = `
    <app-header></app-header>
    <main class="py-4">
      ${pageContent}
    </main>
    <app-footer></app-footer>
  `;
}


renderPage();


window.addEventListener('hashchange', renderPage);