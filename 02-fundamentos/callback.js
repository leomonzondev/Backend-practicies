// setTimeout(  () => {
//     console.log('hola mundo');
// },3000 )

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Leonardo',
        id
    }
    if ( id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`)
    } else {
        callback(usuario)
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
})