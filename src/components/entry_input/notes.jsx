import './input_textarea.css'

export default function Notes({getInput}){

    function noteInput(event) {

        event.preventDefault();
    
        const noteValue = event.target.elements.note.value;
        console.log('note: ',noteValue)
    
        getInput(noteValue)

        event.target.reset();
    
    }
    
    return( <>
             <section className="input_text">
                <label htmlFor="notes">Notes:</label>
                <textarea id="notes" onChange={noteInput} rows="6" cols="6" maxLength="220"></textarea>
            </section>
        </>
    )

}