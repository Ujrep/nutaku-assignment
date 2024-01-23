export default class Button {
  constructor({ id, text, small, type, onClick = () => {} }) {
    this.id = id
    this.text = text
    this.onClick = onClick
    this.type = type === 'secondary' ? 'secondary' : 'primary'
    this.small = small
  }

  render() {
    return `
        <button id="${this.id}" onclick="(${this.onClick})()" class="button ${
          this.small ? 'button--small' : ''
        } button--${this.type}">
          ${this.text}
        </button>
    `
  }
}
