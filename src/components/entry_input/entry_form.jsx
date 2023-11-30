import './entry_form.css'
import EntryFormHeadline from '../src/components/entry_input/headline.jsx';
import Motto from '../src/components/entry_input/motto.jsx';
import Notes from '../src/components/entry_input/notes.jsx';
import Button from '../src/components/buttons/buttons.jsx';
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