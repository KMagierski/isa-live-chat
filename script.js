class Chat {
    constructor(selector) {
        this.chatContainer = document.querySelector('selector') || document.body
        this.user = null
        this.messages = [{
            text: 'Ala ma kota',
            name: 'Mateusz Choma',
            email: 'mateusz.choma@infoshareacademy.com',
            image: ''
        }]
        this.newMessageText = ''

        this.makeUi()
    }

    render() {
        // removing all displayed messages
        document.querySelectorAll('.message-container').forEach(message => message.remove())

        // adding new messages from this.messages class field
        this.messages.forEach(message => this.makeMessage(message))
    }

    makeUi() {
        this.makeMessageBox()
        this.render()
    }

    makeMessage(message) {
        // create elements
        const messageContainer = document.createElement('div')
        const textContainer = document.createElement('div')
        const nameContainer = document.createElement('h5')
        const messageTextContainer = document.createElement('div')
        const image = document.createElement('img')

        // add CSS
        image.style.cssText = `
            width: 100px;
            height: 100px;
            border-radius: 50%;
        `
        messageContainer.style.cssText = `
            padding: 20px;
            border-bottom: 1px solid rgba(0,0,0,.125);
            display: flex;
            flex-direction: row;
        `
        textContainer.style.cssText = `
            margin: 0 20px;
        `
        messageContainer.className = 'message-container'

        // add attributes and texts
        image.setAttribute('src', message.image || `https://api.adorable.io/avatars/100/${message.email}`)
        nameContainer.innerText = message.name
        messageTextContainer.innerText = message.text

        // put it all together
        textContainer.appendChild(nameContainer)
        textContainer.appendChild(messageTextContainer)
        messageContainer.appendChild(image)
        messageContainer.appendChild(textContainer)
        this.chatContainer.appendChild(messageContainer)
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