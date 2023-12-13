import './status.css'
import CountAll from '../counters/countAll.jsx';


export default function AllEntries({allEntries}){

    return( <>
        <div><p className="all_entries">all entries:<span>{allEntries}</span></p></div>   
        </>
    )

}