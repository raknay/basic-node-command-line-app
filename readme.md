#### A Basic Command Line Notes App Using Node.js ####

You can perform various operation such as add notes, delete notes, find notes and 
list all the notes via command line
ex :- `node app.js add --title="exercise" --body="exercise start at 7 AM"`

Install all the dependecies using command `npm install`

app.js is the entry point of the programm which contains various commands for different 
operations and notes.js file contains different functions which are called when
a command is passed

ex:- when `node app.js add --title="exercise" --body="exercise start at 7 AM"` command 
is passed the addNote function is called by handler method form notes.js file which saves 
the note object in array and later write it to notes.json file in json format

To list all the notes:- `node app.js list`
To read a note with specefic title:- `node app.js read --title="title name"`
To remove a note:- `node app.js remove --title="title name"`

Tools used:
1. Node.js
2. yargs