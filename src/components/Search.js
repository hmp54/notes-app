import React from 'react'
import {MdSearch} from 'react-icons/md'
import './Note.css'

const Search = ({handleSearchNote}) =>{
    return(
        <div className='search'>
            <MdSearch className= 'search-icons' size = '1.2em'/>
            <input onChange = {(event) => handleSearchNote(event.target.value)} className = 'searchbar' type='text' placeholder = 'search...'/>
        </div>
    )
};

export default Search; 