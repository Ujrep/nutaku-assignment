import ProductionIcon from 'src/assets/images/production.png'
import QualityControlIcon from 'src/assets/images/quality-control.png'
import DeliveryNutaku from 'src/assets/images/delivery-nutaku.jpg'
import SecondQualityControlIcon from 'src/assets/images/second-quality-control.jpg'
import PackagingIcon from 'src/assets/images/packaging.jpg'
import DeliveryFinalIcon from 'src/assets/images/delivery-final.png'

const statusName = {
  done: 'DONE!',
  progress: 'IN-PROGRESS',
  empty: '',
}

const initialSteps = [
  {
    name: 'PRODUCTION (FERMENTING, MIXING)',
    icon: ProductionIcon,
  },
  {
    name: 'BOTTLING & QUALITY CONTROL',
    icon: QualityControlIcon,
  },
  {
    name: 'DELIVERY TO NUTAKU HQ',
    icon: DeliveryNutaku,
  },
  {
    name: 'SECOND QUALITY CONTROL',
    icon: SecondQualityControlIcon,
  },
  {
    name: 'HAND PACKAGING',
    icon: PackagingIcon,
  },
  {
    name: 'SHIPPING TO HENTAI LOVERS',
    icon: DeliveryFinalIcon,
  },
]

export default class Tracker {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search)
    const active = parseInt(urlParams.get('active'), 10)

    this.active = active > 5 ? 6 : active
    this.steps = initialSteps.map((step, index) => {
      let status = 'empty'

      if (index < active) {
        status = 'done'
      } else if (index === active) {
        status = 'progress'
      }

      return {
        ...step,
        status,
      }
    })
  }

  render() {
    return `
        <section class="tracker">
          <div class="tracker-items">
            ${this.steps
              .map((step) => {
                return `
                <div class="tracker-item">
                  <img class="tracker-logo" src="${step.icon}" alt="step-icons" />
                  <p class="tracker-title">${step.name}</p>
                  <div class="tracker-status">
                    <div class="tracker-bubble tracker-bubble--${step.status}"></div>
                    <p class="tracker-statusText">${statusName[step.status]}</p>
                  </div>
                </div>
              `
              })
              .join('')}
          </div>
          
          <div class="tracker-bottle">
            <div class="tracker-bottleCap">
            </div>
            <div class="tracker-bottleTop ${this.active === 6 ? 'tracker-bottleTop--fill' : ''}">
            </div>
            <div class="tracker-bottleBottom">
              <div class="tracker-bottleLabel">
              </div>
              <div class="tracker-bottleLabelSide">
              </div>
              <div class="tracker-bottleFiller tracker-bottleFiller--level${this.active}"></div>
            </div>
          </div>
        </section>
    `
  }
}
