import './entry_form.css'
import { useState } from "react";


export default function EntryForm({children}){

    const[motto, setMotto]=useState('');
    const[note, setNotes]=useState('');

    function getFormValues(event){

        event.preventDefault()

        const mottoValue = event.target.elements.motto.value;
        const noteValue = event.target.elements.notes.value;
    }



    return( <>
             <form className="entry_form">
                {children}
             </form>
        </>
    )
}