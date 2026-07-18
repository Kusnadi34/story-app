import { LitElement, html } from 'lit';

class AddStoryForm extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <form class="custom-form needs-validation" novalidate @submit=${this._handleSubmit}>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" rows="3" required></textarea>
          <div class="invalid-feedback">Please enter a description.</div>
        </div>
        <div class="mb-3">
          <label for="photo" class="form-label">Photo</label>
          <input type="file" class="form-control" id="photo" accept="image/*" required>
          <div class="invalid-feedback">Please choose a photo.</div>
        </div>
        <button type="submit" class="btn btn-submit">Add Story</button>
      </form>
    `;
  }

  _handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    
    alert('Story added! (simulasi)');
    form.reset();
    form.classList.remove('was-validated');
  }
}
customElements.define('add-story-form', AddStoryForm);