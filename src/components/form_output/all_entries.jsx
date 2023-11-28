import './status.css'
import CountAll from '../src/components/counters/countAll.jsx';


export default function AllEntries(){

    return( <>
           <h2>all entries:<span>{CountAll}</span></h2>
        </>
    )

}