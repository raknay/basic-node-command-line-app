const fs = require("fs");

const getNotes = () => {
    return "your notes...";
};

// addNote function to add data to json file
const addNote = (title, body) => {
    const notes = loadNotes();
    // filtering the duplicate notes
    const duplicateNote = notes.find((note) => note.title === title);
    // adding and saving notes after duplicate check 
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("note added!");     
    } else{
        console.log("title is taken");
    }
};

// function to save notes in the json file
const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

// function to load data from json file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(err){
        // if no json file to read then return an empty array
        return [];
    }
    
};

// function to remove notes from json file
const removeNote = (title) => {
    const notes = loadNotes();
    notesTokeep = notes.filter((note) => {
        return note.title !== title;
    });

    if(notes.length > notesTokeep.length){
        saveNotes(notesTokeep);
        console.log("note removed");
    } else{
        console.log("no notes found");
    }
    
};

// function to list all the notes
const listNotes = () => {
    const notes = loadNotes();
    if(notes.length > 0){
        notes.forEach(element => {
            console.log("Title: " + element.title + " Body: " + element.body );
        });
    }else{
        console.log("you have no item in the list")
    }
};

// function to read a note from the title provided
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(note){
        console.log("note found");
        console.log("Title: " + note.title + " Body: " + note.body);
    } else{
        console.log("Note not found");
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};