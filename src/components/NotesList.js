import Note from './Note.js'
import './Note.css'
import AddNote from './AddNote'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return(
        <div className = 'notes-list'>
            <AddNote handleAddNote = {handleAddNote}/>
            {notes.map((note) => (
                <Note id = {note.id} text = {note.text} date = {note.date} handleDeleteNote = {handleDeleteNote}/>
            ))}
        </div>
    )
}

export default NotesList; 