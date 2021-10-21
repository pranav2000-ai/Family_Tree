#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer')
const {
    addMember,
    findMember,
    updateMember,
    removeMember,
    listMembers
} = require('./index');

const questions = [{
        type: 'input',
        name: 'firstname',
        message: 'Enter firstname'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter lastname'
    },
    {
        type: 'input',
        name: 'mother',
        message: 'Enter name of mother'
    },
    {
        type: 'input',
        name: 'father',
        message: 'Enter name of father'
    },
    {
        type: 'input',
        name: 'relation',
        message: 'Enter relation'
    }
]
program
    .version('1.0.0')
    .description('Family Tree');

// program
//     .command('Add <firstname> <lastname> <children> <parents> <relation>')
//     .alias('a')
//     .description('Add a Member')
//     .action((firstname, lastname, children, parents, relation) => {
//         addMember({ firstname, lastname, children, parents, relation });
//     })
program
    .command('add')
    .alias('a')
    .description('add member')
    .action(() => {
        prompt(questions).then(answers => addMember(answers));
    })
program
    .command('find <name>')
    .alias('f')
    .description('Find a member')
    .action(name => findMember(name));
program
    .command('update <_id>')
    .alias('u')
    .description('update member')
    .action(_id => {
        prompt(questions).then(answers => updateMember(_id, answers));
    })
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a member')
    .action(_id => removeMember(_id));
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(() => listMembers());

program.parse(process.argv);