//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

//onsole.log(argv);

let command = argv._[0];
switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = toDo.getList();
        for (let task of list) {
            console.log('=======To Do======'.blue);
            console.log(task.description);
            console.log('Status: ', task.completed);
            console.log('=================='.blue);
        }
        break;
    case 'update':
        let update = toDo.update(argv.description, argv.completed);
        console.log(update);
        break;
    case 'delete':
        let deleted = toDo.deleted(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Undefined Command')
        break;
}