'use strict'

// Newsboard

{
    const init = () => {
        initProgressbar()
        showFirstMessage()
        $('[title=next]').addEventListener('click', nextMessage)
        $('[title=prev]').addEventListener('click', prevMessage)
    }

    const showFirstMessage = () => showMessageByNumber(1)

    const showMessageByNumber = messageNumber =>
    $('.newsboard_content').innerHTML = messages[messageNumber - 1]

    const nextMessage = e => {
        showMessageByNumber(progressbar().value += 1)
        e.preventDefault()
    }
    const prevMessage = event => {
        showMessageByNumber(progressbar().value -= 1)
        event.preventDefault()
    }

    // Progress bar (used as 'state')
    const progressbar = () => $('#messages_progress')

    const initProgressbar = () => {
        progressbar().max = messages.length
        progressbar().value = 1
    }

    init()
    
}
