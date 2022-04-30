/* Clima Page */

import { getClima } from "./clima-provider";

const urlClima = 'https://api.openweathermap.org/data/2.5';
const apiKey   = 'bb77b770f24cad04a36ad2ac43542cd5';
let lon, lat;

const main = document.querySelector('main');

const crearHtml = ( clima ) => {

    let fecha = new Date().toDateString();

    const html = `
    <img src="./assets/img/${clima.weather[0].icon}.png" alt=" ${ clima.weather[0].description } ">
    <h3>${ Math. ceil(clima.main.temp )}°c</h3>
        <h4> ${ clima.weather[0].main } </h4>
        <h5> ${ fecha } </h5>
        <h5> <i class="fa-solid fa-location-dot"></i> ${ clima.name } </h5>
    `;
    

    main.innerHTML = html;
    
}


export const init = () => {

    window.addEventListener('load', () => {

        if ( navigator.geolocation ) {
            
            navigator.geolocation.getCurrentPosition(({ coords }) => {
        
                lat = coords.latitude;
                lon = coords.longitude;
            
                getClima(`${ urlClima }/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                    .then( crearHtml )
            })
        
        }
    
    })

}



