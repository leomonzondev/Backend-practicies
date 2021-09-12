const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log("======================".green);
    console.log(`tabla de ${ base }`.green);
    console.log("======================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = ( base, limite = 10 ) => {
    return new Promise ((resolve, reject) => {

        if (!Number(base)) {
            reject (`El valor introducido "${base}" no es un número`)
            return;
        }

        let contenido = ''

    for (let i = 1; i <= limite; i++) {
        contenido += (`${base} * ${i} = ${base * i}\n`);
    }


    fs.writeFile(`tablas/tabla-${ base }.txt`,contenido, (err) => {

        if (err)
            reject (err)
        else 
            resolve( `tabla-${ base }.txt` )
}) 
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
