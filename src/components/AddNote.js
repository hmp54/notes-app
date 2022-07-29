import React, {cloneElement, useState} from 'react'; 

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const CHAR_LIMIT = 200; 

    //updates the state value every time we type, and ensures that the character hasn't been reached. 
    const handleChange = (event) =>{
        if(CHAR_LIMIT - event.target.value.length >= 0)
            setNoteText(event.target.value)
    }

    const handleSaveClick = () => {
        //takes all extra whitespace off note before saving, but only if it's a valid note.
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('') //resets note text back to an empty string once we update the new note. 
        }
    }

    return(
        <div className = 'note new'>
            <textarea 
                row = '8' 
                cols = '50' 
                placeholder = 'Type your note here...'
                value = {noteText}
                onChange = {handleChange}
            ></textarea>
            <div className = 'note-footer'>
                <small>{CHAR_LIMIT - noteText.length} remaining</small>
                <button onClick = {handleSaveClick} className = 'save-note'>Save</button>
            </div>
        </div>
    )
}

export default AddNote; 