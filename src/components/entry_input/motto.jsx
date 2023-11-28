import './input_textarea.css'

export default function Motto(){

    return( <>
             <section className="input_text">
                <label htmlFor="motto">Motto:</label>
                <textarea id="motto" rows="6" cols="6" maxLength="220"></textarea>
            </section>
        </>
    )

}