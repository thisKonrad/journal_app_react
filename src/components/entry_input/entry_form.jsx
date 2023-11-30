import './entry_form.css'
import EntryFormHeadline from './headline.jsx';
import Motto from './motto.jsx';
import Notes from './notes.jsx';
import Button from '../buttons/buttons.jsx';
import { useState } from "react";


export default function EntryForm(){

    const[motto, setMotto]=useState('');
    const[note, setNote]=useState('');
  
    function handleCreateMotto(motto){
        setMotto(motto)
    }
    function handleCreateNote(note){
        setNote(note)
    }
  
    console.log("motto: ",motto)
    console.log("note: ", note)
    
    return( <>
             <form className="entry_form">
               {/*  {children} */}
                <EntryFormHeadline/>
                <Motto getInput={handleCreateMotto}/>
                <Notes getInput={handleCreateNote}/>
                <Button/>
             </form>
        </>
    )
}