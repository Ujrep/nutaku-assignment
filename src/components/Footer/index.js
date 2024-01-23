import Button from 'src/components/Button'
import NutakuLogo from 'src/assets/images/nutaku-logo.png'

export default class Footer {
  constructor() {
    this.PreOrderButton = new Button({
      text: 'Pre-Order',
    })
  }

  render() {
    return `
        <footer class="footer">
          <p class="footer-subtitle">The spicy as fuck</p>

          <h1 class="footer-title">HENTAI HOT SAUCE</h1>

          <div class="footer-buttons">
            ${this.PreOrderButton.render()}
          </div>

          <a href="//nutaku.com" class="footer-logo">
            <img src="${NutakuLogo}" alt="Nutaku logo"/>
          </a>
        </footer>
    `
  }
}
