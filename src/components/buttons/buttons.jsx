import './button.css'

export default function Button(){

    function submitForm(event) {

        event.preventDefault();

        console.log('Clicked!')
    
    
    }

    return( <>
           <button className="submitBtn" onClick={submitForm}>Create</button>
        </>
    )

}