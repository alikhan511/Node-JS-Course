const fs = require('fs');
const chalk = require('chalk');

//Add Note
const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);        
        console.log(chalk.green.inverse("New note add!"));
    }else{
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

//Remove Note
const removeNote = (title) => {
    const notes = loadNotes()
    
    const notestoKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notestoKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notestoKeep);
    }else{
        console.log(chalk.red.inverse('No note found!'));                
    }
}

//List Notes
const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse("Your notes"));

    notes.forEach((note) => {
        console.log(note.title);
    })
}

//List Notes
const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title)
    
    if(note){
        console.log(chalk.inverse(title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse("Note not found!"));
    }
}


//Save Notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//Load Notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }

}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};