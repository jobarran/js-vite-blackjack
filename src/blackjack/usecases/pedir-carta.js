/**
 * Esta funcion permite tomar una nueva carta
 * @param {Array<String>} deck 
 * @returns {String} Devuelve carta
 */

export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) throw new Error('No hay cartas en el deck');

    const carta = deck.pop();
    return carta;
}
