import './input_textarea.css'

export default function Notes({eventHandle}){

    function handleSubmit(event) {

        event.preventDefault();
    
        const noteValue = event.target.elements.note.value;
        console.log('note: ',noteValue)
    
        eventHandle(noteValue)

        event.target.reset();
    
    }
    
    return( <>
             <section className="input_text">
                <label htmlFor="notes">Notes:</label>
                <textarea id="notes" rows="6" cols="6" maxLength="220"></textarea>
            </section>
        </>
    )

}