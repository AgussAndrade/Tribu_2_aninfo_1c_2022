/**
 * Formatea el array de clientes y lo devuelve
 * @param clientes array de clientes
 * @returns {*[]}
 */
export function getClients(clientes) {
    const object = []
    let partialObject ={}
    clientes.map((cliente) => {
        partialObject = Object.keys(cliente).reduce((accumulator, key) => {
            let partial_key = key.replace(/ /g, "_");
            accumulator[partial_key.toLowerCase()] = cliente[key];
            return accumulator;
        }, {});
        object.push(partialObject)
    });
    console.log(object)
    return object;
}