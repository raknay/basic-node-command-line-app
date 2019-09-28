const notes = require("./notes.js");
const yargs = require("yargs");

// customize yargs version
yargs.version("1.1.0");

// creating add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// creating remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder:{
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// creating list command
yargs.command({
    command: "list",
    describe: "List the notes",
    handler() {
        notes.listNotes();
    }
});

// creating read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder:{
        title: {
            describe: "title of a note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// to console log the process.argv value
// console.log(process.argv);

yargs.parse();
// console.log(yargs.argv);
// note();