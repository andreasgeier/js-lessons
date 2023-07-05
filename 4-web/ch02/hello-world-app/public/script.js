'use strict'

const $ = document.querySelector.bind(document)

// get data from internal API
const getPlanetInfo = planet => {
    fetch('./planet/' + planet)
        .then(res => res.json())
        .then(data => writeHTML(data))
        .catch(err => console.log(err))
}

// write object values into HTML
const writeHTML = data => {

    // check if 'data.moons' is empty, parse if not empty
    let moons = '-'
    if (data.moons !== 'null') {
        moons = JSON.parse(data.moons).map(el => el.moon).join(', ')
    }
    
    $('#name').textContent = data.name
    $('#moons').textContent = moons
    $('#density').textContent = data.density
    $('#gravity').textContent = data.gravity
    $('#escape').textContent = data.escape
    $('#meanRadius').textContent = data.meanRadius
    $('#equaRadius').textContent = data.equaRadius
    $('#polarRadius').textContent = data.polarRadius
    $('#flattening').textContent = data.flattening
    $('#axialTilt').textContent = data.axialTilt
}

// set event listener for navigation
document.addEventListener('click', (e) => {
    if (e.target.id === 'mercure') getPlanetInfo('mercure')
    if (e.target.id === 'venus') getPlanetInfo('venus')
    if (e.target.id === 'terre') getPlanetInfo('terre')
    if (e.target.id === 'mars') getPlanetInfo('mars')
    if (e.target.id === 'jupiter') getPlanetInfo('jupiter')
    if (e.target.id === 'saturne') getPlanetInfo('saturne')
    if (e.target.id === 'uranus') getPlanetInfo('uranus')
    if (e.target.id === 'neptune') getPlanetInfo('neptune')
    console.log(e.target.id)
})

// initial page content
getPlanetInfo('terre')    
