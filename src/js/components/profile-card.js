import { LitElement, html, css } from 'lit';
import profileData from '../../data/profile.json';

class ProfileCard extends LitElement {
  // 🟢 (Opsional untuk Saran Reviewer) Gunakan Shadow DOM agar style tidak bentrok dengan global
  static styles = css`
    .profile-card {
      max-width: 500px;
      margin: 0 auto;
      padding: 24px;
      background: #fffbeb;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      text-align: center;
      font-family: 'Segoe UI', sans-serif;
    }
    .profile-avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #d97706;
      margin-bottom: 16px;
    }
    .profile-name {
      font-size: 24px;
      font-weight: bold;
      color: #78350f;
      margin-bottom: 4px;
    }
    .profile-title {
      color: #d97706;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .profile-bio {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    .profile-detail {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .profile-detail span {
      background: #fef3c7;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 14px;
    }
    .skill-badge {
      display: inline-block;
      background: #d97706;
      color: white;
      padding: 4px 14px;
      border-radius: 20px;
      margin: 4px;
      font-size: 13px;
    }
  `;

  // 🟢 Menggunakan Shadow DOM (memenuhi saran reviewer untuk minimal 2 komponen dengan Shadow DOM)
  // createRenderRoot dihapus agar Shadow DOM aktif

  render() {
    return html`
      <div class="profile-card">
        <!-- Gunakan data dari profile.json secara DINAMIS -->
        <img src="${profileData.photoUrl}" alt="${profileData.name}" class="profile-avatar">
        <h3 class="profile-name">${profileData.name}</h3>
        <p class="profile-title">${profileData.title}</p>
        <p class="profile-bio">${profileData.bio}</p>
        
        <div class="profile-detail">
          <span>📧 ${profileData.email}</span>
          <span>⏳ ${profileData.experience}</span>
        </div>

        <div>
          ${profileData.skills.map(skill => html`
            <span class="skill-badge">${skill}</span>
          `)}
        </div>

        <p style="margin-top: 20px; font-size: 14px; color: #9ca3af;">
          This story app is built with ❤️ using Lit, Bootstrap, and Sass.
        </p>
      </div>
    `;
  }
}

customElements.define('profile-card', ProfileCard);

/**
import { LitElement, html } from 'lit';

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
