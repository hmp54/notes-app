import NotesList from './components/NotesList'
import Search from './components/Search'
import './App.css'
import {nanoid} from 'nanoid'
import {useState} from 'react'; 

/*
TODO: 
1. add search bar functionality
2. add ability to edit + save a pre-existing note
3. add ... option icon to each note
  -The dot menu brings up color options
4. Add ability to change the color of each sticky note.
5. Add headers to each note

*/

function App() {
  //dummy note data
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Welcome to the Notes app! Type your first note in the blue sticky to get started.',
      date: '7/28/2022'
    }
  ]); 

  const [searchText, setSearchText] = useState(''); 

  const addNote = (text) =>{ 
    const date = new Date(); 
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    }

    const newNotes = [...notes, newNote]; //creating a new array instead of updating the old array
    setNotes(newNotes); //updates the state with the new data and causes components to rerender
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id); 
    setNotes(newNotes)
  }

 
  return (
    <div className = 'background'>
      <div className='container'>
        <h1>Notes</h1>
        <Search
          handleSearchNote = {setSearchText}
        />
        <NotesList 
          notes = {notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote = {addNote} 
          handleDeleteNote = {deleteNote}/>
      </div>
    </div>
  );
}

export default App;