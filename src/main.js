import 'src/scss/main.scss'

import Header from 'src/components/Header'
import Info from 'src/components/Info'
import Tracker from 'src/components/Tracker'
import Footer from 'src/components/Footer'
import Modal from 'src/components/Modal'

class App {
  constructor() {
    this.Info = new Info()
    this.Tracker = new Tracker()
    this.Footer = new Footer()
    this.Modal = new Modal()
    this.Header = new Header({
      showModal: this.Modal.showModal,
    })
  }

  init() {
    const app = null || document.getElementById('app')
    const headerContent = this.Header.render()
    const infoContent = this.Info.render()
    const trackerContent = this.Tracker.render()
    const footerContent = this.Footer.render()
    const modalContent = this.Modal.render()

    app.innerHTML = `
        ${headerContent}
        ${infoContent}
        ${trackerContent}
        ${footerContent}
        ${modalContent}
    `
  }
}

const app = new App()

window.addEventListener('load', () => app.init())
