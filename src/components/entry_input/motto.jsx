import './input_textarea.css'


export default function Motto({eventHandle}){

   
  function handleSubmit(event) {

    event.preventDefault();

    const mottoValue = event.target.elements.motto.value;
    console.log('motto: ',mottoValue)

    eventHandle(mottoValue)

    event.target.elements.motto.focus();
    event.target.reset();

  }

  
    return( <>
             <section className="input_text">
                <label htmlFor="motto">Motto:</label>
                <textarea id="motto" rows="6" cols="6" maxLength="220"></textarea>
            </section>
        </>
    )

}