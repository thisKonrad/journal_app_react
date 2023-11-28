import './status.css'
import CountAll from '../counters/countAll.jsx';


export default function AllEntries(){

    return( <>
           <p className="all_entries">all entries:<span>{CountAll}</span></p>
        </>
    )

}