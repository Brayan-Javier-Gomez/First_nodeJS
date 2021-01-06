const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const color = require('colors');



let listarTabla = (base, limite = 10) => {
    console.log('========================='.red);
    console.log(`       TABLA DEL ${base}`.green);
    console.log('========================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }


}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor de base no es un numero');
            return;
        }

        let tabla = '';

        for (var i = 1; i <= limite; i++) {

            tabla += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, tabla, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
            console.log(`El archivo tabla_${base} se guardo correctamente en la ruta: tablas/tabla_${base}.txt`.green);
        })
    })
};

module.exports = {
    crearArchivo,
    listarTabla
}