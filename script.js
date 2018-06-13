class Chat {
    constructor(selector) {
        this.chatContainer = document.querySelector('selector') || document.body
        this.user = null
        this.messages = []
        this.newMessageText = ''

        this.makeUi()
    }

    makeUi() {
        this.makeMessageBox()
    }

    makeMessageBox() {
        // create elements
        const container = document.createElement('div')
        const input = document.createElement('input')
        const button = document.createElement('button')
        const inputGroupForButton = document.createElement('div')

        // add CSS and CSS classes (we are using Bootstrap 4)
        container.style.cssText = `
            position: absolute;
            bottom: 0;
            padding: 20px;
            border-top: 1px solid rgba(0,0,0,.125);
        `
        container.className = 'input-group'
        input.className = 'form-control'
        button.className = 'btn btn-success'
        inputGroupForButton.className = 'input-group-append'

        // add attributes and texts on button and input
        input.setAttribute('placeholder', 'Message text')
        button.innerText = 'Send message'

        // put it all together
        inputGroupForButton.appendChild(button)
        container.appendChild(input)
        container.appendChild(inputGroupForButton)
        this.chatContainer.appendChild(container)
    }
}

new Chat()