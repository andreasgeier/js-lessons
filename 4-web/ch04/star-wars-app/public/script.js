'use strict'

const $ = document.querySelector.bind(document)

// get data from internal API
const getPlanets = id => {
    fetch('./planets/' + id)
        .then(res => res.json())
        .then(data => getData(data))
        .catch(err => console.log(err))
}

// write object values into HTML
const getData = data => {

    // get count of planets
    let planetCount = data.map(item => item.name).length
    $('#planet-count').textContent = '(' + planetCount + ')'

    // get name of planets
    let allPlanets = data.map(item => item.name).join(', ')
    $('#planets').textContent = allPlanets
    
    // get random planet detail
    let randomIndex = Math.ceil(Math.random() * planetCount)
    let planetName = data[randomIndex].name
    let planetDetail = JSON
        .stringify(data[randomIndex])
        .split(',')
        .join(' //  ')
    $('#planet-name').textContent = planetName
    $('#planet-detail').textContent = planetDetail
}

// set event listener for navigation
document.addEventListener('click', (e) => {
    if (e.target.id === 'mercure') getPlanetDetail('mercure')
    console.log(e.target)
})

// initial page content
$('#planets').textContent = getPlanets()    
