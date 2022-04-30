
/* Manejo del Search */

import { getClima } from "./clima-provider";

// Refencias
const searchOpen  = document.querySelector('.search-switch');
const searchSection = document.querySelector('.search-section');
const searchClose = document.querySelector('.fa-xmark');
const searchForm = document.querySelector('.search-form');
const main = document.querySelector('main');


const urlClima = 'https://api.openweathermap.org/data/2.5';
const apiKey   = 'bb77b770f24cad04a36ad2ac43542cd5';
let lon, lat;



const handleSearcheSwitches = () => {

    // Abrir Search
    searchOpen.addEventListener('click', () => {
    
        searchSection.setAttribute("style", "right:0;");
    })


    // Cerrar Search
    searchClose.addEventListener('click', () => {
    
        searchSection.setAttribute("style", "right: 430px;");
    })
}

const sobrescribirHtmlClima = (clima) => {
    
    let fecha = new Date().toDateString();

    const html = `
        <img src="./assets/img/${clima.weather[0].icon}.png" alt=" ${ clima.weather[0].description } ">
        <h3>${ Math. ceil(clima.main.temp )}°c</h3>
        <h4> ${ clima.weather[0].main } </h4>
        <h5> ${ fecha } </h5>
        <h5> <i class="fa-solid fa-location-dot"></i> ${ clima.name } </h5>
    `;

    main.innerHTML = html

}

const buscarLocations = () => {

    
    searchForm.addEventListener('submit', (e) => {
        
        e.preventDefault();
        console.log(e.target[0].value);
        
        getClima( `${ urlClima }/weather?q=${e.target[0].value}&appid=${apiKey}&units=metric` )
            .then(sobrescribirHtmlClima)
    
        searchSection.setAttribute("style", "right: 370px;");
    })
}

export {
    handleSearcheSwitches,
    buscarLocations
}