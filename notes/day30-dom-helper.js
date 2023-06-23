'use strict'

// Hilfsfunktion, global verfügbar
const $ = q => document.querySelector(q)
const $$ = q => Array.from(document.querySelectorAll(q))
const $on = (el, ev, fn) => {
    Array.isArray(el)
        ? el.forEach(ae => $on(ae, ev, fn))
        : el.addEventListener(ev, fn)
    return el
}
