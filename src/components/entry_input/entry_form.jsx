import './entry_form.css'

export default function EntryForm({children}){

    return( <>
             <form className="entry_form">
                {children}
             </form>
        </>
    )
}