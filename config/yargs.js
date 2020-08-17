const description = {
    demand: true,
    alias: 'd',
    desc: 'Task Description'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Update Description'
};

const argv = require('yargs')
    .command('create', 'New To do element', {
        description
    })
    .command('update', 'Update State', {
        description,
        completed
    })
    .command('delete', 'Delete Element', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}