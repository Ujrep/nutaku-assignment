import Button from 'src/components/Button'

export default class Header {
  constructor() {
    this.preOrderButton = new Button({
      text: 'Pre-Order',
      onClick: () => {
        document.querySelector('#preorder-modal').classList.add('modal--show')
      },
      id: 'preorder',
    })
  }

  render() {
    return `
        <header class="header">
          <p class="header-subtitle">The spicy as fuck</p>

          <h1 class="header-title">HENTAI HOT SAUCE</h1>

          ${this.preOrderButton.render()}
        </header>
    `
  }
}
