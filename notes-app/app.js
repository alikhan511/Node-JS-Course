const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs versionn
yargs.version('1.1.1');

// Create add Command
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
        notes.addNote(argv.title, argv.body) 
    }
})

// Create remove Command
yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ 
        notes.removeNote(argv.title); 
    }
})

// Create list Command
yargs.command({
    command:"list",
    describe:"List your notes",
    handler(argv){ 
        notes.listNotes(); 
    }
})

// Create read Command
yargs.command({
    command:"read",
    describe:"Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
//console.log(yargs.argv);





















// if(command == "add"){
//     console.log("Adding Notes!");
// }else if(command === "remove"){
//     console.log("Removing Notes!");
// }

//const validator = require('validator');


// const msg = getNote();

// console.log(msg);

// const greetMsg = chalk.blue.inverse.bold('Success!');
// console.log(greetMsg);


// console.log(process.argv[2]);



// console.log(chalk.green("Success"));
// console.log(chalk.bold.green("Success"));
// console.log(chalk.red.bold("Error"));


//console.log(validator.isEmail('a@e.ab'));
// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);