/* eslint-disable react/prop-types */
import './status.css'


export default function AllEntries({allEntries}){

    return( <>
        <div><p className="all_entries">all entries:<span>{allEntries}</span></p></div>   
        </>
    )

}