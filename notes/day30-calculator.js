'use strict'

// Calculator

{
    // Eventhandler auf alle buttons mit $on
    // $on($$('#keyfield > button'), 'click',
    //     e => $('#display').value += e.target.innerHTML)

    // Verschachtelte $on Funktion
    $on(
        $on(
            $$('#keyfield > button'),
            'click',
            e => ($('#display').value += e.target.innerHTML),
        ),
        'mouseenter',
        e => console.log(e.target.innerHTML),
    )
}
