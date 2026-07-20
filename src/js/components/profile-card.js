import { LitElement, html, css } from 'lit';
import profileData from '../../data/profile.json';

class ProfileCard extends LitElement {
  static styles = css`
    .profile-card {
      text-align: center;
      padding: 20px;
      background: #fffbeb;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .profile-card img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #d97706;
    }
    .profile-card h2 { color: #78350f; }
    .skill-badge {
      display: inline-block;
      background: #d97706;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      margin: 4px;
      font-size: 14px;
    }
  `;

  render() {
    return html`
      <div class="profile-card">
        <img src="${profileData.photoUrl}" alt="${profileData.name}">
        <h2>${profileData.name}</h2>
        <p><strong>${profileData.title}</strong></p>
        <p>${profileData.bio}</p>
        <p>📧 ${profileData.email}</p>
        <div>
          ${profileData.skills.map(skill => html`<span class="skill-badge">${skill}</span>`)}
        </div>
      </div>
    `;
  }
}

customElements.define('profile-card', ProfileCard);
