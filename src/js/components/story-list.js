import { LitElement, html } from 'lit';

class StoryList extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      stories: { type: Array }
    };
  }

  constructor() {
    super();
    this.stories = [];
  }

  render() {
    return html`
      <div class="row custom-grid">
        ${this.stories.map(story => html`
          <div class="col">
            <div class="card story-card">
              <img src="${story.photoUrl}" class="card-img-top" alt="${story.name}">
              <div class="card-body">
                <h5 class="card-title">${story.name}</h5>
                <p class="card-text">${story.description}</p>
                <p class="story-date">${new Date(story.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}
customElements.define('story-list', StoryList);