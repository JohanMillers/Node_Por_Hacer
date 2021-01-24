const argv = require('yargs').argv;

console.log(argv);

let comando =  argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
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


