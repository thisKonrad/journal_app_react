import './input_textarea.css'

export default function Notes(){

    return( <>
             <section className="input_text">
                <label htmlFor="motto">Notes:</label>
                <textarea id="motto" rows="6" cols="6" maxLength="220"></textarea>
            </section>
        </>
    )

}