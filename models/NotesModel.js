const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const noteSchema = new mongoose.Schema({
    noteTitle:{
        type: String,
        required: true,
        lowercase: true
    },
    noteDesctiption:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum: ['low', 'medium', 'height'],
        default: 'low'
    },
    dateAdded:{
        type: Date, 
        default: Date.now
    },
    dateUpdated:{
        type: Date, 
        default: Date.now
    }

})

const note = mongoose.model("NotesModel", noteSchema)
module.exports = note;