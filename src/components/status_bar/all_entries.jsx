import './status.css'
import CountAll from '../counters/countAll.jsx';


export default function AllEntries(){

    return( <>
        <div><p className="all_entries">all entries:<span>{CountAll}</span></p></div>   
        </>
    )

}