const chalk = require('chalk');
const yargs=require('yargs');
const notes =require('./notes');



yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body);
        
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(argv){
       notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'List all notes',
    
    handler:function(){
       notes.listNotes()
    }
})
yargs.parse();