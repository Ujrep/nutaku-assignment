export default class Input {
  constructor({ type, name, placeholder }) {
    this.type = type || 'text'
    this.name = name
    this.placeholder = placeholder
  }

  render() {
    return `
      <label for="inp" class="input-group">
        <input class="input" type="${this.type}" name="${this.name}" id="inp" placeholder="${this.placeholder}" required>
      </label>
    `
  }
}
