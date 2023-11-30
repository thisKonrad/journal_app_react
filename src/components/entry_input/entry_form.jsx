import './entry_form.css';
import EntryFormHeadline from './headline.jsx';
import Motto from './motto.jsx';
import Notes from './notes.jsx';
import Button from '../buttons/buttons.jsx';


import { createPortal } from 'react-dom';

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

    function submitFormValues(){
        
        const date =  new Date().toLocaleDateString();
        setMotto(motto)
        setNote(note)
        console.log(date)
        console.log("Values: ",motto," ",note)

        {createPortal(
            <div className="card">
            <img className ="card_icon" src="../assets/star.svg"></img>
            <div><p className="date">date: <span>{date}</span></p></div>
            <h3>{motto}</h3>
            <article>
                <p>
                {note}
                </p>
            </article>
            </div>,
            document.querySelector('.card_wrap')
        )}
    }


    return( <>
             <form className="entry_form">
                <EntryFormHeadline/>
                <Motto getInput={handleCreateMotto}/>
                <Notes getInput={handleCreateNote}/>
                <Button sendValues={submitFormValues}/>
             </form>
        </>
    )
}