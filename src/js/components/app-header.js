import { LitElement, html } from 'lit';

class AppHeader extends LitElement {
  createRenderRoot() {
    return this; 
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container">
          <a class="navbar-brand" href="#home">📖 Story App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#add">Add Story</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#profile">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('app-header', AppHeader);