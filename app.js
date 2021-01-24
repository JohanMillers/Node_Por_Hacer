const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./porHacer/porHacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);


        }
        break;
    case 'actualizar':
        console.log('actualizar todas la tarea por hacer');
        break;

    default:
        console.log('Comando no reconocido');


}