class UserCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h3>jay patel</h3>`;
    }
}

window.customElements.define('user-card', UserCard);