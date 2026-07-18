import { LitElement, html } from 'lit';

class AppFooter extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer class="footer">
        <div class="container">
          <p class="mb-0">&copy; 2026 Story App. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);