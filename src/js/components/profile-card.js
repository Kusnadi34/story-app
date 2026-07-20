import { LitElement, html } from 'lit';
import profileData from '../../data/profile.json';

class ProfileCard extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="profile-card">
        <img src="favicon.png" alt="Profile" class="profile-avatar">
        <h3 class="profile-name">Your Name</h3>
        <p class="text-muted">Fullstack Developer & Tester</p>
        <p>Email: your_email@example.com</p>
        <p>Experience: 15 years</p>
        <p>This story app is built with ❤️ using Lit, Bootstrap, and Sass.</p>
      </div>
    `;
  }
}
customElements.define('profile-card', ProfileCard);
