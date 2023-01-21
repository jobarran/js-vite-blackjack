import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */


export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    // Manejo de errores
    if ( !tiposDeCarta ) throw new Error('tiposDeCarta es obligatorio');
    if ( !tiposDeCarta.length > 0 ) throw new Error('tiposDeCarta debe ser un arreglo de string');
    if ( !tiposEspeciales ) throw new Error('tiposEspeciales es obligatorio');

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
