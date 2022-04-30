/* Clima Provider */
import 'regenerator-runtime/runtime';

const getClima = async(url) => {

    const resp = await fetch(url);

    const data = await resp.json();

    return data;
}


export {
    getClima
}