import Button from 'src/components/Button'
import Input from 'src/components/Input'

export default class Modal {
  constructor() {
    this.PreOrderButton = new Button({
      id: 'submit',
      text: 'Submit',
      small: true,
    })

    this.CancelButton = new Button({
      id: 'cancel',
      text: 'Cancel',
      small: true,
      type: 'secondary',
      onClick: () => {
        document.querySelector('#preorder-modal').classList.remove('modal--show')
      },
    })

    this.NameInput = new Input({
      type: 'text',
      name: 'name',
      placeholder: 'Name',
    })

    this.EmailInput = new Input({
      type: 'email',
      name: 'email',
      placeholder: 'Email',
    })

    this.onSubmit = async () => {
      const { success } = await Promise.resolve({
        success: true,
      })

      if (success) {
        document.querySelector('.modal-fields').classList.remove('modal-fields--show')
        document.querySelector('.modal-success').classList.add('modal-success--show')
        document.querySelector('#submit').remove()
      }

      return false
    }
  }

  render() {
    return `
        <div class="modal" id="preorder-modal">
          <div class="modal-container">
            <div class="modal-title">
              Pre-Order
            </div>
            <div class="modal-content">
              <form class="modal-form"  onsubmit="(${this.onSubmit})(); return false;">
                  <div class="modal-success">
                    You successfully pre-ordered the sauce 
                  </div>                  
                  <div class="modal-fields modal-fields--show">
                    ${this.NameInput.render()}
                    ${this.EmailInput.render()}
                  </div>
                  <div class="modal-buttons">
                    ${this.CancelButton.render()}
                    ${this.PreOrderButton.render()}
                  </div>
              </form>
            </div>
          </div>
        </div>
    `
  }
}
