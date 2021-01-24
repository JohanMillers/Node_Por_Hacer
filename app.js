const argv = require('./config/yargs').argv;

const porHacer = require('./porHacer/porHacer');


let comando =  argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        console.log('Mostar todas las tarea por hacer');
    break;
    case 'actualizar':
        console.log('actualizar todas la tarea por hacer');
    break;

    default:
        console.log('Comando no reconocido');
        
        
}


