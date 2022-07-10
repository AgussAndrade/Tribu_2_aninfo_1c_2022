/**
 * Formatea el array para que las keys de los objetos hijos esten en lowerCase
 * @param array
 * @returns {*[]}
 */
export function getFormattedObject(array) {
    const object = []
    let partialObject ={}
    array.map((_objbect) => {
        partialObject = Object.keys(_objbect).reduce((accumulator, key) => {
            let partial_key = key.replace(/ /g, "_");
            accumulator[partial_key.toLowerCase()] = _objbect[key];
            return accumulator;
        }, {});
        object.push(partialObject)
    });

    return object;
}