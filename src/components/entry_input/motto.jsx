import './input_textarea.css'


export default function Motto({getInput}){

  function mottoInput(event) {

    event.preventDefault();

    const mottoValue = event.target.value;

    console.log('motto: ',mottoValue)

    getInput(mottoValue)

    event.target.elements.motto.focus();
    event.target.reset();

  }


    return( <>
             <section className="input_text">
                <label htmlFor="motto">Motto:</label>
                <textarea 
                id="motto" 
                onChange={mottoInput} 
                rows="6" cols="6" 
                maxLength="220">
                </textarea>
            </section>
        </>
    )

}