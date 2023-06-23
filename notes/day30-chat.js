

// Chat search

{
    // Eventlistener registrieren
    const init = () => $('#member_search input')
        .addEventListener('keyup', 
            event => {
                console.log(event)
                // updateHighlights($('#member_search input').value)
                updateHighlights(event.target.value)
            }
    )

    // Aktualisiere Highlighting
    const updateHighlights = partOfMemberName => {
        removeHighlights()
        highlightNamesBy(partOfMemberName)
    }

    // Hervorhebe Teilnehmer mit bestimmten Buchstabenfolgen
    const highlightNamesBy = partOfMemberName => {
        if (partOfMemberName === '') return // 'guard' to check if input makes sense
        $$('#chat_members li')
        .filter(liNode => liNode.innerHTML.toLowerCase().includes(partOfMemberName))
        .forEach(li => li.classList.add('highlighted'))
    }

    // Entferne alle Highlights
    const removeHighlights = () =>
        $$('#chat_members li')
        .forEach(node => node.classList.remove('highlighted'))

    init()
}

