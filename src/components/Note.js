import {MdDeleteForever} from 'react-icons/md'
import './Note.css'

const Note = ({text, id, date, handleDeleteNote}) => {
    return(
        <div className='note'>
            <span>{text}</span>
            <div className = 'note-footer'>
                <small>Written: {date}</small>
                <MdDeleteForever onClick = {() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
};

export default Note; 