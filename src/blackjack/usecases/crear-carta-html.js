/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} devuelve la imagen de la carta
 */

export const crearCartaHtml = ( carta ) => {

    if ( !carta ) throw new Error('La carta es necesaria')

    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta;
}