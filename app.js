//Importaciones
const argv = require('./config/yargs').argv;

let { crearArchivo } = require('./multiplicar/multimplicar');
let { listarTabla } = require('./multiplicar/multimplicar');
let color = require('colors')

let comando = argv._[0];
//comandos

switch (comando) {

    case 'listar':


        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':


        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`.green))
            .catch((e) => console.log(e))
        break;
    default:
        console.log('No se reconoce el comando digitado, por favor revise la documentacion');
}