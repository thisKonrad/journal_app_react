import './entry_form.css';
import './input_textarea.css';
import '../buttons/button.css';

export default function EntryForm({
    handleSubmit,
    motto,
    handleMotto,
    note,
    handleNote 
    }) {

    return(<section>
             <form 
             className="entry_form"
             onSubmit={handleSubmit}>
                <div>
                    <p className="new_entry">New Entry:</p>
                </div>
                <div className="input_text">
                    <label htmlFor="motto">Motto:</label>
                    <textarea 
                    name="motto"
                    id="motto" 
                    value={motto}
                    onChange={handleMotto} 
                    rows="6" cols="6" 
                    maxLength="220">
                </textarea>
                </div>
                <div className="input_text">
                    <label htmlFor="notes">Notes:</label>
                    <textarea 
                    name="notes"
                    id="notes" 
                    value={note}
                    onChange={handleNote} 
                    rows="6" cols="6" 
                    maxLength="220">
                    </textarea>
                </div>
                <button 
                name="submit_button"
                className="submitBtn">
                    Create
                </button>
             </form>
        </section>
    )
}